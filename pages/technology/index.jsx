import Link from "next/link";
import React, { useState, useEffect } from "react";

const index = () => {
  const breakPoint = 1024;
  const [largeScreen, setLargeScreen] = useState(false);

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
  return (
    <div className="uppercase min-h-screen bg-center bg-cover bg-techMobile md:bg-techTablet lg:bg-techDesktop">
      <div className=" min-h-screen text-center items-center justify-center flex flex-col gap-10 lg:items-start lg:text-left">
        {/* title */}
        <h1 className="heading5 lg:ml-64">
          <span className="text-gray-500">03</span> space launch 101
        </h1>

        <div className="flex flex-col gap-10 lg:flex-row-reverse">
          {/* img */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              className="lg:ml-auto"
              src={
                largeScreen
                  ? "/assets/technology/image-launch-vehicle-portrait.jpg"
                  : "/assets/technology/image-launch-vehicle-landscape.jpg"
              }
              alt="ship"
            />
          </div>
          <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-end">
            {/* navi */}
            <div className="flex flex-row gap-6 justify-center lg:flex-col">
              {["launch-vehicle", "spaceport", "space-capsule"].map(
                (item, idx) => (
                  <Link key={idx} href={`/technology/${item}`}>
                    <div
                      className={`w-3 h-3 flex items-center justify-center p-5 rounded-full border border-gray-500 heading4 text-gray-300 cursor-pointer hover:border-white md:p-7 first-of-type:bg-white first-of-type:text-black`}
                    >
                      {idx + 1}
                    </div>
                  </Link>
                )
              )}
            </div>
            {/* info */}
            <div className="px-10 md:w-2/3 lg:w-1/2">
              <h3 className="navText text-gray-400">The terminology</h3>
              <h2 className={largeScreen ? "heading3" : "heading4"}>
                launch vehicle
              </h2>
              <p className="normal-case bodyText text-gray-400 lg:w-2/3">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
