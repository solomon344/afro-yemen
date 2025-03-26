"use client";

import { downloadNewsletters } from "../utils";
import { useState, useRef, useEffect } from "react";
import { Input, Button } from "antd";
import "dotenv/config"

const Afroyemenco =() => {
  const [password, setPassword] = useState("");

  const d1 = useRef()
  const d2 = useRef()

  useEffect(()=>{
    downloadNewsletters("newsletter.txt").then(url=>{
        d1.current.href = url
      })
    
      downloadNewsletters("newsletter.csv").then(url=>{
        d2.current.href = url
      })
  })

  return (
    <>
      {password === process.env.NEXT_PUBLIC_DOWNLOAD_PASSWORD ? (
        <div className="flex flex-col gap-3 items-center justify-center h-[100dvh]">
          <a
            className="p-4 bg-amber-300"
            download={"newsletter.txt"}
            ref={d1}
        
            onClick={downloadNewsletters}
          >
            Download Newsletters (txt)
          </a>
          <a
            className="p-4 bg-amber-300"
            download={"newsletter.csv"}
            ref={d2}
            onClick={downloadNewsletters}
          >
            Download Newsletters (csv)
          </a>
        </div>
      ) : (
        <Login setPassword={setPassword} />
      )}
    </>
  );
};

export default Afroyemenco;

const Login = ({setPassword}) => {
    const [p,setP] = useState("")
  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <div className="flex flex-col gap-2">
      <h1>Login</h1>
      <Input onChange={(e) => setP(e.target.value)} type="password" placeholder="password" />
      <Button
        className="p-4 bg-blue-500"
        onClick={() => setPassword(p)}
      >Download</Button>
    </div>
    </div>
  );
};
