function About() {
  return (
    <div
      id="about"
      className="relative lg:mt-28 flex items-center bg-white text-white lg:text-lg"
    >
      <div className="flex flex-col px-5 mt-16 lg:py-5 pt-40 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
        <div className="mb-5 lg:w-[60vw] flex flex-col gap-2">
          <div className="bg-[#ef5023] shadow-lg p-5 border rounded-md">
            <h2 className="mb-3 font-semibold">Tentang Ridho Service</h2>
            <p>
              Ridho Service adalah perusahaan yang bergerak di bidang pelayanan
              dan perbaikan peralatan elektronik rumah tangga dan peralatan
              industri. Didirikan pada tahun 1996, Ridho Service telah menjadi
              mitra terpercaya bagi pelanggan individu maupun industri,
              memastikan perangkat listrik mereka berfungsi secara optimal.
            </p>
          </div>
          <div className="bg-[#ef5023] shadow-lg p-5 border rounded-md">
            <h3 className="mb-3 font-semibold">Visi Kami</h3>
            <p>
              Kami bertujuan untuk menjadi penyedia layanan dan perbaikan
              peralatan listrik terdepan, dikenal karena keandalan, kualitas,
              dan layanan pelanggan yang luar biasa. Dengan dedikasi terhadap
              inovasi dan perbaikan berkelanjutan, kami berkomitmen untuk
              memberikan solusi yang efektif dan efisien untuk semua kebutuhan
              elektronik Anda.
            </p>
          </div>
          <div className="bg-[#ef5023] shadow-lg p-5 border rounded-md">
            <h3 className="mb-3 font-semibold">Misi Kami</h3>
            <ul className="list-disc">
              <li>
                Pelayanan Terbaik: Memberikan layanan perbaikan yang cepat,
                akurat, dan ramah untuk pelanggan rumah tangga dan industri.
              </li>
              <li>
                Kualitas Unggul: Menggunakan suku cadang berkualitas tinggi dan
                teknologi terbaru untuk memastikan hasil perbaikan yang tahan
                lama.
              </li>
              <li>
                Keandalan: Membangun kepercayaan dengan pelanggan melalui
                transparansi, kejujuran, dan profesionalisme dalam setiap aspek
                layanan kami.
              </li>
              <li>
                Komitmen Lingkungan: Mendukung praktik ramah lingkungan dengan
                mempromosikan perbaikan dan penggunaan ulang perangkat listrik.
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <img src="/teknisi.jpg" alt="teknisi" className="w-[40vw]" />
        </div>
      </div>
    </div>
  );
}

export default About;
