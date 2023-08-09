import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-center ">
        <Image
          src="/avatar.jpg"
          alt="A picture of me :)"
          width={100}
          height={100}
          className="inline-flex w-auto h-auto rounded-full"
        />
        <h1 className="inline-flex p-4 font-sans antialiased italic font-thin text-center text-7xl">
          Portfolio
        </h1>
      </div>
      <div
        className="flex justify-center w-screen p-4 pt-8"
        style={{ height: "70vh" }}
      >
        <div className="w-full border-8 border-black"></div>
      </div>
    </>
  );
}
