'use client'
import { HeartHandshake, Share2Icon,Heart } from "lucide-react"


const CoreValues = () => {
  const core_values = [
    {
      name:"Honesty",
      icon:<HeartHandshake size={'2rem'}  className=" text-black" />,
      description:"The well being of our beneficiaries is our priority, we invest every single penny we get from donations."
    },
    {
      name:"Sharing",
      icon:<Share2Icon size={'2rem'}  className="text-black" />,
      description:"We believe in giving back to the community. We have no exception to who benefits from us."
    },
    {
      name:"Caring",
      icon:<Heart size={'2rem'}  className="text-black" />,
      description:"We strive to make every life count. We are there for each and every one of you."
    }
  ]
  return (
    <div className='flex justify-center core bg-black text-gray-300 p-10'>
        <div className='flex flex-col gap-4 lg:w-3/4'>
        <h1 className="lg:text-4xl text-2xl font-bold uppercase ">What defines us</h1>

        <div className='grid grid-cols-3 gap-3 lg:p-6 pl-0'>
            
        {
          core_values.map((item,index) => (
          <div className="flex items-center justify-center gap-3">
          <div className="bg-gray-100 rounded-full p-2">
          {item.icon}
          </div>
         <div className="flex flex-col gap-1">
         <p className="font-bold uppercase underline underline-offset-4 decoration-yellow-300 decoration-2">{item.name}</p>
         <p title={item.description} className="line-clamp-2 text-sm text-gray-400">
          {item.description}
         </p>
         </div>
        </div>
          ))
        }

        
        </div>

        </div>
    </div>
  )
}

export default CoreValues