/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useRef } from "react";
import TextInput from "@/components/Reusable/TextInput/TextInput";

interface ProductFormData {
  name: string;
  basePrice: number;
  discountedPrice: number;
  category: string;
  size: string;
  customSize?: string;
  material: string;
  color: string;
  description: string;
  images: FileList;
}

interface ImagePreview {
  url: string;
  file: File;
  id: string;
}

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProductFormData>();

  const size = watch("size");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const sizes = ["Single", "Double", "Queen", "King", "Custom"];

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages: ImagePreview[] = [];

    // Convert FileList to array and take only up to 6 images
    const filesArray = Array.from(files).slice(0, 6 - imagePreviews.length);

    filesArray.forEach((file) => {
      const url = URL.createObjectURL(file);
      newImages.push({
        url,
        file,
        id: Math.random().toString(36).substr(2, 9),
      });
    });

    setImagePreviews((prev) => [...prev, ...newImages]);

    // Update react-hook-form value
    const dataTransfer = new DataTransfer();
    [...imagePreviews, ...newImages].forEach((img) =>
      dataTransfer.items.add(img.file)
    );
    setValue("images", dataTransfer.files);
  };

  // Remove image from preview
  const removeImage = (id: string) => {
    const updatedPreviews = imagePreviews.filter((img) => img.id !== id);
    setImagePreviews(updatedPreviews);

    // Update react-hook-form value
    const dataTransfer = new DataTransfer();
    updatedPreviews.forEach((img) => dataTransfer.items.add(img.file));
    setValue("images", dataTransfer.files);

    // Clean up URL
    const removedImage = imagePreviews.find((img) => img.id === id);
    if (removedImage) {
      URL.revokeObjectURL(removedImage.url);
    }
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const onSubmit: SubmitHandler<ProductFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      console.log("Product data:", data);
      console.log("Images:", imagePreviews);

      // You would typically upload images and send data to your API here
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Product added successfully!");

      // Clean up image URLs
      imagePreviews.forEach((img) => URL.revokeObjectURL(img.url));
      setImagePreviews([]);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const basePrice = watch("basePrice");
  const discountedPrice = watch("discountedPrice");
  const discountPercentage =
    basePrice && discountedPrice
      ? Math.round(((basePrice - discountedPrice) / basePrice) * 100)
      : 0;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Product Name */}
        <TextInput
          label="Product Name"
          placeholder="Enter product name"
          type="text"
          error={errors.name}
          {...register("name", {
            required: "Product name is required",
            minLength: {
              value: 2,
              message: "Product name must be at least 2 characters",
            },
          })}
        />

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("size", { required: "Size is required" })}
          >
            <option value="">Select size</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.size && (
            <p className="mt-1 text-sm text-red-600">{errors.size.message}</p>
          )}
        </div>

        {/* Size */}
        {size === "Custom" && (
          <TextInput
            label="Custom Size"
            placeholder="e.g. 200cm x 150cm, 20st x 15st etc."
            type="text"
            error={errors.customSize}
            {...register("customSize", {
              required: "Custom size is required when Custom is selected",
            })}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Base Price */}
          <TextInput
            label="Base Price(₹)"
            placeholder="Enter base price"
            type="number"
            error={errors.basePrice}
            {...register("basePrice", {
              required: "Base price is required",
              min: {
                value: 0,
                message: "Price must be positive",
              },
            })}
          />

          {/* Discounted Price */}
          <TextInput
            label="Discounted Price(₹)"
            placeholder="Enter discounted price"
            type="number"
            error={errors.discountedPrice}
            {...register("discountedPrice", {
              required: "Discounted price is required",
              min: {
                value: 0,
                message: "Price must be positive",
              },
              validate: (value) => {
                const basePrice = watch("basePrice");
                if (basePrice && value > basePrice) {
                  return "Discounted price cannot be higher than base price";
                }
                return true;
              },
            })}
          />
        </div>

        {/* Discount Display */}
        {basePrice && discountedPrice && discountedPrice < basePrice && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 font-medium">
              Discount: {discountPercentage}% off
            </p>
            <p className="text-green-600 text-sm">
              You're saving ₹{(basePrice - discountedPrice).toFixed(2)}
            </p>
          </div>
        )}

        {/* Material */}
        <TextInput
          label="Material"
          placeholder="e.g., Wood, Metal, Fabric"
          type="text"
          error={errors.material}
          {...register("material", {
            required: "Material is required",
          })}
        />

        {/* Color */}
        <TextInput
          label="Color"
          placeholder="e.g., Red, Blue, Green"
          type="text"
          error={errors.color}
          {...register("color", {
            required: "Color is required",
          })}
        />

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter product description"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters",
              },
            })}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Images {`(${imagePreviews.length}/6)`}
          </label>

          {/* Hidden file input */}
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          {/* Upload button */}
          <button
            type="button"
            onClick={triggerFileInput}
            disabled={imagePreviews.length >= 6}
            className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex flex-col items-center justify-center py-4">
              <svg
                className="w-8 h-8 text-gray-400 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Click to upload images ({6 - imagePreviews.length} remaining)
              </p>
            </div>
          </button>

          {/* Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Selected Images:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imagePreviews.map((image) => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.url}
                      alt="Preview"
                      className="w-full h-24 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {errors.images && (
            <p className="mt-1 text-sm text-red-600">{errors.images.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || imagePreviews.length === 0}
          className="w-full bg-success-05 text-white py-3 px-4 rounded-lg font-medium hover:bg-success-06 focus:outline-none focus:ring-2 focus:ring-success-05 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isSubmitting ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
