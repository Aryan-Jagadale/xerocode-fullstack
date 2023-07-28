"use client";

import Image from "next/image";
import HeadingText from "./HeadingText/HeadingText";
import Card from "./WorkFlowComp/Card";

const WorkFlow = () => {
  return (
    <div className="pt-7 pb-0 md:py-14 px-2 md:px-7">
      <div className="text-center">
        <HeadingText
          text="Use AI to handle workflows in your chat platforms."
          styleType="boost"
        />
      </div>

      <div className="flex items-center flex-col md:flex-row my-9 justify-center gap-5 h-screen md:h-[50vh]">
        <Card src={"/images/circle.webp"} />
        <Card src={"/images/execute.webp"} />
      </div>

      <div className="flex items-center my-2 md:my-9 justify-center h-[50vh]">
        <Card src={"/images/circle2.webp"} lastFeature={true} />
      </div>
    </div>
  );
};

export default WorkFlow;
