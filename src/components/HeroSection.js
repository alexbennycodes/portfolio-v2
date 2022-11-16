import { Fade } from "react-awesome-reveal";

export const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center" id="home">
      <div className="max-w-xl lg:max-w-none">
        <Fade direction="down" triggerOnce>
          <p className="font-serif italic text-white -mb-2 font-semibold text-lg">
            Hi, my name is
          </p>

          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-themeColor to-[#ff163d] leading-[1.2]">
            Alex Benny.
          </h1>

          <h1 className="text-white">I build cool websites.</h1>
          <p className="font-sans mt-4 text-white lg:text-lg lg:max-w-xl">
            I'm a self-taught frontend developer that likes building beautiful
            and functional websites.
          </p>
          <a
            href="#contact"
            className="inline-block font-serif px-4 py-3 text-themeColor border-2 rounded  mt-6 border-themeColor transition-all duration-200 ease-in hover:bg-themeColor hover:bg-opacity-50 hover:text-white"
          >
            Contact Me
          </a>
        </Fade>
      </div>
    </section>
  );
};
