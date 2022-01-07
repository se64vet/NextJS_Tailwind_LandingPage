import CrewImg from "@/compnents/Crew/CrewImg";
import CrewInfo from "@/compnents/Crew/CrewInfo";
import CrewNavi from "@/compnents/Crew/CrewNavi";
import React, { useEffect, useState } from "react";

const index = () => {
  const crewData = {
    "name": "Douglas Hurley",
    "images": {
      "png": "/assets/crew/image-douglas-hurley.png",
      "webp": "/assets/crew/image-douglas-hurley.webp",
    },
    "role": "Commander",
    "bio":
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  };
  return (
    <div className="flex flex-row items-center justify-end min-h-screen h-screen bg-center bg-cover bg-desMobile md:bg-desTablet lg:justify-center md:items-end lg:bg-desDesktop">
      <div className="uppercase mt-24 md:mt-20 lg:w-4/5">
        {/* Page name */}
        <h1 className="heading5 text-center px-10 md:text-left">
          <span className="font-bold text-gray-500">02</span> Meet your crew
        </h1>

        {/* main  */}
        <div className="mt-5 flex flex-col justify-center items-center md:flex-col-reverse lg:px-10 lg:flex-row-reverse lg:gap-44 lg:justify-between">
          <CrewImg imgUrl={crewData.images.webp} />
          <div className="text-center px-10 flex flex-col md:flex-col-reverse md:px-28 lg:grow lg:px-0 lg:w-1/2 lg:text-left">
            <CrewNavi />
            <CrewInfo
              name={crewData.name}
              bio={crewData.bio}
              role={crewData.role}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
