import React from "react";

const PlanetImg = ({ imgUrl }) => {
  return (
    <>
      <div className="max-w-xs lg:max-w-full lg:w-1/2 lg:grow">
        <img
          className="object-cover mx-auto my-3 object-center w-4/5"
          src={imgUrl}
          alt="moon"
        />
      </div>
    </>
  );
};

export default PlanetImg;
