"use client";

import Image from "next/image";
import Button from "../Button/Button";

const Navbar = () => {
  const handleClick = () => {
    alert("Clicked..!!");
  };
  return (
    <>
    <div className="flex items-center justify-between px-7 py-3 ">
      <section className="w-[75px] h-[75px]">
        <Image
          src={"/images/logo.webp"}
          alt="xerocode"
          width={100}
          height={100}
        />
      </section>
      <section>
        <Button
          label={"XEROCODEE"}
          onClick={handleClick}
          type="button"
          disabled={false}
        />
      </section>
    </div>
    <hr/>
    </>

  );
};

export default Navbar;
