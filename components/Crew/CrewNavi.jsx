import Link from "next/link";
import React, { useEffect, useState } from "react";

const CrewNavi = () => {
  const [members, setMembers] = useState([]);
  useEffect(async () => {
    const response = await fetch("/api/crew");
    const result = await response.json();
    const { data } = result;
    const names = data.map((item) =>
      item.name.split(" ").join("-").toLowerCase()
    );
    setMembers(names);
  }, []);
  return (
    <>
      <ul className="my-5">
        {members.map((item, idx) => (
          <Link href={`/crew/${item}`} key={idx}>
            <li
              className="w-[10px] h-[10px] rounded-full bg-gray-500 inline-block mx-2 hover:bg-gray-400 cursor-pointer lg:mx-0 lg:mr-8"
              style={{ letterSpacing: "0px", fontSize: "1.5rem" }}
            ></li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CrewNavi;
