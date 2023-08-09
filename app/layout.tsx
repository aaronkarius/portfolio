import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-gray-200 bg-center bg-cover">
        <main>
          <div className="p-4 w-fit">
            <nav className="flex p-4 transition-all rounded-full hover:shadow-xl hover:transition-all hover:shadow-black">
              <div className="p-4">
                <Link
                  href="/"
                  className="p-4 antialiased text-white transition-all border-2 rounded-2xl bg-slate-500 hover:hue-rotate-90 hover:transition-all"
                >
                  Home
                </Link>
              </div>
              <div className="p-4">
                <Link
                  href="/"
                  className="p-4 antialiased text-white transition-all border-2 rounded-2xl bg-slate-500 hover:hue-rotate-90 hover:transition-all"
                >
                  About
                </Link>
              </div>
              <div className="p-4">
                <Link
                  href="/"
                  className="p-4 antialiased text-white transition-all border-2 rounded-2xl bg-slate-500 hover:hue-rotate-90 hover:transition-all"
                >
                  Links
                </Link>
              </div>
            </nav>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
