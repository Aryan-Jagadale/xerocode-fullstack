"use client";

import clsx from "clsx";
import HeadingText from "./HeadingText/HeadingText";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const BoostSection = () => {
  return (
    <div
      className={clsx(`
    text-center
    my-5
    mb-8
    `)}
    >
      <HeadingText
        text="Boost the speed of your development and test cycles."
        styleType={"boost"}
      />
      <p
        className={clsx(
          `
            ${urbanist.className}
            font-semibold
            tracking-wide
            px-2
            `
        )}
      >
        With AI-driven test case generation and code analysis, problems may be
        found and fixed
        <br /> more quickly.
      </p>
    </div>
  );
};

export default BoostSection;
