"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "lottie-react";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { ThumbsUp } from "lucide-react";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  imgHeight,
  imgWidth,
  spareImgHeight,
  spareImgWidth,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  imgHeight?: number;
  imgWidth?: number;
  spareImgHeight?: number;
  spareImgWidth?: number;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const phoneNumber = "+2348123806786";
  const callLink = `tel:${phoneNumber}`;

  const copyToClipboard = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => alert("📞 Number copied to clipboard!"))
        .catch(() => alert("❌ Failed to copy. Try again."));
    } else {
      alert("Clipboard API not supported in this browser.");
    }
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 mx-5 relative overflow-hidden rounded-3xl flex flex-col justify-between space-y-4 border transition duration-200 text-gray-100 border-red-300/[0.4]",
        "bg-[linear-gradient(90deg,_rgba(26,17,69,1)_0%,_rgba(12,24,37,1)_97%)]",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={imgWidth}
              height={imgHeight}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={spareImgWidth}
              height={spareImgHeight}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans text-sm font-light text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans lg:mt-3 text-teal-100 font-normal lg:text-xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-2 lg:gap-5 w-fit absolute -right-1 lg:-right-3 ">
              <div className="flex flex-col gap-1.5 lg:gap-4">
                {["React.Js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#222751]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#222751]" />
              </div>
              <div className="flex flex-col gap-1.5 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-[#222751]" />
                {["NextAuth.Js", "Aceternity UI", "ShadCN UI"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-70 rounded-lg text-center bg-[#222751]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative z-10">
              <p className="mb-3 text-[17px] lg:text-base text-teal-100 opacity-80">
                Let&apos;s build something that stands out.
              </p>

              {isAnimating && (
                <div className="absolute -bottom-5 right-0 z-0 pointer-events-none">
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    autoplay
                    style={{ width: 400, height: 200 }}
                  />
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-2">
                <button
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border bg-[#c3dae8d3] dark:bg-[#1c182bd3] border-red-400/[0.7] bg-[length:200%_100%] px-5 font-medium text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:px-2 hover:h-10 flex-row gap-2 cursor-pointer"
                  onClick={() => {
                    setIsAnimating(true);
                    copyToClipboard();
                    setTimeout(() => setIsAnimating(false), 3000);
                  }}
                >
                  Copy My Number <ThumbsUp size={16} />
                </button>

                <a
                  href={callLink}
                  className="inline-flex h-12 items-center justify-center rounded-xl border bg-[#372a21de] border-red-400/[0.7] px-2 font-medium text-white transition-colors hover:bg-[#475569]"
                >
                  📞 Call Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
