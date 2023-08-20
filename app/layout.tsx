import { Providers } from "@/components/Providers";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import DarkModeToggle from "@/components/DarkModeToggle";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <AnimatedBackground />
            <DarkModeToggle />
            <NavBar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
