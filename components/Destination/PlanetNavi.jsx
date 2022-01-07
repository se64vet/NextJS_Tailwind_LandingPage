import Link from "next/link";
import React from "react";

const PlanetNavi = () => {
  return (
    <>
      <ul>
        {["moon", "mars", "europa", "titan"].map((item, idx) => (
          <Link href={`/destination/${item}`} key={idx}>
            <li
              className="inline heading5 text-gray-400 mx-6 py-2 hover:border-b-2 border-b-white cursor-pointer lg:mx-0 lg:mr-8"
              style={{ letterSpacing: "0px", fontSize: "1.5rem" }}
            >
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PlanetNavi;
