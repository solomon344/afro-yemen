'use client'
import { Progress } from "antd"

const CurrentProject = () => {
  return (
    <div className="flex flex-col pt-10 pb-10">
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="lg:text-4xl text-xl font-bold uppercase  ">We are currently working on</h1>
            <p className=" text-gray-400">Providing medical items to health care facilities like Serrekunda Health Center</p>
        </div>

        <div className="lg:w-3/4 w-full p-3 flex items-center gap-3 place-self-center">
        <Progress percent={75} strokeColor={'#F2BB05'}  className="w-3/4 rounded-none" size={{height:20}}/>
        <button className="text-amber-300 bg-black shrink-0 p-2 text-sm font-bold">Donate Now</button>
        </div>

        <div className="grid grid-cols-3 lg:w-3/4 w-full p-3 place-self-center font-semibold">
            <p>D7,500 Raised</p>
            <p className="text-center">365 days left</p>
            <p className="text-center">Goal D75,500</p>

        </div>

    </div>
  )
}

export default CurrentProject