import PlanetImg from "@/compnents/Destination/PlanetImg";
import PlanetInfo from "@/compnents/Destination/PlanetInfo";
import PlanetNavi from "@/compnents/Destination/PlanetNavi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [planetData, setPlanetData] = useState({});
  const [img, setimg] = useState("");
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const { name } = route.query;
  const fetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    const { data } = result;
    setPlanetData(data);
  };

  useEffect(() => {
    if (name != undefined) {
      fetchData(`/api/destination/${name}`);
      setLoading(false);
    }
  }, [name]);

  //   const { png } = planetData.images;
  return (
    <div className="flex flex-row items-center justify-start min-h-screen bg-center bg-cover bg-desMobile md:bg-desTablet lg:justify-center lg:bg-desDesktop">
      <div className="uppercase mt-24 md:mt-20 lg:w-4/5">
        {/* Page name */}
        <h1 className="heading5 text-center px-10 md:text-left">
          <span className="font-bold text-gray-500">01</span> Pick your
          destination
        </h1>
        {/* main  */}
        {loading
          ? "loading...."
          : planetData && (
              <div className="mt-5 flex flex-col justify-center items-center lg:p-10 lg:flex-row lg:gap-44 lg:justify-between">
                {planetData.images != undefined && (
                  <PlanetImg imgUrl={planetData.images.webp} />
                )}
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
            )}
      </div>
    </div>
  );
};

export default index;
