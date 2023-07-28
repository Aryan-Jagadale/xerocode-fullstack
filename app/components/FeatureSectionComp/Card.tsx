"use client";

import Image from "next/image";
import { Urbanist } from "next/font/google";

interface CardProps {
  label: string;
}

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const Card = ({ label }: CardProps) => {
  return (
    <>
      <div className="flex gap-4  px-5 py-5 w-[90%]">
        <section>
          {label === "Build / Deploymnent" || label === "Code Analysis" ? (
            <Image
              src={"/images/bluedb.webp"}
              alt="Database vector"
              width={40}
              height={40}
            />
          ) : (
            <Image
              src={"/images/purpledb.webp"}
              alt="Database vector"
              width={40}
              height={40}
            />
          )}
        </section>
        <section>
          <p className={`${urbanist.className} tracking-wider`}>{label}</p>
        </section>
      </div>
      
    </>
  );
};

export default Card;
