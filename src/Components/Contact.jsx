function Contact() {
  return (
    <div id="contact" className="p-5 bg-yellow-200">
      <h2>Contact Us</h2>
      <p>
        Ridho Service is always ready to assist you with your electronic repair
        needs. Feel free to contact us via:
      </p>
      <div className="flex  items-center justify-center">
        <img src="/call.png" alt="call" className="md:w-1/3 w-1/2 " />
        <div className="grid grid-cols-1   gap-2 w-full mt-4 text-white">
          <div className=" bg-[#758694] flex flex-col items-center">
            <p>Whatsapp</p>
            <p>+62 823 6441 2330</p>
          </div>

          <div className=" bg-[#758694] flex flex-col items-center">
            <p>Instagram</p>
            <p>@ridho_service</p>
          </div>

          <div className=" bg-[#758694] flex flex-col items-center">
            <p>Email</p>
            <p>ridhoservice@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
