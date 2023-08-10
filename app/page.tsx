import AnimatedBackground from "../components/AnimatedBackground";
import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function HomePage() {
  return (
    <div>
      <AnimatedBackground />
      <DarkModeToggle />
      <h1 className="relative z-10 flex flex-col items-center justify-center w-screen h-screen text-black dark:text-white">
        uh.
      </h1>
    </div>
  );
}
