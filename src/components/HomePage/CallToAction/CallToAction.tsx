import { IMAGES } from '@/assets'
import Container from '@/components/Reusable/Container/Container'
import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <div className="relative h-[185px] md:h-[300px] w-full">
        <Image
          src={IMAGES.offerBanner}
          alt="hotsellers"
          fill // make image cover parent
          className="object-cover"
          priority
        />
          <div className="absolute inset-0 flex items-center">
        <Container>
            <h3 className="text-white font-bold text-xl md:text-3xl">
                  Upto 50% off on Modular  <br /> Kitchens
            </h3>
        </Container>
          </div>
      </div>
  )
}

export default CallToAction