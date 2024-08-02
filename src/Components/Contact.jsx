function Contact() {
  return (
    <div id="contact" className="p-5">
      <h2>Contact</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2   gap-2 w-full mt-4 text-white">
        <div className=" bg-[#468585] flex flex-col items-center">
          <p>Whatsapp</p>
          <p>+62 123456789</p>
        </div>

        <div className=" bg-[#468585] flex flex-col items-center">
          <p>Instagram</p>
          <p>@ridho_service</p>
        </div>

        <div className=" bg-[#468585] flex flex-col items-center">
          <p>Email</p>
          <p>ridhoservice@example.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
