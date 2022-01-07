import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const Navbar = () => {
  const navItems = [
    { idx: "00", name: "home", path: "/" },
    { idx: "01", name: "destination", path: "/destination" },
    { idx: "02", name: "crew", path: "/crew" },
    { idx: "03", name: "technology", path: "/technology" },
  ];
  const router = useRouter();
  const { route } = router;
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-transparent fixed md:top-0 lg:top-20 left-0 md:left-10 w-full flex justify-between p-5 sm:p-0 md:justify-around items-center">
      {/* logo */}
      <div className="logo">
        <img className="" src="/assets/shared/logo.svg" alt="logo" />
      </div>
      {/* line - only display on large screen */}
      <div className="lg:w-1/3 2xl:w-2/5 h-0.5 hidden lg:block bg-gray-300 -mr-32 z-10"></div>
      {/* navList - only display on small screen >640px */}
      <nav className="bg-white/5 backdrop-blur-sm py-8 lg:pl-24 xl:pr-40 lg:pr-20 2xl:pr-64 hidden sm:block ">
        <ul className="text-white h-full ">
          {navItems.map((item, idx) => (
            <Link href={`${item.path}`} key={idx}>
              <li
                className={`navText cursor-pointer h-full py-8 px-4 inline xl:mx-2 ${
                  route === item.path ? "border-b-white border-b-2" : ""
                } hover:border-b-white/30 hover:border-b-2`}
              >
                <b className="sr-only lg:not-sr-only">{item.idx} </b>
                <span>{item.name.toUpperCase()}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* mobile Nav */}
      <div className=" sm:hidden">
        <button onClick={() => setShowNav(!showNav)}>
          <img
            src={`/assets/shared/${
              showNav ? "icon-close.svg" : "icon-hamburger.svg"
            }`}
            alt="menu"
          />
        </button>
        {showNav && (
          <nav className="absolute w-screen h-screen top-0 left-0 flex items-center justify-center bg-gray-600 scale-1 -z-10">
            <ul className="text-white w-fit">
              {navItems.map((item, idx) => (
                <Link href={`${item.path}`} key={idx}>
                  <li
                    className={` ${
                      route === item.path ? "border-b-white border-b-2" : ""
                    } hover:border-b-white/30 hover:border-b-2`}
                  >
                    <b>{item.idx} </b>
                    <span>{item.name.toUpperCase()}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
