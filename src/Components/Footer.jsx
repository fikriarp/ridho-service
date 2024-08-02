function Footer() {
  return (
    <div className="px-5 pt-2 bg-[#405D72] text-white">
      <div className="text-sm lg:text-base">
        <h2 className="font-bold flex justify-center mb-2">Ridho Service</h2>
        <div className="flex gap-2">
          <i className="fa-solid fa-map-pin"></i>
          <p>
            Jl. Merpati No. 45, Kel. Karang Anyer, Kab. Asahan, Sumatera Utara
          </p>
        </div>
        <div className="flex gap-2">
          <i className="fa-solid fa-phone"></i>
          <p>(+62) 823-6441-2330</p>
        </div>
        <div className="flex gap-2">
          <i className="fa-solid fa-envelope"></i>
          <p>ridhoservice@gmail.com</p>
        </div>
      </div>
      <p className="text-xs lg:text-sm flex justify-center mt-2">
        &copy; 2024 ridho service, All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
