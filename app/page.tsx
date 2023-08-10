import AnimatedBackground from "../components/AnimatedBackground";
import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export default function HomePage() {
  return (
    <div>
      <AnimatedBackground />

      <DarkModeToggle />
    </div>
  );
}
