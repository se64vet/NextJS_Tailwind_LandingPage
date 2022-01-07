import Call2ActionBtn from "@/compnents/Home/Call2ActionBtn";
import HomeTextContent from "@/compnents/Home/HomeTextContent";
import React from "react";

export default function Home() {
  return (
    <div
      className={`flex flex-row items-center justify-center min-h-screen bg-center bg-cover bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop`}
    >
      <div className="flex flex-col gap-20 justify-center items-center lg:flex-row lg:justify-around lg:self-end lg:mb-56 lg:w-full">
        <HomeTextContent />
        <Call2ActionBtn />
      </div>
    </div>
  );
}
