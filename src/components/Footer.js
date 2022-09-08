import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-5 p-10 bg-base-200 text-base-content rounded md:hidden">
      <div className="text-white flex items-center gap-3">
        <BiMailSend className="h-5 w-auto" />
        <a
          href="mailto:alexbenny@gmail.com"
          className="font-serif hover:text-themeColor"
        >
          alexbenny@gmail.com
        </a>
      </div>
      <div>
        <div className="flex space-x-5">
          <a
            href="https://github.com/alexbennycodes"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="hover:text-themeColor duration-500 w-auto h-6 text-white ease-in-out" />
          </a>
          <a
            href="https://twitter.com/alexbennytwts"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="hover:text-themeColor duration-500 w-auto h-6 text-white ease-in-out" />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-benny28"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="hover:text-themeColor duration-500 w-auto h-6 text-white ease-in-out" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-white text-sm">
          Copyright © 2022 - All right reserved
        </p>
      </div>
    </footer>
  );
};
