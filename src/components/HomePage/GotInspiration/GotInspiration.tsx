/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useUploadInspirationImageMutation } from "@/redux/features/InspirationRequests/inspirationRequestsApi";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiX } from "react-icons/bi";

type InspirationFormValues = {
  name: string;
  phoneNumber: string;
  image: FileList;
};

const GotInspiration = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [uploadInspirationImage, {isLoading}] = useUploadInspirationImageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InspirationFormValues>();

  const onSubmit = async (data: InspirationFormValues) => {
    if (!data.image?.length) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("file", data.image[0]);

    toast.promise(uploadInspirationImage(formData).unwrap(), {
      loading: "Uploading inspiration...",
      success: () => {
        setIsModalOpen(false);
        reset();
        return "Inspiration submitted successfully! We will contact with you shortly.";
      },
      error: (err: any) => err?.data?.message || "Upload failed",
    });
  };
  return (
    <div className="xl:relative py-14 xl:py-0 font-Satoshi bg-primary-15 xl:h-screen flex items-center">
      <div className="hidden xl:block xl:absolute h-full w-full top-0 left-0 bottom-0">
        <Image
          src={IMAGES.GotInspiration}
          alt={"shop by room"}
          className="w-full max-w-[55%] h-full  object-cover xl:rounded-r-3xl"
        />
      </div>
      <Container>
        <div className="flex flex-col xl:flex-row-reverse items-center justify-center gap-11 xl:gap-5 md:gap-40.5">
          <div className="relative z-9999 w-full xl:w-[40%]">
            <Heading
              heading="GOT INSPIRATION? WE ARE HERE!"
              title="Got a Picture? We’ll Build It"
              alignClass="text-center xl:text-right"
              headingColor="text-secondary-10"
              titleColor="text-white"
            />
            <p className="text-neutral-10 text-center xl:text-right text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Already have a design or style in mind? Upload your inspiration
              photo and let our team curate pieces just for you.
            </p>
            <div className="flex justify-center xl:justify-end">
              <Button
                label="Upload Now"
                bgColor="bg-success-05 z-[999]"
                textColor="text-success-10"
                icon={ICONS.imageIcon}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[60%] ">
            <Image
              src={IMAGES.GotInspiration}
              alt={"shop by room"}
              className="w-full h-95 md:h-119 xl:hidden xl:h-201 xl:w-203 object-cover rounded-3xl md:rounded-t-3xl xl:rounded-r-3xl"
            />
          </div>
        </div>
      </Container>
      <Modal isModalOpen={isModalOpen} width="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[30%]">
        <div className="px-6 pt-6">
          <div className="w-full flex justify-end items-center">
            <BiX
              className="text-neutral-20 text-2xl cursor-pointer"
              onClick={() => {
                setIsModalOpen(false);
              }}
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <p className="text-[13px] md:text-xl font-medium mx-auto w-fit">Upload Your Inspiration</p>

            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              error={errors.name}
              {...register("name", { required: "Name is required" })}
            />

            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              error={errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />

            {/* ✅ PROPER IMAGE INPUT */}
            <div>
              <label className="block mb-2 font-medium text-neutral-05">
                Inspiration Image <span className="text-red-600"> *</span>
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
                className="w-full border border-neutral-30 rounded-lg p-3 file:mr-4 file:rounded-md file:border-0 file:bg-success-05 file:text-white cursor-pointer"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">Image is required</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                label={isLoading ? "Uploading..." : "Submit"}
                className="w-full"
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default GotInspiration;
