import CrewImg from "@/compnents/Crew/CrewImg";
import CrewInfo from "@/compnents/Crew/CrewInfo";
import CrewNavi from "@/compnents/Crew/CrewNavi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [crewData, setCrewData] = useState({});
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const { name } = route.query;
  const fetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    const { data } = result;
    setCrewData(data);
  };

  useEffect(() => {
    if (name != undefined) {
      fetchData(`/api/crew/${name}`);
      setLoading(false);
    }
  }, [name]);

  return (
    <div className="flex flex-row items-center justify-end min-h-screen h-screen bg-center bg-cover bg-desMobile md:bg-desTablet lg:justify-center md:items-end lg:bg-desDesktop">
      <div className="uppercase mt-24 md:mt-20 lg:w-4/5">
        {/* Page name */}
        <h1 className="heading5 text-center px-10 md:text-left">
          <span className="font-bold text-gray-500">02</span> meet your crew
        </h1>
        {/* main  */}
        {loading
          ? "loading...."
          : crewData && (
              <div className="mt-5 flex flex-col justify-center items-center md:flex-col-reverse lg:px-10 lg:flex-row-reverse lg:gap-44 lg:justify-between">
                {crewData.images != undefined && (
                  <CrewImg imgUrl={crewData.images.webp} />
                )}
                <div className="text-center px-10 flex flex-col md:flex-col-reverse md:px-28 lg:grow lg:px-0 lg:w-1/2 lg:text-left">
                  <CrewNavi />
                  <CrewInfo
                    name={crewData.name}
                    bio={crewData.bio}
                    role={crewData.role}
                  />
                </div>
              </div>
            )}
      </div>
    </div>
  );
};

export default index;
