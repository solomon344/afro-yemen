import React from 'react'
import { Image } from 'antd'

const Portfolio = () => {
  return (
    <div className='flex flex-col p-4 gap-5'>
        <h1 className="text-4xl font-bold place-self-center uppercase underline underline-offset-8 decoration-amber-300">
          Portfolio
        </h1>

        <div className='flex float-start '>
            <div className='w-[400px] h-fit'>
                <Image src='/img/p3.jpg'/>
            </div>
            <div className='w-[400px] h-fit'>
                <Image src='/img/p8.jpg'/>
            </div>
            <div className='w-[400px] h-fit'>
                <Image src='/img/p10.jpeg'/>
            </div>
            <div className='w-[400px] h-fit'>
                <Image src='/img/p11.jpeg'/>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio