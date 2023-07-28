"use client";

import { openSans } from "@/app/layout";
import clsx from "clsx";

interface HeadingTextProps {
  text: string;
  styleType?: string;
}

const HeadingText = ({ text, styleType }: HeadingTextProps) => {
  return (
    <div>
      <h1
        style={{
          lineHeight: "normal",
        }}
        className={clsx(
          `
            ${openSans.className}
            tracking
            font-semibold
            
            text-4xl
            md:text-5xl
            text-gradient
            p-3
            md:py-0
            md:px-5
            `,
          styleType === "boost" && "boost-text-gradient text-3xl",
          styleType === "footer" && " text-gradient px-4 text-3xl "
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default HeadingText;
