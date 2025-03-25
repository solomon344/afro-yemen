'use client'
import { HeartHandshake, Share2Icon,Heart } from "lucide-react"

const CoreValues = () => {
  return (
    <div className='flex justify-center core bg-black text-gray-300 p-10'>
        <div className='flex flex-col gap-4 lg:w-3/4'>
        <h1 className="lg:text-4xl text-2xl font-bold uppercase ">What defines us</h1>

        <div className='grid grid-cols-3 gap-3 lg:p-6 pl-0'>
            
        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <HeartHandshake size={'2rem'}  className=" text-black" />
          </div>
         <div className="flex flex-col gap-1">
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">Honesty</p>
         <p className="line-clamp-2 text-sm text-gray-400">
          The well being of our beneficiaries is our priority, we invest every single penny we get from donations.
         </p>
         </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <Share2Icon size={'2rem'}  className="text-black" />
          </div>
         <div className="flex flex-col gap-1">
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">Sharing</p>
         <p className="line-clamp-2 text-sm text-gray-400">
          We believe in giving back to the community. We have no exception to who benefits from us.
         </p>
         </div>
        </div>


        <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          <Heart size={'2rem'}  className="text-black" />
          </div>
         <div className="flex flex-col gap-1">
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">Caring</p>
         <p className="line-clamp-2 text-sm text-gray-400">
          We strive to make every life count. We are there for each and every one of you.
         </p>
         </div>
        </div>

        </div>

        </div>
    </div>
  )
}

export default CoreValues