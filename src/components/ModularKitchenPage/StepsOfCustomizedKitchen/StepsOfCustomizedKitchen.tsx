import { ICONS, IMAGES } from "@/assets";
import Container from "../../Reusable/Container/Container";
import Image from "next/image";

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
      <div className="py-14 font-Satoshi">
        <h3 className="text-neutral-20 text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-9 lg:leading-11 2xl:leading-16">
          Steps to get your customized kitchen
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[68px] mt-12 2xl:mt-[92px]">
          {stepsOfCustomizedKitchen.map((step, index) => {
            const positionClass =
              index % 2 === 0
                ? "left-0 -top-6 md:-top-8"
                : "right-0 -top-6 md:-top-8";

            return (
              <div key={index} className="relative">
                {/* Number icon floating above card */}
                <div className={`absolute z-30 ${positionClass}`}>
                  <Image
                    src={step.numberIcon}
                    alt={`Step ${index + 1}`}
                    width={78}
                    height={98}
                  />
                </div>

                {/* Card container */}
                <div className="rounded-xl overflow-hidden h-[281px] relative">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gray-900/50 z-10 h-full"></div>

                  {/* Background Image */}
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="object-cover w-full h-full"
                    fill
                  />

                  {/* Text at bottom */}
                  <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col gap-3 z-20">
                    <h3 className="text-xl font-bold leading-6">
                      {step.title}
                    </h3>
                    <p className="text-success-10 text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default StepsOfCustomizedKitchen;
