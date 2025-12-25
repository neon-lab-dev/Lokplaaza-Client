/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

const ShopByRoom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const categories = [
    {
      room: "Kitchen",
      imageUrl: IMAGES.kitchen,
      link: "/modular-kitchen",
      description: "Modern modular kitchens",
    },
    {
      room: "Bedroom",
      imageUrl: IMAGES.bedroom,
      link: "modular-kitchen",
      description: "Serene spaces for rest and relaxation",
    },
    {
      room: "Living room",
      imageUrl: IMAGES.livingRoom,
      link: "/custom-furniture",
      description: "Entertainment and gathering spaces",
    },
    {
      room: "Dining room",
      imageUrl: IMAGES.diningRoom,
      link: "modular-kitchen",
      description: "Elegant dining experiences",
    },
  ];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="relative pt-19 xl:py-54 font-Satoshi bg-linear-to-b from-neutral-10 via-white to-neutral-10/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-success-05/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-neutral-15/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-neutral-35/10 rounded-full blur-2xl"></div>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col xl:flex-row items-center justify-between gap-11 xl:gap-12 md:gap-40.5 relative z-10"
        >
          <div className="w-full xl:w-[60%]">
            <div className="relative">
              <Heading
                heading="Luxury Collection"
                title="Designs that Define Style"
                alignClass="text-left"
              />
            </div>

            <p className="text-neutral-20 text-lg md:text-xl lg:text-2xl mt-8 mb-10 md:mt-6 md:mb-12 leading-relaxed max-w-3xl">
              Whether you're styling a cozy bedroom, a productive office, or a
              welcoming living room — we've made it easy. Browse furniture and
              décor tailored for every room in your home or workspace.
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button label="Explore By Room" icon={ICONS.rightArrow} onClick={() => setIsModalOpen(true)} />
            </motion.div>

            {/* Quick preview grid */}
            <div className="mt-16 hidden md:grid grid-cols-4 gap-3 max-w-2xl">
              {categories.slice(0, 4).map((room, index) => (
                <motion.div
                  key={room.room}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative cursor-pointer group"
                  onClick={() => {
                    setSelected(room);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <Image
                      src={room.imageUrl}
                      alt={room.room}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-center mt-2 text-neutral-20 font-medium text-sm transition-colors">
                    {room.room}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full xl:w-[40%]"
          >
            <div className="relative group">
              {/* Decorative frames */}
              <div className="absolute -inset-4 bg-linear-to-r from-success-05/30 to-neutral-35/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={IMAGES.ShopByRoom}
                  alt={"shop by room"}
                  className="w-full h-auto max-h-95 xl:max-h-125 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Floating label */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-success-05 font-semibold text-sm">
                    Popular Today
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            width="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[40%]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Modal Content */}
              <div className="relative">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm border-b border-neutral-15 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl lg:text-3xl font-bold text-neutral-05">
                        Explore Rooms
                      </h2>
                      <p className="text-neutral-20 mt-1">
                        Select a room to view collection
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 rounded-full hover:bg-neutral-10 transition-colors cursor-pointer"
                    >
                      <BiX className="text-3xl text-neutral-20" />
                    </motion.button>
                  </div>
                </div>

                {/* Rooms Grid */}
                <div className="mt-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((room, index) => (
                      <Link key={room.room} href={room.link}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ y: -8 }}
                          onClick={() => {
                            setSelected(room);
                            // Navigate or show details
                          }}
                          className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                            selected?.link === room.link
                              ? "ring-2 ring-success-10 ring-offset-2"
                              : ""
                          }`}
                        >
                          <div className="relative aspect-4/5 overflow-hidden">
                            <Image
                              src={room.imageUrl}
                              alt={room.room}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />

                            {/* Room info */}
                            <div className="absolute bottom-3 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h3 className="text-2xl font-bold mb-1">
                                    {room.room}
                                  </h3>
                                  <p className="text-sm opacity-90">
                                    {room.description}
                                  </p>
                                </div>
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="w-10 h-10 rounded-full bg-white text-success-05 flex items-center justify-center cursor-pointer"
                                >
                                  <RxArrowTopRight />
                                </motion.div>
                              </div>
                            </div>

                            {/* Top badge */}
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-primary-05 font-semibold text-sm">
                                Popular
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopByRoom;
