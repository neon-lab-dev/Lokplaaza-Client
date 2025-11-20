"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
  const carouselItems = [IMAGES.sofa1, IMAGES.heroImgGreen, IMAGES.heroImgRed];
  const rating = 4.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  const [currentSlider, setCurrentSlider] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === carouselItems.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, carouselItems.length]);

  return (
    <Container>
      <div className="font-Satoshi mt-10">
        {/* Breadcrumbs */}
        <div className="">
          <p className="text-neutral-40 text-sm lg:text-xl font-medium">
            Home {">"} Home Furniture {">"}{" "}
            <span className="text-success-30 font-bold">
              2 Seater Recliner Sofa
            </span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-12">
          {/* Images */}
          <div className="w-full lg:w-[50%]">
            <div className="relative h-60 sm:h-96 md:h-[540px] w-full rounded-2xl overflow-hidden">
              <Image
                src={carouselItems[currentSlider]}
                alt="product"
                fill
                className="object-cover"
              />
            </div>

            {/* slider container */}
            <div className="flex items-center gap-3 p-2">
              {/* sliders */}
              {carouselItems.map((slide, inx) => (
                <Image
                  width={1200}
                  height={540}
                  onClick={() => setCurrentSlider(inx)}
                  key={inx}
                  src={slide}
                  className={`w-16 bg-black/20 h-12 md:h-12 md:w-20 ${
                    currentSlider === inx ? "border-2 border-black p-px" : ""
                  } box-content cursor-pointer rounded-md md:rounded-lg`}
                  alt={""}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-[50%]">
            <h1 className="text-neutral-20 text-2xl font-bold leading-8">
              2 - Seater Recliner Sofa
            </h1>
            <h2 className="text-neutral-20 font-bold leading-8 mt-5">
              ₹ 4,490/-
            </h2>
            <p className="text-neutral-40 text-xsm font-medium">
              incl all taxes
            </p>

            {/* Ratings */}
            <div className="flex items-center gap-1 mt-2">
              {renderStars()}
              <span className="text-neutral-40 text-sm ml-2">{rating}</span>
            </div>

            {/* Description */}
            <p className="text-neutral-40 text-xsm font-medium mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              dolorum, beatae enim aliquid est doloribus eaque quaerat velit
              dignissimos praesentium nam voluptate cumque pariatur quisquam
              maxime quo laborum, sequi culpa commodi nihil vero quis. Repellat
              debitis assumenda maiores aliquid cumque! Ut alias suscipit
              accusamus animi repellendus molestiae natus ab eum?
            </p>

            <Button
              label="Customize Now"
              icon={ICONS.rightArrow}
              className="w-full mt-5"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
