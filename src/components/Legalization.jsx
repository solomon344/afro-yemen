'use client'
import { Image } from "antd"

const Legalization = () => {
  return (
    <div className='flex flex-col gap-7 bg-gray-200 p-4'>
        <h1 className="text-4xl font-bold place-self-center uppercase underline underline-offset-8 decoration-amber-300">
        Legalization
        </h1>

        <div className='flex items-center gap-4 '>
            <div className="w-2/4 flex justify-center">
                <div>
                <h2 className="text-2xl lg:text-4xl font-bold">Legalization</h2>
                <p>
                    We are a registered legal entity based in The Gambia
                </p>
                </div>
            </div>

            <div>
                <img className="w-[500px] " src="/img/certificate.jpg" alt="Logo" />
            </div>
        </div>
    </div>
  )
}

export default Legalization