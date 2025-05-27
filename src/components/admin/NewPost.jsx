'use client';
import { Editor } from "primereact/editor";
import {Card, CardBody, CardHeader, CardFooter, Input, Textarea, dropdown, Form, Button} from "@heroui/react";
import React from "react";


const NewPost = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
        <div className="flex items-center gap-10">
            <Input placeholder="Title" />
            <Button color="primary">Publish</Button>
        </div>

        <div className="grow grid grid-cols-2 p-3">
        <div className=" p-10">

        <div className="w-full h-full bg-slate-300">

        </div>

        </div>

        </div>
        
        <div>
            <Textarea placeholder="Type here" minRows={10} />
        </div>
    </div>
  )
}

export default NewPost