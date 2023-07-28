"use client";
import { Space_Grotesk } from 'next/font/google'


import clsx from "clsx";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-spaceGrotesk',
  })



interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  label: string;
  
}



const Button = ({ type, onClick, disabled, label }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
       ${spaceGrotesk.className}
        flex
        justify-center
        
        rounded-full
        border-2
        md:px-4
        px-4
        tracking-tight
        py-1
        md:py-2
        font-normal
        md:text-sm
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
    `,
        disabled && "opacity-50 cursor-progress",
        
      )}
    >
      {label}
    </button>
  );
};

export default Button;
