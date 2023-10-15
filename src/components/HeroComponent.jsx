import Profile from "../assets/img/Profile.png";

function HerosectionComponent() {
  return (
    <section id="home" className="pt-20">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hallo Semua👋, saya
              <span className="block font-bold text-dark text-4xl pt-8 pb-3 lg:text-5xl">
                Hafizh Athallah Y.
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Programmer | Editor
            </h2>
            <p className="font-medium text-secondary mb-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit officiis laudantium velit amet accusamus reiciendis
              sequi dolores eos fuga consequuntur?
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 duration-300 ease-in-out"
            >
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              <img
                src={Profile}
                alt="Photo Profile"
                className="max-w-full mx-auto"
                width="500px"
              />
              <span className="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M63.3,-20.8C72.6,8.1,64.2,42.4,43.1,57.3C22,72.1,-11.8,67.4,-29.3,52C-46.8,36.5,-47.9,10.3,-40.3,-16.2C-32.7,-42.7,-16.3,-69.6,5.3,-71.3C27,-73,54,-49.7,63.3,-20.8Z"
                    transform="translate(100 100) scale(1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HerosectionComponent;
