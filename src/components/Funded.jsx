'use client'

import { poppins, courier, inconsolata } from "@/app/fonts"



const Funded = () => {
  return (
    <div id="donate" className='flex flex-col gap-10 w-full lg:items-center min-h-[100dvh] justify-center p-10'>

        <div className='lg:w-3/4 flex flex-col gap-3'>
            <h1 className='lg:text-4xl text-2xl font-bold uppercase underline underline-offset-8 decoration-amber-300'>How we get funded</h1>
            <div className={` italic text-gray-700`}>
                <p>
                The Organisation is mainly funded through donation. Therefore, if you want to donate in cash send it to the organisation account below.
                If you want to give donation in form of materials contact the following numbers
                </p>
            </div>
        </div>

        <div className='lg:w-3/4 flex flex-col gap-3'>
            <h1 className='lg:text-4xl text-2xl font-bold uppercase underline underline-offset-8 decoration-amber-300'>Contacts & Addresses</h1>
            <div className={` italic text-gray-700 flex flex-col gap-3 p-2 `}>
                <div className="flex items-center gap-2">
                    <p className="font-bold">Tel:</p>
                    <a href="tel:002207533095">00220 7533095</a>
                </div>
                <div className="flex items-center gap-2">
                    <p className="font-bold">Email:</p>
                    <a href="mailto:afroyemenco@gmail.com">afroyemenco@gmail.com</a>
                </div>

                <div className="flex flex-col  gap-2">
                    <p className="font-bold text-lg uppercase underline underline-offset-8 decoration-amber-300">Address</p>
                    <p>
                        Tallinding,
                        Kanifing Municipality KSMD, The Gambia
                    </p>
                </div>
            </div>
        </div>

        <div className='lg:w-3/4 flex flex-col gap-3'>
        <h1 className='lg:text-4xl text-2xl font-bold uppercase underline underline-offset-8 decoration-amber-300'>Account Info</h1>

        <div className={` italic text-gray-700 flex flex-col gap-3 p-2 `}>
        <div className="flex items-center gap-2">
                    <p className="font-bold">Country:</p>
                    <p className="uppercase">The Gambia.</p>
        </div>

        <div className="flex items-center gap-2">
                    <p className="font-bold">Bank Name:</p>
                    <p className="uppercase">Acces Bank ltd.</p>
        </div>
        <div className="flex items-center gap-2">
                    <p className="font-bold">Account Name:</p>
                    <p className="uppercase">Afroyemen charity organization</p>
        </div>
        <div className="flex items-center gap-2">
                    <p className="font-bold">Account No:</p>
                    <p className={`${inconsolata.className} text-xl`}>0070-1100-00091</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Funded