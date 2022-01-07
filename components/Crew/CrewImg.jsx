import React from "react";

const CrewImg = ({ imgUrl }) => {
  return (
    <>
      <div className="max-w-xs md:max-w-7xl md:w-4xl lg:max-w-full lg:w-1/2 lg:grow">
        <img
          className="object-cover mx-auto my-3 object-center w-4/5 md:my-0 "
          src={imgUrl}
          alt="moon"
        />
      </div>
    </>
  );
};

export default CrewImg;
