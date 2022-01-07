import React from "react";

const PlanetInfo = ({ name, desc, distance, travel }) => {
  return (
    <>
      <div className="lg:w-min lg:border-b lg:border-b-gray-600">
        <h2 className="heading2 lg:pr-24">{name}</h2>
        <p className=" py-6 text-gray-400 leading-7 bodyText normal-case">
          {desc}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center border-t border-t-gray-600 pt-10 text-gray-400 md:gap-32 md:flex-row lg:justify-start lg:border-0">
        <div>
          <span className="subHeading2 block ">Avg. distance</span>
          <span className="subHeading1 block my-3">{distance}</span>
        </div>
        <div>
          <span className="subHeading2 block ">Est. travel time</span>
          <span className="subHeading1 block my-3">{travel}</span>
        </div>
      </div>
    </>
  );
};

export default PlanetInfo;
