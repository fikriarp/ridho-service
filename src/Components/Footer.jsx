function Footer() {
  return (
    <div className="px-5 pt-2 bg-slate-300">
      <div className="text-xs lg:text-sm">
        <div className="flex gap-2">
          <i className="fa-solid fa-map-pin"></i>
          <p>
            Jl. Merpati No. 45, Kel. Karang Anyer, Kab. Asahan, Sumatera Utara
          </p>
        </div>
        <div className="flex gap-2">
          <i className="fa-solid fa-phone"></i>
          <p>(+62) 823-6161-1007</p>
        </div>
        <div className="flex gap-2">
          <i className="fa-solid fa-envelope"></i>
          <p>ridhoservice@gmail.com</p>
        </div>
      </div>
      <p className="text-xs lg:text-sm flex justify-center mt-2">
        &copy; 2024 ridho service
      </p>
    </div>
  );
}

export default Footer;
