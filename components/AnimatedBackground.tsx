"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <div className={"absolute inset-0 z-0 bg-gray-200 dark:bg-black"}>
        <ParticlesBg
          type="cobweb"
          color={theme === "dark" ? "#FFFFFF" : "#000000"}
          bg={true}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
