export const AboutMeSection = () => {
  return (
    <section
      className=" flex items-center flex-col lg:grid lg:grid-cols-3 gap-5 py-48"
      id="about"
    >
      <img
        className="profile-img lg:col-span-1 max-w-[322px] lg:max-w-none w-full order-last lg:order-none"
        src="images/profile-img.jpg"
        alt=""
      />

      <div className="about-me-text lg:col-span-2 flex flex-col justify-center">
        <h2 className="text-themeColor mb-4 md:text-left">About Me</h2>
        <div className="text-white">
          <p className="mb-3">
            Hello! My name is Alex Benny and I enjoying
            <span className="font-serif text-themeColor">
              {" "}
              designing
            </span> and{" "}
            <span className="font-serif text-themeColor">creating</span>{" "}
            websites. I recently graduated from St. Stephen's College with
            <span className="font-serif text-themeColor">
              {" "}
              BSc Programme with Computer Science
            </span>
            .
          </p>
          <p className="mb-3">
            I'm quite interested in Web Development because it combines two of
            my passions: programming and design.
          </p>
          <p className="mb-3">
            I am passionate about{" "}
            <span className="font-serif text-themeColor"> coding</span> and
            <span className="font-serif text-themeColor">
              {" "}
              solving problems{" "}
            </span>
            through code, and I am excited to work alongside other amazing
            programmers and learn so much more!
          </p>
        </div>
      </div>
    </section>
  );
};
