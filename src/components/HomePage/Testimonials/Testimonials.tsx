import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { IMAGES } from "@/assets";

const Testimonials = () => {
  const testimonials = [
    {
      image: IMAGES.testimonial1,
      name: "John Doe",
      clientImage: IMAGES.ShopByRoom,
      position: "Product Designer",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem doloribus consectetur iste, adipisci nam quo aspernatur magni eos delectus provident necessitatibus.",
    },
    {
      image: IMAGES.testimonial2,
      name: "Sarah Johnson",
      clientImage: IMAGES.ShopByRoom,
      position: "Marketing Lead",
      message:
        "Quisquam, voluptatem! Reiciendis repellendus quos dolores fugit sequi at saepe nesciunt. Eveniet corporis praesentium voluptate animi.",
    },
    {
      image: IMAGES.testimonial3,
      name: "Michael Smith",
      clientImage: IMAGES.ShopByRoom,
      position: "CEO, Brandify",
      message:
        "Doloremque sequi asperiores harum, temporibus delectus doloribus possimus, quae adipisci quas quibusdam laboriosam repellat.",
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
        <div className="flex flex-col xl:flex-row justify-center items-center gap-12 mt-12">
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
