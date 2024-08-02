import React from "react";
import Service from "./Service";

function Banner() {
  return (
    <div id="home" className="relative">
      <div className="absolute bg-[#758694]  h-[40vh] lg:h-[65vh] w-[50%] flex items-center">
        <h1 className="text-white drop-shadow-xl text-2xl lg:text-4xl font-bold p-10">
          Best Electrical Services, From Home to Factory.
        </h1>
      </div>
      <div className="bg-blue-500  flex justify-end">
        <img
          src="/pattern.jpg"
          alt="Pattern"
          className="h-[40vh] lg:h-[65vh] w-[80vw] lg:w-[20vw]"
        />
        <img
          src="/banner.jpg"
          alt="Banner"
          className="h-[40vh] lg:h-[65vh] w-[80vw]"
        />
      </div>
      <Service />
    </div>
  );
}

export default Banner;
