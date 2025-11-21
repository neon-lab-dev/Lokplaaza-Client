"use client";
import { ICONS, IMAGES } from "@/assets";
import BreadCrumps from "@/components/Reusable/BreadCrumps/BreadCrumps";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Modal from "@/components/Reusable/Modal/Modal";
import Image from "next/image";
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { CgCross } from "react-icons/cg";

const ShopByRoom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Rooms = [
    { room: "Kitchen", imageUrl: IMAGES.HotSellerCTAbg },
    {
      room: "Bedroom",
      imageUrl: IMAGES.ShopByRoom,
    },
    { room: "Living room", imageUrl: IMAGES.customFurniture },
    {
      room: "Dining room",
      imageUrl: IMAGES.authImg,
    },
  ];

  return (
    <div className="pt-[76px] xl:py-[216px] font-Satoshi bg-neutral-10">
      <Container>
        <div className=" flex flex-col xl:flex-row items-center justify-between gap-11 xl:gap-5 md:gap-[162px]">
          <div className=" w-full xl:w-[60%]">
            <Heading
              heading="Luxury Collection"
              title="Designs that Define Style"
              alignClass="text-left"
            />
            <p className="text-neutral-20 text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Whether you’re styling a cozy bedroom, a productive office, or a
              welcoming living room — we’ve made it easy. Browse furniture and
              décor tailored for every room in your home or workspace.
            </p>
            <Button
              label="Explore By Room"
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.rightArrow}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[40%] ">
            <div className=" xl:hidden w-[65%] xl:w-[237px] h-[27px] bg-neutral-15 rounded-t-3xl"></div>
            <div className=" xl:hidden w-[80%] xl:w-[284px] h-[27px] bg-neutral-35 rounded-t-3xl"></div>
            <div className="hidden xl:flex xl:h-[237px] xl:w-[27px] bg-neutral-15 rounded-l-3xl"></div>
            <div className="hidden xl:flex xl:h-[284px] xl:w-[27px] bg-neutral-35 rounded-l-3xl"></div>
            <Image
              src={IMAGES.ShopByRoom}
              alt={"shop by room"}
              className="w-full h-[380px] xl:size-[380px] object-cover rounded-t-3xl xl:rounded-3xl"
            />
          </div>
        </div>
      </Container>

      <Modal isModalOpen={isModalOpen}>
        <div className="px-6 pt-6  h-[76vh] w-[80vw]">
          <div className="w-full flex justify-between items-center">  <BreadCrumps path={["Home", "Products", "Laptops"]} />
           <BiX className="text-neutral-20 text-2xl" onClick={()=>{setIsModalOpen(false)}} />
          </div>
         
          <div className="h-[52vh] grid grid-cols-1 md:grid-cols-2  gap-6 my-8 overflow-y-scroll scrollbar-none">
            {Rooms.map((room) => (
              <div key={room.room} className="relative shadow-md  ">
                <Image
                  src={room.imageUrl}
                  alt={room.room}
                  width={300}
                  height={350}
                  className="w-full h-[200px] object-cover rounded-3xl"
                />

                <div className="absolute w-full rounded-3xl h-full bg-gray-gradient bottom-0 right-0 p-4 font-semibold capitalize text-neutral-10 text-3xl flex gap-1 items-end justify-between ">
                  <div className="flex gap-1 items-center justify-between "><p>{room.room}</p>
                  <div className="p-2 rounded-full flex items-center bg-neutral-10  justify-center">
                    <Image src={ICONS.downArrow} alt={room.room} className=" rotate-270" />
                  </div></div>
                  
                  
                </div>
              </div>
            ))}
          </div>

          <Button
            label="Shop by Room"
            className="w-full"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ShopByRoom;
