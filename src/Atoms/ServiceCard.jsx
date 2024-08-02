import { useState, useEffect } from "react";

function ServiceCard({ status, detail, img, colorStatus }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={
        isMobile
          ? "relative inline-block flex-shrink-0 w-full"
          : "relative inline-block w-full"
      }
    >
      <div className="absolute bg-white border rounded flex items-center m-1 px-1 gap-2">
        <div className={`w-2 h-2 rounded-full ${colorStatus}`}></div>
        <h2 className="">{status}</h2>
      </div>
      <img src={img} alt="no Img" className="lg:w-60 w-48 rounded-md" />
      <div className="absolute top-20 bg-[#758694]">
        <p className=" text-white font-bold p-2 drop-shadow-2xl">{detail}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
