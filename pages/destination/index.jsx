import PlanetImg from "@/compnents/Destination/PlanetImg";
import PlanetInfo from "@/compnents/Destination/PlanetInfo";
import PlanetNavi from "@/compnents/Destination/PlanetNavi";
import React, { useEffect, useState } from "react";

const index = () => {
  const planetData = {
    "name": "Moon",
    "images": {
      "png": "/assets/destination/image-moon.png",
      "webp": "/assets/destination/image-moon.webp",
    },
    "description":
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days",
  };
  return (
    <div className="flex flex-row items-center justify-start min-h-screen bg-center bg-cover bg-desMobile md:bg-desTablet lg:justify-center lg:bg-desDesktop">
      <div className="uppercase mt-24 md:mt-20 lg:w-4/5">
        {/* Page name */}
        <h1 className="heading5 text-center px-10 md:text-left">
          <span className="font-bold text-gray-500">01</span> Pick your
          destination
        </h1>

        {/* main  */}
        <div className="mt-5 flex flex-col justify-center items-center lg:p-10 lg:flex-row lg:gap-44 lg:justify-between">
          <PlanetImg imgUrl={planetData.images.webp} />
          <div className="text-center px-10 md:px-28 lg:grow lg:px-0 lg:w-1/2 lg:text-left">
            <PlanetNavi />
            <PlanetInfo
              name={planetData.name}
              desc={planetData.description}
              distance={planetData.distance}
              travel={planetData.travel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
