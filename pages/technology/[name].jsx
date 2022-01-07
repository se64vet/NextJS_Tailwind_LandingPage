import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Name = () => {
  const breakPoint = 1024;
  const [largeScreen, setLargeScreen] = useState(false);
  const [techData, setTechData] = useState([null]);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const { name } = route.query;

  //set Responsive
  useEffect(() => {
    const setResponsive = () => {
      if (window.innerWidth < breakPoint) setLargeScreen(false);
      else setLargeScreen(true);
    };

    setResponsive();
    window.addEventListener("resize", () => setResponsive());

    return () => {
      window.addEventListener("resize", () => setResponsive());
    };
  }, []);

  //set Data
  const fetchData = (name) => {
    fetch("/api/technology")
      .then((response) => response.json())
      .then((result) => {
        const { data } = result;
        const filteredData = data.filter(
          (item) =>
            item.name.split(" ").join("").toLowerCase() ==
            name.split("-").join("").toLowerCase()
        );
        setTechData(filteredData);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (name != undefined) {
      fetchData(name);
    }
  }, [name]);

  return (
    <div className="uppercase min-h-screen bg-center bg-cover bg-techMobile md:bg-techTablet lg:bg-techDesktop">
      <div className=" min-h-screen text-center items-center justify-center flex flex-col gap-10 lg:items-start lg:text-left">
        {/* title */}
        <h1 className="heading5 lg:ml-64">
          <span className="text-gray-500">03</span> space launch 101
        </h1>

        {/* Main info */}
        {loading ? (
          "loading...."
        ) : (
          <Main data={techData[0]} largeScreen={largeScreen} name={name} />
        )}
      </div>
    </div>
  );
};

const Main = ({ data, largeScreen, name }) => (
  <div className="flex flex-col gap-10 lg:flex-row-reverse">
    {/* img */}
    <div className="lg:w-1/2 flex items-center justify-center">
      <img
        className="lg:ml-auto"
        src={largeScreen ? data.images.portrait : data.images.landscape}
        alt="ship"
      />
    </div>
    <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-end">
      {/* navi */}
      <div className="flex flex-row gap-6 justify-center lg:flex-col">
        {["launch-vehicle", "spaceport", "space-capsule"].map((item, idx) => (
          <Link key={idx} href={`/technology/${item}`}>
            <div
              className={`w-3 h-3 flex items-center justify-center p-5 rounded-full border border-gray-500 heading4 text-gray-300 cursor-pointer hover:border-white md:p-7 ${
                item == name ? "bg-white text-black" : ""
              }`}
            >
              {idx + 1}
            </div>
          </Link>
        ))}
      </div>
      {/* info */}
      <div className="px-10 md:w-2/3 lg:w-1/2">
        <h3 className="navText text-gray-400">The terminology</h3>
        <h2 className={largeScreen ? "heading3" : "heading4"}>{data.name}</h2>
        <p className="normal-case bodyText text-gray-400 lg:w-2/3">
          {data.description}
        </p>
      </div>
    </div>
  </div>
);

export default Name;
