import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { ICONS } from '@/assets'
import Button from '@/components/Reusable/Button/Button'
import Container from '@/components/Reusable/Container/Container'

interface CallToActionProps {
  image: StaticImageData | string
  heading: string
  subtext?: string
  buttonLabel: string
  onButtonClick?: () => void
  buttonIcon?: string
  height?: string // optional custom height class
  overlayClass?: string // optional gradient or overlay styling
  textAlign?: 'left' | 'center' | 'right'
  bgColor?:string
  textColor?:string
  iconClassName?:string
}

const CallToAction: React.FC<CallToActionProps> = ({
  image,
  heading,
  subtext,
  buttonLabel,
  onButtonClick,
  buttonIcon = ICONS.rightArrow,
  height = 'h-[185px] md:h-[300px]',
  overlayClass = 'bg-black/40', // optional translucent overlay
  textAlign = 'left',
  bgColor, 
  textColor,
  iconClassName
}) => {
  return (
    <div className={`relative w-full ${height}`}>
      {/* Background Image */}
      <Image
        src={image}
        alt="cta-banner"
        fill
        priority
      />
    </div>
  )
}

export default CallToAction
