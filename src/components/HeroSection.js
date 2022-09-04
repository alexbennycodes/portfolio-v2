export const HeroSection = () => {
  return (
    <section
      className="container mx-auto p-7 md:p-0 h-screen flex items-center justify-center"
      id="home"
    >
      <div className="max-w-xl lg:max-w-none">
        <p className="font-serif italic mb-4 text-white">Hi, my name is</p>
        <h1 className="font-sans font-black text-6xl lg:text-7xl tracking-wide text-themeColor">
          Alex Benny.
        </h1>
        <h1 className="font-sans font-black text-6xl lg:text-7xl tracking-wide text-lightGrey">
          I build cool websites.
        </h1>
        <p className="font-sans mt-4 text-lightGrey lg:text-lg lg:max-w-xl">
          I'm a self-taught frontend developer that likes building beautiful
          websites with a strong focus on user interface.
        </p>
        <a href="#contact" className="inline-block font-serif px-4 py-3 text-themeColor border-2 rounded  mt-6 border-themeColor transition-all duration-200 ease-in hover:bg-themeColor hover:bg-opacity-50 hover:text-white">
          Contact Me
        </a>
      </div>
    </section>
  );
};
