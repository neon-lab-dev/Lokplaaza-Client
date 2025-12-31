import React from 'react'
import SecondaryHeading from '../SecondaryHeading/SecondaryHeading'
import Container from '../Container/Container'

const Counter = () => {
    const counterData=[
        {count:"100+",
            title:"Happy Homes"
        },
        {count:"500+",
            title:"Designer"
        },
        {count:"10 Years",
            title:"Warranty"
        },
    ]
  return (
    <div className='bg-neutral-10 flex flex-col items-center justify-center font-Satoshi py-20 '>
        <Container>
            <SecondaryHeading title="Why Lokplaaza Modular?"/>
            <div className='w-full flex items-center justify-around bg-neutral-25 py-10 rounded-2xl shadow-md mt-12 space-y-1'>
                {counterData.map((item , key)=>(
                    <div key={key}>
                        <p className='text-lg md:text-2xl 2xl:text-6xl font-semibold text-success-30'>{item.count}</p>
                        <h5 className='text-neutral-20 md:text-xl leading-6'>{item.title}</h5>
                    </div>
                ))}
            </div>
        </Container>
        
    </div>
  )
}

export default Counter