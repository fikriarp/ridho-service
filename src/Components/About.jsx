function About() {
  return (
    <div id="about" className=" lg:h-[100vh] flex items-center bg-slate-200">
      <div className="flex flex-col px-5 mt-16 lg:py-5 pt-40 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
        <div className="mb-5 lg:w-[60vw]">
          <h2 className="mb-3">Welcome to Ridho Service</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="">
          <img
            src="/teknisi.png"
            alt="teknisi"
            className="lg:w-[20vw] w-[40vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
