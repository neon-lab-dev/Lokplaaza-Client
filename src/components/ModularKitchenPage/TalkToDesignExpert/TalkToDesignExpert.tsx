"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../../Reusable/Container/Container";
import TextInput from "../../Reusable/TextInput/TextInput";
import Button from "../../Reusable/Button/Button";
import { useForm } from "react-hook-form";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

const TalkToDesignExpert = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  const isLoading = false;

  const handleBookConsultation = (data: TFormData) => {
    console.log("Login Data:", data);
  };
  return (
    <div className="relative">
      <Image
        src={IMAGES.talkToDesignExpert}
        alt=""
        className="w-full h-[917px] object-cover"
      />
      {/* Gradient overlay covering full image */}
      <div className="absolute inset-0 bg-gray-900/40 z-10 h-full"></div>
      <Container>
        <div className="absolute top-20 z-20">
          <h3 className="text-white text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-9 lg:leading-11 2xl:leading-16">
            Talk to a design expert today!
          </h3>
          <form
            onSubmit={handleSubmit(handleBookConsultation)}
            className="space-y-6 mt-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <>
                <input
                  placeholder="Enter your full name"
                  className={`px-[18px] py-3.5 rounded-lg border focus:outline-none border-neutral-10 text-neutral-10 focus:border-primary-10 transition duration-300`}
                />
                {errors?.name?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors?.name?.message)}
                  </span>
                )}
              </>
              <>
                <input
                  placeholder="Enter your full name"
                  className={`px-[18px] py-3.5 rounded-lg border focus:outline-none border-neutral-10 text-neutral-10 focus:border-primary-10 transition duration-300`}
                />
                {errors?.name?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors?.name?.message)}
                  </span>
                )}
              </>
              <>
                <input
                  placeholder="Enter your full name"
                  className={`px-[18px] py-3.5 rounded-lg border focus:outline-none border-neutral-10 text-neutral-10 focus:border-primary-10 transition duration-300`}
                />
                {errors?.name?.message && (
                  <span className="text-red-500 text-sm">
                    {String(errors?.name?.message)}
                  </span>
                )}
              </>
            </div>

            <Button
              label={isLoading ? "Please wait..." : "Book Consultation"}
              bgColor="bg-success-05"
              icon={ICONS.rightArrow}
              className="w-full"
            />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default TalkToDesignExpert;
