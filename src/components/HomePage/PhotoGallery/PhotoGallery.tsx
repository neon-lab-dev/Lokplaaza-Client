"use client";
import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const images = [
  IMAGES.TryARView,
  IMAGES.TryARView,
  IMAGES.TryARView,
  IMAGES.TryARView,
  IMAGES.TryARView,
  IMAGES.TryARView,
];

const PhotoGallery: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-100 flex justify-center items-center p-8">
      <div className="flex flex-col gap-8">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-6 gap-4 items-center justify-center"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden shadow-sm ${
                  i === 2 ? "col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src={src}
                  alt={`Image ${i + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default PhotoGallery;
