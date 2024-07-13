"use client";

import { HeaderMenu } from "@/assets/icon/HeaderMenu";
import { HeaderClose } from "@/assets/icon/HeaderClose";

import React, { useState } from "react";
import { SideBar } from "./SideBar";
import { SideBarMenu } from "@/assets/icon/SideBarMenu";
import { SideBarBonus } from "@/assets/icon/SideBarBonus";
import { SideBarOrder } from "@/assets/icon/SideBarOrder";

export const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <header className="w-full  shadow-md z-20 fixed md:absolute bg-white ">
      <div className=" flex max-md:justify-between md:justify-between ">
        <div className="flex z-0 w-fit h-fit py-[15px] px-[20px] md:mx-24">
          <img src="/Footerlogo.jpg" className="w-[62px] h-[62px]" />
          <div className="mt-4">
            <h1 className="text-base font-bold h-fit">coffee namu</h1>
            <h1 className="relative bottom-2">mongolia</h1>
          </div>
        </div>
        <div
          className={` bg-gray-100 z-10 h-full w-screen fixed md:absolute md:z-0 md:h-fit px-[15px] duration-150 ${
            open ? "invisible" : "visible"
          }
          }  duration-300`}
        >
          <SideBar className="z-10" />
        </div>
        <div
          className={`bg-transparent text-black text-3xl  z-10 w-fit h-full relative right-10 top-8 md:hidden duration-150  ${
            !open && "duration-150"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HeaderMenu /> : <HeaderClose />}
        </div>
        <div className="visible max-md:hidden flex mt-8 gap-4 md:mx-24 align-baseline">
          <p className="flex font-semibold">
            <SideBarMenu /> Меню
          </p>
          <p className="flex font-semibold ">
            <SideBarBonus /> Бонус
          </p>
          <p className="flex font-semibold">
            <SideBarOrder /> Захиалга
          </p>
          <div className="flex gap-8 mx-4">
            <button className="border rounded-xl border-[#AA714A]  h-10 ">
              <p className="px-3 text-[#AA714A]">Нэвтрэх</p>
            </button>
            <button className=" rounded-xl bg-[#AA714A] w- h-10">
              <p className="px-3 text-white">Бүртгүүлэх</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
