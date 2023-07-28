"use client";

import Image from "next/image";
import Button from "../Button/Button";
import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  
  const handleClick = () => {
    alert("Clicked..!!");
  };
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div>
        <header className="flex items-center justify-between px-7 py-3 ">
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
        </header>

        <hr />
      </div>
    </>
  );
};

export default Navbar;
