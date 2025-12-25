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
  mobile: string;
};

const TalkToDesignExpert = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>();

  const handleBookConsultation = (data: TFormData) => {
    console.log("Consultation Data:", data);
    // Handle form submission
  };

  return (
    <div className="relative min-h-150 md:min-h-175 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.talkToDesignExpert}
          alt="Modern kitchen design expert consultation"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <Container>
        <div className="relative z-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                    Expert Consultation
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Talk to a design expert{" "}
                    <span className="text-success-400">today!</span>
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                    Get personalized kitchen design advice from our experienced
                    professionals. Schedule a free consultation to bring your
                    dream kitchen to life.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mt-12">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-success-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Free design consultation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-success-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">
                      Personalized 3D renderings
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-success-500/20 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-success-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-white/90">Transparent pricing</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white backdrop-blur-lg rounded-2xl border border-white/20 p-8 md:p-10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-success-05 mb-3">
                    Book Your Free Consultation
                  </h2>
                  <p className="text-neutral-05">
                    Fill in your details and our expert will contact you within
                    24 hours
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(handleBookConsultation)}
                  className="space-y-6"
                >
                  <TextInput
                    label="Full Name"
                    placeholder="Enter your full name"
                    error={errors.name}
                    {...register("name", { required: "Name is required" })}
                  />

                  <TextInput
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
                    error={errors.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />

                  <TextInput
                    label="Mobile Number"
                    placeholder="Enter your mobile number"
                    type="tel"
                    error={errors.mobile}
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                    })}
                  />

                  <Button
                    type="submit"
                    label={
                      isSubmitting ? "Sending..." : "Book Free Consultation"
                    }
                    icon={ICONS.rightArrow}
                    className="w-full  group"
                    isDisabled={isSubmitting}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TalkToDesignExpert;
