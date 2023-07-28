"use client"

import clsx from "clsx"
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const CommingSoonButton = () => {
  return (
    <button
      
      className={clsx(
        `
       ${urbanist.className}
        flex
        justify-center
        bg-[#4F4CE5;]
        rounded-full
        shadow
        px-4
        tracking-wide
        text-white
        py-2
        font-normal
        text-sm
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        uppercase
    `
        //disabled && "opacity-50 cursor-default",
      )}
    >
      Comming soon
    </button>
  )
}

export default CommingSoonButton