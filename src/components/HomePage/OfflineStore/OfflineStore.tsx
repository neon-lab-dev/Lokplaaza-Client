import { ICONS, IMAGES } from '@/assets'
import Button from '@/components/Reusable/Button/Button'
import Container from '@/components/Reusable/Container/Container'
import Heading from '@/components/Reusable/Heading/Heading'
import Image from 'next/image'
import React from 'react'

const OfflineStore = () => {
  return (
     <div className="pt-[76px] xl:py-[186px] font-Satoshi bg-neutral-10 xl:relative ">
      <Container>
        <div className="bg-transparent flex flex-col xl:flex-row items-center justify-between gap-11 xl:gap-5 md:gap-[162px]">
          <div className=" w-full xl:w-[60%]">
            <Heading
              heading="LOKPLAAZA STUDIO - OFFLINE SHOP"
              title="Visit Lokplaaza Studio"
              alignClass="text-left"
            />
            <p className="text-neutral-20 text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Want to touch, feel, and see the details in person? Step into Lokplaza Studio, our offline experience center. With accurate location details for your city, you can explore our curated collections and get personalized recommendations from our design experts.
            </p>
            <Button
              label="Find Directions"
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.rightArrow}
              onClick={() => {console.log("Clicked!")}}
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[40%] ">
            <Image src={IMAGES.storeLocation} alt={"shop by room"} className="w-full h-[448px] xl:hidden object-cover rounded-t-3xl xl:rounded-3xl" />
          </div>
        </div>
      </Container>
      <div className= 'hidden items-center w-full justify-end xl:absolute top-0 right-0 z-10 xl:flex h-full'> <Image
  src={IMAGES.storeLocation}
  alt="shop by room"
  className=" w-[40%] h-[448px] object-cover  xl:rounded-l-3xl "
/></div>
  

    </div>
  )
}

export default OfflineStore