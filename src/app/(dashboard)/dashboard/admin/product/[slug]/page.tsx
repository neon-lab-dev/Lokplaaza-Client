/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { useState, useEffect } from "react";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import Button from "@/components/Reusable/Button/Button";
import ColorAndSizesField from "@/components/Dashboard/AddProduct/ColorAndSizesField";
import toast from "react-hot-toast";
import {
  useAddProductMutation,
  useGetSingleProductByIdQuery,
  useUpdateProductMutation,
} from "@/redux/features/Product/productApi";
import { FiTrash2 } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";

const AddProduct = () => {
  const { slug } = useParams();
  const isEditMode = slug !== "add" && slug?.startsWith("update-");
  const productId = isEditMode ? slug?.replace("update-", "") : null;

  const { data: productData, isLoading: isLoadingProduct } =
    useGetSingleProductByIdQuery(productId, {
      skip: !isEditMode || !productId,
    });
  const productDetails = productData?.data || {};

  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const isLoading = isAdding || isUpdating;

  const router = useRouter();

  const { data: categories } = useGetAllCategoriesQuery({
    page: 1,
    limit: 200,
  });
  const allCategoryNames = categories?.data?.categories?.map(
    (category: any) => category.name,
  );

  const [previews, setPreviews] = useState<string[]>([]);
  const [removedImages, setRemovedImages] = useState<string[]>([]);

  const methods = useForm<any>({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      colors: [
        {
          colorName: "",
          sizes: [{ size: "", quantity: 0, basePrice: 0, discountedPrice: 0 }],
        },
      ],
      imageUrls: [],
    },
  });

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = methods;

  const {
    fields: colorFields,
    append: appendColor,
    remove: removeColor,
  } = useFieldArray({
    control,
    name: "colors",
  });

  const {
    fields: imageFields,
    append: appendImage,
    remove: removeImage,
  } = useFieldArray({
    control,
    name: "imageUrls",
  });

  // Set default values when in edit mode and product details are loaded
  useEffect(() => {
    if (
      isEditMode &&
      productDetails &&
      Object.keys(productDetails).length > 0
    ) {
      // Prepare existing images
      const existingImages =
        productDetails.imageUrls?.map((url: string) => ({
          file: url, // Store the URL as string for existing images
          isExisting: true,
        })) || [];

      // Set previews for existing images
      if (productDetails.imageUrls?.length > 0) {
        setPreviews(productDetails.imageUrls);
      }

      // Reset form with product details
      reset({
        name: productDetails.name || "",
        category: productDetails.category || "",
        description: productDetails.description || "",
        colors: productDetails.colors || [
          {
            colorName: "",
            sizes: [
              { size: "", quantity: 0, basePrice: 0, discountedPrice: 0 },
            ],
          },
        ],
        imageUrls: existingImages,
      });
    }
  }, [isEditMode, productDetails, reset]);

  const handleSubmitProduct = async (
    data: any & {
      imageUrls?: { file?: File | string; isExisting?: boolean }[];
    },
  ) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("description", data.description);

    data.colors?.forEach((color: any, colorIndex: number) => {
      formData.append(`colors[${colorIndex}][colorName]`, color.colorName);
      color.sizes.forEach((size: any, sizeIndex: number) => {
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][size]`,
          size.size,
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][quantity]`,
          size.quantity.toString(),
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][basePrice]`,
          size.basePrice.toString(),
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][discountedPrice]`,
          size.discountedPrice.toString(),
        );
      });
    });

    // Handle image URLs - only append new files
    data.imageUrls?.forEach((imgObj: any) => {
      if (imgObj.file instanceof File) {
        formData.append("files", imgObj.file);
      }
    });

    // Track which existing images to keep (not removed)
    const existingImagesToKeep = data.imageUrls
      ?.filter(
        (imgObj: any) =>
          imgObj.isExisting === true && typeof imgObj.file === "string",
      )
      .map((imgObj: any) => imgObj.file);

    if (existingImagesToKeep?.length > 0) {
      formData.append(
        "existingImageUrls",
        JSON.stringify(existingImagesToKeep),
      );
    }

    // Track removed images
    if (removedImages.length > 0) {
      formData.append("removedImageUrls", JSON.stringify(removedImages));
    }

    try {
      if (isEditMode && productId) {
        // Update product
        const response = await updateProduct({
          data: formData,
          id: productId,
        }).unwrap();

        if (response?.success) {
          toast.success(
            response?.data?.message || "Product updated successfully!",
          );
          router.push("/dashboard/admin/products");
        } else {
          toast.error(response?.message || "Failed to update product");
        }
      } else {
        // Add new product
        const response = await addProduct(formData).unwrap();
        if (response?.success) {
          toast.success(
            response?.data?.message || "Product added successfully!",
          );
          router.push("/dashboard/admin/products");
        } else {
          toast.error(response?.message || "Failed to add product");
        }
      }
    } catch (err: any) {
      toast.error(
        err?.data?.message || err?.message || "Something went wrong!",
      );
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue(`imageUrls.${index}.file`, file);
    setValue(`imageUrls.${index}.isExisting`, false);

    const newPreviews = [...previews];
    newPreviews[index] = URL.createObjectURL(file);
    setPreviews(newPreviews);
  };

  const handleRemoveImage = (
    index: number,
    isExisting: boolean,
    imageUrl?: string,
  ) => {
    if (isExisting && imageUrl) {
      // Track removed existing image
      setRemovedImages([...removedImages, imageUrl]);
    }

    // Remove from form
    removeImage(index);

    // Remove from previews
    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
  };

  // Show loading state while fetching product data in edit mode
  if (isEditMode && isLoadingProduct) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-05 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditMode ? "Update Product" : "Add New Product"}
      </h1>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(handleSubmitProduct)}
          className="flex flex-col gap-4 mt-6 w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <TextInput
              label="Product Name"
              placeholder="Enter product name"
              error={errors.name}
              {...register("name", {
                required: "Product name is required",
              })}
            />

            {/* Category */}
            <SelectDropdown
              label="Category"
              {...register(`category`, {
                required: "Category is required",
              })}
              error={errors?.category}
              options={allCategoryNames || []}
            />
          </div>

          {/* Description */}
          <Textarea
            label="Description"
            placeholder="Write product description..."
            rows={4}
            error={errors?.description}
            {...register("description", {
              required: "Description is required",
            })}
          />

          {/* Images */}
          <div className="space-y-4">
            <h3 className="text-neutral-05 leading-[18px] text-[15px] font-medium tracking-[-0.16]">
              Product Images (max 4)
            </h3>
            {imageFields.map((field, index) => {
              const isExisting = field.isExisting === true;
              const previewSource = isExisting ? field.file : previews[index];

              return (
                <div
                  key={field.id}
                  className="flex flex-col md:flex-row items-center gap-3 p-3 border border-gray-200 rounded-lg"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className="rounded-lg p-2 w-[300px] border border-neutral-05/20"
                    onChange={(e) => handleFileChange(e, index)}
                    disabled={isExisting} // Disable file input for existing images
                  />

                  {/* Show preview */}
                  {previewSource && (
                    <img
                      src={previewSource}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}

                  {/* Show label for existing images */}
                  {isExisting && (
                    <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                      Existing Image
                    </span>
                  )}

                  {/* Remove button - works for both existing and new images */}
                  <FiTrash2
                    className="cursor-pointer size-5 text-red-500 hover:text-red-700 transition-colors"
                    onClick={() =>
                      handleRemoveImage(
                        index,
                        isExisting,
                        isExisting ? field.file : undefined,
                      )
                    }
                  />
                </div>
              );
            })}

            {imageFields.length < 4 && (
              <Button
                type="button"
                label="Add Image"
                className="py-2 px-4"
                onClick={() =>
                  appendImage({ file: undefined, isExisting: false })
                }
              />
            )}
          </div>

          {/* Color and sizes */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Colors & Sizes</h3>

            {colorFields.map((color, colorIndex) => (
              <ColorAndSizesField
                key={color.id}
                colorIndex={colorIndex}
                removeColor={removeColor}
              />
            ))}

            <Button
              variant="primary"
              type="button"
              label="Add Color"
              classNames="py-2 px-4"
              onClick={() =>
                appendColor({
                  colorName: "",
                  sizes: [
                    {
                      size: "",
                      quantity: 0,
                      basePrice: 0,
                      discountedPrice: 0,
                    },
                  ],
                })
              }
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="button"
              variant="outline"
              label="Cancel"
              onClick={() => router.push("/dashboard/admin/products")}
            />
            <Button
              label={
                isLoading
                  ? "Saving..."
                  : isEditMode
                    ? "Update Product"
                    : "Save Product"
              }
              type="submit"
              disabled={isLoading}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
