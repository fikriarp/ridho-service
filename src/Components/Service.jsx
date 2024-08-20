import React, { useEffect, useState } from "react";
import ServiceCard from "../Atoms/ServiceCard";

function Service() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const handleSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 slides
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute z-20 top-[37vh] items-center w-full lg:top-[55vh] px-2">
      <div className="flex items-center bg-white border rounded-md shadow-lg p-5 relative">
        {isMobile && (
          <button
            className="absolute z-30  top-[35%] right-0 bg-[#ef5023] text-white p-2"
            onClick={handleSlide}
          >
            &gt;
          </button>
        )}

        <div
          className={
            isMobile
              ? "flex flex-col w-[100%] lg:text-lg"
              : "flex flex-col lg:text-lg"
          }
        >
          <h2 className="font-semibold ">MY Service</h2>
          <p>Kami Siap Perbaiki</p>
        </div>
        <div
          className={isMobile ? "overflow-hidden relative" : "relative w-full"}
        >
          <div
            className="flex duration-300"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            <ServiceCard
              img="/service-1.jpg"
              status="Service"
              detail="Home electrical service"
              colorStatus={"bg-green-500"}
            />
            <ServiceCard
              img="/service-2.jpg"
              status="Service"
              detail="Industrial Service"
              colorStatus={"bg-green-500"}
            />
            <ServiceCard
              img="/service-3.jpg"
              status="Maintenance"
              detail="Industrial maintenance"
              colorStatus={"bg-yellow-500"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
