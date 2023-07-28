"use client";

import clsx from "clsx";
import HeadingText from "./HeadingText/HeadingText";
import { openSans } from "../layout";
import WaitListForm from "./Form/WaitListForm";

const Footer = () => {
  return (
    <div>
      <section className="text-center">
        <HeadingText
          text="Automate all aspects of your delivery process with
AI support."
          styleType="footer"
        />

        <p className={clsx(`${openSans.className} my-2 md:my-4 font-normal text-xl`)}>
          Get Early Access
        </p>

        <WaitListForm />

        <footer
          className={clsx(`${openSans.className} mt-8 md:mt-16 mb-3 md:mb-6 tracking-tighter font-normal text-md`)}
        >
          Copyright © 2023 <b>EXOCODE TECHNOLOGIES</b> | All rights reserved
        </footer>
      </section>
    </div>
  );
};

export default Footer;
