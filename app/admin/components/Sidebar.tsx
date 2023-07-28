"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdSpaceDashboard } from "react-icons/md";
import Image from "next/image";
import { openSans } from "@/app/layout";




const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { title: "Dashboard", src: <MdSpaceDashboard />, link: "/admin" },
  ];
  const active = "text-white bg-gray-900";
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } p-5  pt-8 relative border-r-2 border-gray-500 ${openSans.className} duration-300 `}
    >
      <Image
        src={"/images/control.png"}
        className={` border-dark-black absolute cursor-pointer -right-3 top-9 w-7 
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
        alt={"control"}
        width={50}
        height={50}
      />

      <div className="flex gap-x-4 items-center">
        <Image
          src={"/images/logo.webp"}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
          alt={"logo"}
          width={50}
          height={50}
        />
        <Link href={"/"}>
          <h1
            className={` origin-left text-gradient  tracking-wide  text-xl font-extrabold duration-200 ${
              !open && "scale-0"
            }`}
          >
            Sellerkin
          </h1>
        </Link>
      </div>

      <ul className="pt-6">
        {menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 font-medium cursor-pointer hover:bg-gray-900 text-slate-500 hover:text-white   text-base items-center gap-x-4 
              ${
                Menu.link === "/admin" && `bg-light-white ${active}`
              } `}
          >
            <Link href={Menu.link}>
              <p className="">{Menu.src}</p>
            </Link>
            <Link href={Menu.link}>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
