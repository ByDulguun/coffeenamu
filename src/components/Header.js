"use client";

import { HeaderMenu } from "@/assets/icon/HeaderMenu";
import { HeaderClose } from "@/assets/icon/HeaderClose";

import React, { useState } from "react";
import { SideBar } from "./SideBar";

export const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <header className="w-full  shadow-md z-20 fixed bg-white">
      <div className=" flex justify-between  ">
        <div className="flex z-0 w-fit h-fit py-[15px] px-[20px]">
          <img src="/Headerlogo.jpg" className="w-[62px] h-[62px]" />
          <div className="mt-4">
            <h1 className="text-base font-bold h-fit">coffee namu</h1>
            <h1 className="relative bottom-2">mongolia</h1>
          </div>
        </div>
        <div
          className={` bg-gray-100 z-10 h-full w-full fixed px-[15px] duration-150 ${
            open ? "invisible" : "visible"
          }
          }  duration-300`}
        >
          <SideBar className="z-10" />
        </div>
        <div
          className={`bg-transparent text-black text-3xl  z-10 w-fit h-full relative right-10 top-8  duration-150  ${
            !open && "duration-150"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HeaderMenu /> : <HeaderClose />}
        </div>

        {/* <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
      </div>
    </header>
  );
};
