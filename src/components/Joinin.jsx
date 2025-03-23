import React from 'react'

const Joinin = () => {
  return (
    <div className='flex flex-col gap-10 w-full items-center bg-amber-300 min-h-[50dvh] justify-center p-10'>
        <div className='lg:w-3/4 flex flex-col lg:flex-row items-center gap-3 shrink-0'>
           <div className='lg:w-3/4'>
           <h1 className='text-4xl font-bold uppercase underline underline-offset-8 decoration-amber-300'>Join Us</h1>
            <div className={` italic text-gray-700 p-4 pl-0`}>
                <p>
                The Organisation is open to everyone who wants to support humanity
                </p>
            </div>
           </div>

           <div className='grow'>
            <img src="/img/p5.jpg" alt="" />
           </div>
        </div>
    </div>
  )
}

export default Joinin