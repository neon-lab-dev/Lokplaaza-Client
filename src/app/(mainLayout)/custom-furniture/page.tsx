import CustomFurnitureHero from '@/components/CustomFurniture/CustomFurnitureHero/CustomFurnitureHero'
import ModularKitchen from '@/components/HomePage/ModularKitchen/ModularKitchen'
import Testimonials from '@/components/HomePage/Testimonials/Testimonials'
import Counter from '@/components/Reusable/Counter/Counter'
import FAQ from '@/components/Reusable/FAQ/FAQ'
import React from 'react'

const CustomFurniture = () => {
  return (
    <div>
        <CustomFurnitureHero/>
        <Counter/>
        <ModularKitchen/>
        <Testimonials/>
        <FAQ/>
    </div>
  )
}

export default CustomFurniture