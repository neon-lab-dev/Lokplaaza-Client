"use client";
import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Reusable/Button/Button'
import Container from '@/components/Reusable/Container/Container'
import Heading from '@/components/Reusable/Heading/Heading'
import Image from 'next/image'
import React from 'react'

const GotInspiration = () => {
  return (
     <div className="xl:relative py-14 xl:py-0 font-Satoshi bg-primary-15 xl:h-screen flex items-center">
      <div className='hidden xl:block xl:absolute h-full w-full top-0 left-0 bottom-0'>
        <Image src={IMAGES.GotInspiration} alt={"shop by room"} className="w-full max-w-[55%] h-full  object-cover xl:rounded-r-3xl" />
      </div>
      <Container>
        <div className=" flex flex-col xl:flex-row-reverse items-center justify-center gap-11 xl:gap-5 md:gap-[162px]">
          <div className=" w-full xl:w-[40%]">
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
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.imageIcon}
              onClick={() => {console.log("Clicked!")}}
            /></div>
            
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[60%] ">
            <Image src={IMAGES.GotInspiration} alt={"shop by room"} className="w-full h-[380px] md:h-[476px] xl:hidden xl:h-[804px] xl:w-[814px] object-cover rounded-3xl md:rounded-t-3xl xl:rounded-r-3xl" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GotInspiration