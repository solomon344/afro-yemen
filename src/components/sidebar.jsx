"use client";
import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/react";
import { siContentful } from "simple-icons";
import { File } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <Card className="w-1/5 rounded-l-none bg-slate-800 text-white ">
      <CardHeader className="font-bold text-2xl ">Afro Yemen Co</CardHeader>
      <CardBody>
        <ul className="space-y-2">
          {pages.map((page, index) => (
            <li>
              <Link
                key={index}
                href={page.href}
                className="flex transition-all hover:bg-purple-600/50 p-2 rounded-lg items-center space-x-2"
              >
                {page.icon}
                <a href={page.href}>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
};

export default Sidebar;

const pages = [
  {
    name: "Posts",
    href: "/admin/posts",
    icon: <File />,
  },
];
