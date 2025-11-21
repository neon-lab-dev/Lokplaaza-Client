"use client";
import { ICONS, IMAGES } from '@/assets'
import BreadCrumps from '@/components/Reusable/BreadCrumps/BreadCrumps';
import Button from '@/components/Reusable/Button/Button'
import Container from '@/components/Reusable/Container/Container'
import Heading from '@/components/Reusable/Heading/Heading'
import Modal from '@/components/Reusable/Modal/Modal';
import Image from 'next/image'
import React, { useState } from 'react'
import { BiX } from 'react-icons/bi';

const GotInspiration = () => {
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
     <div className="xl:relative py-14 xl:py-0 font-Satoshi bg-primary-15 xl:h-screen flex items-center">
      <div className='hidden xl:block xl:absolute h-full w-full top-0 left-0 bottom-0'>
        <Image src={IMAGES.GotInspiration} alt={"shop by room"} className="w-full max-w-[55%] h-full  object-cover xl:rounded-r-3xl" />
      </div>
      <Container>
        <div className="flex flex-col xl:flex-row-reverse items-center justify-center gap-11 xl:gap-5 md:gap-[162px] ">
          <div className="relative z-[9999] w-full xl:w-[40%]">
            <Heading
              heading="GOT INSPIRATION? WE ARE HERE!"
              title="Got a Picture? We’ll Build It"
              alignClass="text-center xl:text-right"
              headingColor='text-secondary-10'
              titleColor='text-white'

            />
            <p className="text-neutral-10 text-center xl:text-right text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Already have a design or style in mind? Upload your inspiration photo and let our team curate pieces just for you.
            </p>
            <div className='flex justify-center xl:justify-end'><Button
              label="Upload Now"
              bgColor="bg-success-05 z-[999]"
              textColor="text-success-10"
              icon={ICONS.imageIcon}
              onClick={() => {
                setIsModalOpen(true)
              }}
            /></div>
            
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[60%] ">
            <Image src={IMAGES.GotInspiration} alt={"shop by room"} className="w-full h-[380px] md:h-[476px] xl:hidden xl:h-[804px] xl:w-[814px] object-cover rounded-3xl md:rounded-t-3xl xl:rounded-r-3xl" />
          </div>
        </div>
      </Container>
      <Modal isModalOpen={isModalOpen}>
        <div className="px-6 pt-6 w-[80vw]">
          <div className="w-full flex justify-between items-center">  <BreadCrumps path={["Home", "Products", "Inspiration"]} />
           <BiX className="text-neutral-20 text-2xl" onClick={()=>{setIsModalOpen(false)}} />
          </div>
         <div className="w-full h-[60vh] flex flex-col items-center justify-center">
                     <Image src={IMAGES.inspiration} alt={"shop now"} className={"size-40"} />
                     <p className="text-3xl font-medium text-neutral-20 mt-6 m-3">
                       Generate Inspiration
                     </p>
                     <p className="text-lg text-neutral-40 leading-[120%] text-center max-w-[300px] mx-auto">
                      Upload or Click a photo of your inspiration and get a quote.
                     </p>
                   </div>

          <Button
            label="Upload/Click Image"
            className="w-full"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      </Modal>
    </div>
  )
}

export default GotInspiration