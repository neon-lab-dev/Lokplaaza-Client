/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import {
  useForm,
  FormProvider,
  useFieldArray,
} from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import Button from "@/components/Reusable/Button/Button";
import ColorAndSizesField from "@/components/Dashboard/AddProduct/ColorAndSizesField";
import toast from "react-hot-toast";
import { useAddProductMutation } from "@/redux/features/Product/productApi";
import { FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const router = useRouter();

  const [addProduct, { isLoading }] = useAddProductMutation();

  const categories = [
    "Bed",
    "Mattress",
    "Bed Frame",
    "Nightstand",
    "Dresser",
    "Wardrobe",
    "Sofa",
    "Dining Table",
    "Dining Chair",
    "Kitchen Cabinet",
    "Coffee Table",
    "Bookshelf",
  ];

  const [previews, setPreviews] = useState<string[]>([]);

  const methods = useForm<any>({
    defaultValues: {
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

  const handleSubmitProduct = async (
    data: any & { imageUrls?: { file?: File | string }[] }
  ) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("category", data.category);
    if (data.clothDetails) formData.append("clothDetails", data.clothDetails);
    if (data.madeIn) formData.append("madeIn", data.madeIn);
    formData.append("description", data.description);
    if (data.productStory) formData.append("productStory", data.productStory);

    data.colors?.forEach((color:any, colorIndex:number) => {
      formData.append(`colors[${colorIndex}][colorName]`, color.colorName);
      color.sizes.forEach((size:any, sizeIndex:number) => {
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][size]`,
          size.size
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][quantity]`,
          size.quantity.toString()
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][basePrice]`,
          size.basePrice.toString()
        );
        formData.append(
          `colors[${colorIndex}][sizes][${sizeIndex}][discountedPrice]`,
          size.discountedPrice.toString()
        );
      });
    });

    data.imageUrls?.forEach((imgObj:any) => {
      if (imgObj.file instanceof File) {
        formData.append("files", imgObj.file);
      }
    });

    try {
      // if (action === "update") {
      //   const response = await updateProduct({ data: formData, id }).unwrap();
      //   toast.success(
      //     response?.data?.message || "Product updated successfully!"
      //   );
      //   navigate("/dashboard/admin/products");
      // } else {
      //   const response = await addProduct(formData).unwrap();
      //   if(response?,success){
      //     toast.success(response?.data?.message || "Product added successfully!");
      //   router.push("/dashboard/admin/products");
      //   }
      // }
      const response = await addProduct(formData).unwrap();
      if (response?.success) {
        toast.success(response?.data?.message || "Product added successfully!");
        router.push("/dashboard/admin/products");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue(`imageUrls.${index}.file`, file);
    const newPreviews = [...previews];
    newPreviews[index] = URL.createObjectURL(file);
    setPreviews(newPreviews);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h1>

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
              options={categories || []}
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
            <h3 className="text-neutral-05 leading-[18px] text-[15px] font-medium tracking-[-0.16] ">
              Product Images (max 4)
            </h3>
            {imageFields.map((field, index) => {
              const isExistingUrl = typeof field.file === "string";
              const previewSource = isExistingUrl
                ? field.file
                : previews[index];

              return (
                <div
                  key={field.id}
                  className="flex flex-col md:flex-row items-center gap-3"
                >
                  <input
                    type="file"
                    accept="image/*"
                    className=" rounded-lg p-2 w-[300px] border border-neutral-05/20"
                    onChange={(e) => handleFileChange(e, index)}
                  />

                  {/* Show preview */}
                  {previewSource && (
                    <img
                      src={previewSource}
                      alt="Preview"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  )}

                  {imageFields.length > 1 && (
                    <FiTrash2
                      className="cursor-pointer size-5 text-red-500"
                      onClick={() => {
                        removeImage(index);
                        const newPreviews = previews.filter(
                          (_, i) => i !== index
                        );
                        setPreviews(newPreviews);
                      }}
                    />
                  )}
                </div>
              );
            })}

            {imageFields.length < 4 && (
              <Button
                type="button"
                label="Add Image"
                className="py-2 px-4"
                onClick={() => appendImage({ file: undefined })}
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
          <div className="flex justify-end gap-4">
            <Button
              label={isLoading ? "Loading..." : "Save Product"}
              type="submit"
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddProduct;
