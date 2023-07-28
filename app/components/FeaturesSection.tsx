"use client";

import clsx from "clsx";
import Card from "./FeatureSectionComp/Card";

const FeaturesSection = () => {
  return (
    <div className="container m-auto md:grid h-full md:h-[65vh] grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
      <div
        className={clsx(`
        bg-[#181924]
        rounded-md
        
        h-[45%]
        flex
        items-center
        justify-center
        flex-col
        p-4
      `)}
      >
        <Card label={"CI/CD Pipeline Generate"} />
        <hr className="mx-auto w-[90%] bg-[#9e9e9e]" />
        <Card label={"Build / Deploymnent"} />
      </div>
      <br className="block md:hidden"/>
      <div className="w-1/3 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="338"
          height="375"
          viewBox="0 0 538 475"
          fill="none"
        >
          <g filter="url(#filter0_f_6_78)">
            <path
              d="M34.8639 358.256C-24.2037 255.948 51.057 122.9 172.395 52.8452C293.733 -17.2094 439.981 8.93713 499.049 111.245C558.116 213.553 507.636 353.281 386.298 423.335C264.96 493.39 93.9315 460.564 34.8639 358.256Z"
              stroke="url(#paint0_linear_6_78)"
              strokeWidth="9"
            />
            <path
              d="M34.8639 358.256C-24.2037 255.948 51.057 122.9 172.395 52.8452C293.733 -17.2094 439.981 8.93713 499.049 111.245C558.116 213.553 507.636 353.281 386.298 423.335C264.96 493.39 93.9315 460.564 34.8639 358.256Z"
              stroke="url(#paint1_linear_6_78)"
              strokeOpacity="0.2"
              strokeWidth="9"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_6_78"
              x="0.825958"
              y="0.074707"
              width="536.455"
              height="473.978"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="4.5"
                result="effect1_foregroundBlur_6_78"
              />
            </filter>
            <linearGradient
              id="paint0_linear_6_78"
              x1="375.836"
              y1="429.376"
              x2="161.933"
              y2="58.8855"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A056F7" />
              <stop offset="1" stopColor="#20C1E4" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_6_78"
              x1="474.9"
              y1="126.801"
              x2="15.849"
              y2="171.364"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0104167" stopColor="#0A05F8" stopOpacity="0.33" />
              <stop offset="1" stopColor="white" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        style={{
          alignSelf: "end",
        }}
        className={clsx(`
        bg-[#181924]
        rounded-md
        h-[45%]
        flex
        items-center
        justify-center
        flex-col
        p-4
      `)}
      >
        <Card label={"Generate Test Cases"} />
        <hr className="mx-auto w-[90%] bg-[#9e9e9e]" />

        <Card label={"Code Analysis"} />
      </div>
    </div>
  );
};

export default FeaturesSection;
