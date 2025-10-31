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
  textColor
}) => {
  return (
    <div className={`relative w-full ${height}`}>
      {/* Background Image */}
      <Image
        src={image}
        alt="cta-banner"
        fill
        className="object-cover"
        priority
      />

      {/* Optional Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <Container>
          <div
            className={`flex flex-col gap-2 ${
              textAlign === 'center'
                ? 'items-center text-center'
                : textAlign === 'right'
                ? 'items-end text-right'
                : 'items-start text-left'
            }`}
          >
            <h3 className="text-white font-medium text-xl md:text-3xl">
              {heading}
            </h3>
            {subtext && <p className="text-white text-sm md:text-lg">{subtext}</p>}
            <Button
              label={buttonLabel}
              icon={buttonIcon}
              onClick={onButtonClick}
              bgColor={bgColor}
              textColor={textColor}
            />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CallToAction
