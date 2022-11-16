import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export const LeftSocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col gap-6 fixed left-5 z-10 items-center justify-center bottom-0">
      <a
        href="https://github.com/alexbennycodes"
        target="_blank"
        rel="noreferrer"
      >
        <Fade direction="up" triggerOnce>
          <FaGithub className="left-social-links" />
        </Fade>
      </a>
      <a
        href="https://twitter.com/alexbennytwts"
        target="_blank"
        rel="noreferrer"
      >
        <Fade direction="up" triggerOnce>
          <FaTwitter className="left-social-links" />
        </Fade>
      </a>
      <a
        href="https://www.linkedin.com/in/alex-benny28"
        target="_blank"
        rel="noreferrer"
      >
        <Fade direction="up" triggerOnce>
          <FaLinkedin className="left-social-links" />
        </Fade>
      </a>
      <Fade triggerOnce>
        <div className="bg-white w-[2px] h-24"></div>
      </Fade>
    </div>
  );
};
