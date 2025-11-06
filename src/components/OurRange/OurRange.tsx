"use client";
import Image from "next/image";
import { useState } from "react";
import { ICONS, IMAGES } from "../../assets";
import Container from "./../Reusable/Container/Container";

const OurRange = () => {
  const accordingData = [
    {
      title: "Straight",
      images: [IMAGES.talkToTeam, IMAGES.talkToTeam, IMAGES.talkToTeam],
      imageAlt:
        "Straight modular kitchen layout with modern cabinets and appliances",
    },
    {
      title: "L-Shaped",
      images: [IMAGES.talkToTeam],
      imageAlt:
        "L-shaped modular kitchen design with countertop and storage space",
    },
    {
      title: "U-Shaped",
      images: [IMAGES.talkToTeam],
      imageAlt:
        "U-shaped modular kitchen with ample workspace and modern finishes",
    },
  ];

  const [isAccordingOpen, setIsAccordingOpen] = useState<number | null>(null);

  const handleClick = (index: number) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <Container>
      <h3 className="text-neutral-20 text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-9 lg:leading-11 2xl:leading-16">
        Our Range
      </h3>

      <div className="flex gap-3 flex-col w-full mt-12">
        {accordingData.map((according, index) => (
          <article
            key={index}
            className="rounded-xl border border-neutral-25 overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full p-6 bg-neutral-35"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-neutral-20 font-semibold text-xl leading-6">
                {according.title}
              </h2>
              <Image
                src={ICONS.downArrow}
                alt={
                  isAccordingOpen === index
                    ? "Collapse section"
                    : "Expand section"
                }
                className={`transition-transform duration-300 ${
                  isAccordingOpen === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Accordion content */}
            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                isAccordingOpen === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-0 mt-5 flex flex-col md:flex-row gap-6">
                {according?.images?.map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={according.imageAlt}
                    className="w-[200px] h-[200px] object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default OurRange;
