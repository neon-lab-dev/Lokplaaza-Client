import { IMAGES } from '@/assets'
import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='bg-gradient-card relative'>
        <div className='absolute w-full flex right-0 left-0 -top-7 items-center justify-center'>
            <Image src={IMAGES.GotInspiration} alt="product" className='h-[124px] w-[71px]'/>
        </div>
        <div className='absolute'></div>

    </div>
  )
}

export default ProductCard