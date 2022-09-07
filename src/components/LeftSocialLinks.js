import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const LeftSocialLinks = () => {
  return (
    <div className="hidden md:flex flex-col gap-6 fixed left-5 z-10 items-center justify-center bottom-0">
      <a
        href="https://github.com/alexbennycodes"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="left-social-links" />
      </a>
      <a
        href="https://twitter.com/alexbennytwts"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="left-social-links" />
      </a>
      <a
        href="https://www.linkedin.com/in/alex-benny28"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="left-social-links" />
      </a>
      <div className="bg-white w-[2px] h-24"></div>
    </div>
  );
};
