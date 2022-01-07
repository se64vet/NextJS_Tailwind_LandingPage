import React from "react";

const CrewInfo = ({ name, role, bio }) => {
  return (
    <>
      <div className="lg:w-full">
        <div className="">
          <p className="heading4 text-gray-400">{role}</p>
          <h2 className="heading3 lg:pr-24">{name}</h2>
        </div>
        <p className="py-6 text-gray-400 leading-7 bodyText normal-case lg:w-3/5">
          {bio}
        </p>
      </div>
    </>
  );
};

export default CrewInfo;
