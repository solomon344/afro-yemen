"use client";

import { MailCheck, Copyright } from "lucide-react";
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import Link from "next/link";
import { CreateNewsLetter,CreateMessage, } from "@/app/utils";
import { Button, ConfigProvider } from "antd";
import { useState } from "react";



const Footer = () => {
 
  return (
 
      <div className=" bg-[#404142] flex flex-col gap-3">
      <div className="lg:w-3/4 place-self-center flex flex-col gap-10">
        <NewsLetter/>

        <div className="flex flex-col gap-1">
          <h1 className="text-gray-200">Unsubscribe to our newsletter</h1>
          <form action="/newsletter/unsub" className="flex items-center gap-3">
          <input
                  id="email"
                  required
                  type="text"
                  className="w-full border text-gray-200 outline-0 border-gray-300 p-2"
                  placeholder="Email ..."
                  name="email"
                />
          <button type="submit" className="bg-amber-300 p-2 text-sm font-bold">unsubscribe</button>
          </form>
        </div>

        <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold underline underline-offset-4 decoration-amber-300 text-gray-300 uppercase">
              about afro-yemen co
            </h1>

            <p className="text-sm text-gray-300">
            The organisation came into existence when Dr. Ali and Sulayman met
            in an aeroplane that was heading to Turkey. The two were seated next
            to each other and as usual engage in a fruitful, beautiful
            conversation which gave birth to Agro-Yemen. The Afro stands for
            Africa while Yemen stands for a Middle East country called Yemen.
            Sulayman is from Africa while Ali Al Zakami Abdoullah is from Yemen.
            After the conversation we exchange numbers and continued exchanging
            ideas on how to contribute to advancement of society by focusing on
            two important areas that every human being need, health
            care and education.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <h1 className="font-bold underline underline-offset-4 decoration-amber-300 text-gray-300 uppercase">
              our helpers
            </h1>

            <p className="text-sm text-gray-400 italic">
              There are no helpers / donors / sponsors for now
            </p>
          </div>


          <Message/>
        </div>


      </div>

      <div className="p-5 border-t border-gray-500 flex items-end justify-between">
        <div className="flex items-center text-gray-400 text-sm gap-1">
          <p>Copyright</p>
          <Copyright size={'13px'} />
          <p>{new Date().getFullYear()}</p>
          <p className="font-bold">Afro-Yemen CO</p>
        </div>

        

        <div className="flex items-center  text-gray-400 gap-3">
          <p className="font-bold">
            Follow Us On
          </p>
          <Link target="_blank" href={"https://www.facebook.com/profile.php?id=61573600942590"}>
          <FaFacebook size={'1.4rem'}/>
          </Link>
          <FaInstagram size={'1.4rem'}/>
          <FaLinkedinIn size={'1.4rem'}/>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;

const NewsLetter = ()=>{
  const [loading,setLoading] = useState(false)
  const handleCreateNewsLetter = (e)=>{
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData)
    CreateNewsLetter(data).then(response=>{
      alert(response)
      setLoading(false)
      e.target.reset()
    }).catch(err=>{
      alert(err.message)
      setLoading(false)
    })
  }

  return (
    <ConfigProvider
  theme={{
    components:{
      Button:{
        colorText:"white",
        colorBgContainer:"black"
      }
    }
  }}
  >
     <div className="p-5 bg-yellow-300 grid grid-cols-1 lg:grid-cols-3 items-center gap-4 ">
          <div className="flex items-center gap-3">
            <div className="p-4 bg-gray-100 rounded-full w-fit">
              <MailCheck size={"2rem"} />
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold uppercase">
                <span className="underline underline-offset-4 decoration-white">
                  newsletter
                </span>{" "}
                sign-up
              </h1>
              <div>
                <p className="text-sm italic line-clamp-2 text-gray-500">
                Subscribe to our newsletter to stay up to date with our latest projects and development.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleCreateNewsLetter} className="flex items-end gap-4 col-span-2 justify-between">
            <div  className="flex flex-col gap-1 grow">
              <label htmlFor="email">Email</label>
              <input
              required
                id="email"
                type="email"
                className="bg-white w-full outline-0 p-1"
                placeholder="Email..."
                name="email"
              />
            </div>

            <div className="flex flex-col gap-1 grow ">
              <label htmlFor="name">Name</label>
              <div className="flex items-center gap-2">
                <input
                required
                  id="name"
            
                  className="bg-white w-full outline-0 p-1"
                  placeholder="Name..."
                  name="name"
                />
              </div>
            </div>

            <div>
              <Button loading={loading} htmlType="submit" color="black" className="bg-black">
                submit
              </Button>
            </div>
          </form>
        </div>
  </ConfigProvider>
   
  )
}

const Message = ()=>{
  const [loading,setLoading] = useState(false)
  const handleCreateMessage = (e)=>{
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData)
    CreateMessage(data).then(response=>{
      alert(response)
      setLoading(false)
      e.target.reset()
    }).catch(err=>{
      alert("something went wrong")
      setLoading(false)
    })
  }


  return (
    <ConfigProvider
    theme={{
      components:{
        Button:{
          colorText:"black",
          colorBgContainer:"yellow",
         defaultHoverBorderColor:"black",
         borderRadius:0
        }
      }
    }}
    >
      <div className="flex flex-col gap-3 ">
            <h1 className="font-bold underline underline-offset-4 decoration-amber-300 text-gray-300 uppercase">
              leave us a message
            </h1>

            <form  onSubmit={handleCreateMessage} className="flex flex-col gap-4 text-gray-200">
              <div>
                <input
                  id="name"
                  required
                  type="text"
                  className="w-full border border-gray-300 p-2"
                  placeholder="Name..."
                  name="name"
                />
              </div>

              <div>
                <input
                  id="email"
                  required
                  type="text"
                  className="w-full border border-gray-300 p-2"
                  placeholder="Email..."
                  name="email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <textarea
                  id="message"
                  minLength={10}
                  name="content"
                  className="w-full min-h-[100px] border border-gray-300 p-3"
                  rows={'3'}
                  placeholder="Message..."
                ></textarea>
              </div>

              <div>
                <Button loading={loading} size="large" htmlType="submit">Submit</Button>
              </div>
            </form>
          </div>
    </ConfigProvider>
  )
}