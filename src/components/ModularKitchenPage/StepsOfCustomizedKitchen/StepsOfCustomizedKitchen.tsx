"use client";
import { ICONS, IMAGES } from "@/assets";
import Container from "../../Reusable/Container/Container";
import Image from "next/image";
import Heading from "@/components/Reusable/Heading/Heading";
import Button from "@/components/Reusable/Button/Button";

const StepsOfCustomizedKitchen = () => {
  const stepsOfCustomizedKitchen = [
    {
      title: "Upload Inspiration",
      description: "Upload photos of your desired kitchen style.",
      image: IMAGES.uploadInspiration,
      numberIcon: ICONS.number1,
    },
    {
      title: "Get Quote",
      description:
        "Get a final quote from our team if the desired style is possible or not.",
      image: IMAGES.getAQuote,
      numberIcon: ICONS.number2,
    },
    {
      title: "Talk with our team",
      description:
        "Once the design is approved our team will reach out to you for final pricing and other discussions.",
      image: IMAGES.talkToTeam,
      numberIcon: ICONS.number3,
    },
    {
      title: "Getting started",
      description:
        "Once all the important discussions and pricings are finalized, work will be started by our team.",
      image: IMAGES.gettingStarted,
      numberIcon: ICONS.number4,
    },
  ];

  return (
    <Container>
      <div className="py-16 md:py-24 font-Satoshi">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading
            title="Steps to get your customized kitchen"
            alignClass="text-center"
          />
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Follow our structured process from concept to completion
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stepsOfCustomizedKitchen.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden h-full hover:border-success-300 transition-colors duration-200">
                {/* Step Number */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center">
                    <span className="text-lg font-semibold text-neutral-700">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 bg-neutral-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Note */}
        <div className="mt-10 pt-10 border-t border-neutral-200 flex flex-col items-center justify-center">
          <p className="text-neutral-05 mb-6">
            Our streamlined process ensures clear communication and timely
            delivery
          </p>
          <Button
            type="submit"
            label="Book Free Consultation"
            icon={ICONS.rightArrow}
            onClick={() => {
              const section = document.getElementById("book-consultation");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default StepsOfCustomizedKitchen;
