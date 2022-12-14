import { Fade } from "react-awesome-reveal";

export const RightMailLink = () => {
  return (
    <div className="hidden md:flex flex-col items-center w-9 fixed bottom-0 right-3 font-serif">
      <a
        href="mailto:alexbenny2811@gmail.com"
        className="rotate-90 mb-32 ml-1 text-white hover:text-themeColor hover:-translate-y-2 ease-in-out transition-all duration-500"
      >
        <Fade direction="right" triggerOnce>
          alexbenny2811@gmail.com
        </Fade>
      </a>
      <Fade triggerOnce>
        <div className="bg-white w-[2px] h-24"></div>
      </Fade>
    </div>
  );
};
