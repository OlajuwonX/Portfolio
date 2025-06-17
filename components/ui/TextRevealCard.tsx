"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  children,
  className,
}: {
  text: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Optional: Still tracking dimensions in case you want future use
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.getBoundingClientRect(); // No setState needed now
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "text-center rounded-lg p-3 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
        <p className="text-base text-center text-[40px] md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-[#4f4f76]">
          {text}
        </p>
        <MemoizedStars />
      </div>
    </div>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block"
        ></motion.span>
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
