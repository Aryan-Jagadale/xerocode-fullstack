"use client";
import { motion } from "framer-motion";
import { openSans } from "@/app/layout";
import clsx from "clsx";

interface HeadingTextProps {
  text: string;
  styleType?: string;
}

const HeadingText = ({ text, styleType }: HeadingTextProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
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
    </motion.div>
  );
};

export default HeadingText;
