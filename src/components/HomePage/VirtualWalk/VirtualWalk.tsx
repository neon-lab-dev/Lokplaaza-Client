"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const VirtualWalk = () => {
  return (
    <div className="py-16 md:py-24 bg-linear-to-b from-white via-neutral-50 to-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={IMAGES.shopView}
                  alt="Virtual store walkthrough"
                  className="w-full h-auto object-cover aspect-4/3 lg:aspect-auto lg:h-125 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* 360° Icon Overlay */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 animate-ping bg-success-500/30 rounded-full"></div>
                    <div className="relative bg-success-05 backdrop-blur-sm p-3 rounded-full">
                      <Image
                        src={ICONS.walk360degree}
                        alt="360° virtual tour"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Hint */}
                <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  🔍 View in 360 degree mode
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-success-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-neutral-100 rounded-full -z-10"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-lg">
              {/* Badge */}
              <span className="inline-block py-1.5 bg-success-50 text-success-700 rounded-full text-sm font-medium mb-4">
                IMMERSIVE EXPERIENCE
              </span>

              <Heading
                heading="VIRTUAL WALK"
                title="Step Inside Without Stepping Out"
                alignClass="text-left"
              />

              <p className="text-lg text-neutral-600 mt-6 mb-8 leading-relaxed">
                Take a 360° virtual tour of our store and experience our
                furniture up close. Explore designs, textures, and layouts — all
                from the comfort of your home.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-success-600"
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
                  <span className="text-neutral-700">
                    360° panoramic view of our showroom
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-success-600"
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
                  <span className="text-neutral-700">
                    Interactive product exploration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-success-600"
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
                  <span className="text-neutral-700">
                    Zoom in to see textures & details
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <Link href={"/virtual-walk-in"}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    label="Start Virtual Walk"
                    bgColor="bg-primary-05"
                    textColor="text-white"
                    icon={ICONS.rightArrow}
                    onClick={() => {
                      console.log("Virtual walk started!");
                    }}
                  />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default VirtualWalk;
