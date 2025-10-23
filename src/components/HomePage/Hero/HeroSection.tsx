import { IMAGES } from '@/assets'
import Navbar from '@/components/Shared/Navbar/Navbar'
import OfferAnnouncement from '@/components/Shared/OfferAnnouncement/OfferAnnouncement'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <OfferAnnouncement/>
      <div className='relative'>
        <Image src= {IMAGES.heroSofa} alt={"hero section"} className="absolute top-0 right-0 h-fit z-[-1]"/>
        <Navbar/>
      </div>
      </div>
  )
}

export default HeroSection