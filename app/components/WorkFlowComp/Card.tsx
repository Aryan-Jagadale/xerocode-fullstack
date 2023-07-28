"use client";

import clsx from "clsx";
import { Urbanist } from "next/font/google";
import Image from "next/image";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

interface CardProps {
  lastFeature?: boolean;
  src: string;
}

const Card = ({ lastFeature, src }: CardProps) => {
  return (
    <div className={clsx(`relative w-full md:w-[45%] h-full`,lastFeature && "md:w-[70%] mx-auto")}>
      <Image src={src} alt="Features" fill />
    </div>
  );
};

export default Card;
