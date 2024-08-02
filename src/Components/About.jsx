function About() {
  return (
    <div id="about" className="relative lg:mt-28 flex items-center bg-white">
      <div className="flex flex-col px-5 mt-16 lg:py-5 pt-40 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
        <div className="mb-5 lg:w-[60vw] flex flex-col gap-2">
          <div className="bg-yellow-200 shadow-lg p-5 border rounded-md">
            <h2 className="mb-3">About Ridho Service</h2>
            <p>
              Ridho Service is a company specializing in servicing and repairing
              household electronics and industrial equipment. Established in
              2005, Ridho Service has become a trusted partner for individual
              and corporate clients, ensuring their electrical devices function
              optimally.
            </p>
          </div>
          <div className="bg-yellow-200 shadow-lg p-5 border rounded-md">
            <h3 className="mb-3">Our Vision</h3>
            <p>
              We aim to be the leading provider of electrical service and
              repair, known for reliability, quality, and excellent customer
              service. With a dedication to innovation and continuous
              improvement, we are committed to delivering effective and
              efficient solutions for all your electronic needs.
            </p>
          </div>
          <div className="bg-yellow-200 shadow-lg p-5 border rounded-md">
            <h3 className="mb-3">Our Mission</h3>
            <ul className="list-disc">
              <li>
                Best Service: Providing fast, accurate, and friendly repair
                services for household and industrial clients.
              </li>
              <li>
                Superior Quality: Using high-quality spare parts and the latest
                technology to ensure durable repair results.
              </li>
              <li>
                Reliability: Building trust with customers through transparency,
                honesty, and professionalism in every aspect of our service.
              </li>
              <li>
                Environmental Commitment: Supporting eco-friendly practices by
                promoting repair and reuse of electrical devices.
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
