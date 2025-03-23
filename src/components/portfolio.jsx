import React from 'react'
import { Image } from 'antd'

const Portfolio = () => {
  return (
    <div className='flex flex-col p-4 gap-5'>
        <h1 className="text-4xl font-bold place-self-center uppercase underline underline-offset-8 decoration-amber-300">
          Portfolio
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
            <div>
                <Image src='/img/p3.jpg'/>
            </div>
            <div>
                <Image src='/img/p8.jpg'/>
            </div>
        </div>
        
    </div>
  )
}

export default Portfolio