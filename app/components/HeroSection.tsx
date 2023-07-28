"use client";

import clsx from "clsx";
import HeadingText from "./HeadingText/HeadingText";
import { openSans } from "../layout";
import WailtListForm from "./Form/WaitListForm";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      className={clsx(
        `
            w-full
            text-center
            py-6
            md:py-12
            md:pb-0
            
            `
      )}
    >
      <HeadingText text={"Integrate AI Throughout Your Workflow"} />

      <h2 className="abeeZee-style text-4xl md:text-5xl my-4 md:my-8 tracking-wider">
        Code Doctor
      </h2>

      <p
        className={clsx(
          `
        ${openSans.className}
          tracking-tighter
          font-normal
          my-4
          md:my-8
          text-lg
        `
        )}
      >
        Make processes where AI collaborates with your team throughout <br />{" "}
        the whole development process.
      </p>

      <WailtListForm />

      <div className="flex items-center justify-center mt-4 md:my-2">
        <Image
          src={"/images/banner.webp"}
          alt="Bannner"
          width={950}
          height={900}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
