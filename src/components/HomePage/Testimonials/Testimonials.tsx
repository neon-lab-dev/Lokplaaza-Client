import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { IMAGES } from "@/assets";

const Testimonials = () => {
  const testimonials = [
    {
      image: IMAGES.testimonial1,
      name: "Priya Sharma",
      clientImage: IMAGES.ShopByRoom,
      position: "Gwalior",
      message:
        "Got our modular kitchen done through Lokplaaza and couldn't be happier. Told them our layout and budget, they handled everything — from material selection to installation. Clean finish, on-time delivery, zero stress. The customized storage units they suggested were a bonus. Highly recommend!",
    },
    {
      image: IMAGES.testimonial2,
      name: "Karthik Nair",
      clientImage: IMAGES.ShopByRoom,
      position: "Bangalore",
      message:
        "Was skeptical ordering customized furniture online but Lokplaaza changed that. Got a modular kitchen plus a custom wardrobe for the master bedroom — both came out exactly as shown in the 3D preview. Quality is solid and the team was responsive throughout. Great experience overall.",
    },
    {
      image: IMAGES.testimonial3,
      name: "Neha Kapoor",
      clientImage: IMAGES.ShopByRoom,
      position: "Delhi",
      message:
        "Ordered a full modular kitchen setup and a customized study unit. The craftsmanship is genuinely good — better than what most local vendors offer at this price point. Installation took 2 extra days but the end result was worth the wait. Will definitely order again for the living room next.",
    },
  ];
  return (
    <div className="bg-neutral-10 py-[55px] xl:py-[93px]">
      <Container>
        <Heading
          heading="TESTIMONIALS"
          title="Our Client Reviews"
          alignClass="text-center"
        />
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6 lg:gap-12 mt-12">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              image={t.image}
              name={t.name}
              clientImage={t.clientImage}
              position={t.position}
              message={t.message}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
