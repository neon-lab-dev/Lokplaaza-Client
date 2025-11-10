"use client";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import { ICONS } from "@/assets";
import Image from "next/image";

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Luxury Facilities",
      description: "The advantage of hiring a workspace with us is that it gives you comfortable service and all-round facilities.",
      icon: ICONS.sparkles,
    },
    {
      title: "Affordable Price",
      description: "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.",
      icon: ICONS.rupee,
    },
    {
      title: "Many Choices",
      description: "We provide many unique workspace choices so that you can choose the workspace to your liking.",
      icon: ICONS.collection,
    },
  ];
  return (
    <div className="py-10 bg-success-15 font-Satoshi">
      <Container>
        <Heading
          heading="LOKPLAAZA STUDIO"
          title="Why Choose Us?"
          alignClass="text-left xl:text-center"
          titleColor="text-white"
        />
        <div className="flex flex-col xl:flex-row gap-6 mt-12 md:mt-[120px]">
          {whyChooseUsData.map((whyChoose, index) => {
            return <div key={index} className="bg-white rounded-2xl md:rounded-4xl p-6 w-full space-y-4">
                <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center">
                    <h2 className="text-neutral-20 font-medium text-xl md::text-3xl">{whyChoose.title}</h2>
                    <Image src={whyChoose.icon} alt={whyChoose.title} className="size-8 m-[15px]"/> 
                </div>
                <p className="text-neutral-20">{whyChoose.description}</p>
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
