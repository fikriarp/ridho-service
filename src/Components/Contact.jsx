function Contact() {
  return (
    <div id="contact" className="p-5 bg-[#ef5023] text-white lg:text-lg">
      <h2 className="text-center text-2xl mb-4">Contact Us</h2>
      <p className="text-center mb-6">
        Ridho Service is always ready to assist you with your electronic repair
        needs. Feel free to contact us via:
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <img
          src="/call.png"
          alt="call"
          className="md:w-1/3 w-1/2 mb-6 md:mb-0"
        />
        <div className="grid grid-cols-1 gap-4 w-full md:w-2/3 text-center">
          <div className="bg-[#440b0c] p-4 rounded-md">
            <p className="font-semibold">Whatsapp</p>
            <p>+62 823 6441 2330</p>
          </div>
          <div className="bg-[#440b0c] p-4 rounded-md">
            <p className="font-semibold">Instagram</p>
            <p>@ridho.service</p>
          </div>
          <div className="bg-[#440b0c] p-4 rounded-md">
            <p className="font-semibold">Email</p>
            <p>ridhoservice@example.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.515984317559!2d99.6421309!3d2.9921468!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30324dc0cbff8cd3%3A0x6a4adc880672c5a7!2sKaktus%20Kisaran!5e0!3m2!1sid!2sid!4v1724152795565!5m2!1sid!2sid"
          width="600"
          height="450"
          className="w-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
