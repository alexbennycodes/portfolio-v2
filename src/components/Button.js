export const Button = ({ className, link, children }) => {
  return (
    // <a
    //   href={link}
    //   className={`${className} inline-block font-serif px-4 py-2 text-themeColor border-2 rounded border-themeColor transition-all duration-200 ease-in hover:bg-themeColor hover:bg-opacity-50 hover:text-white`}
    //   target="__blank"
    // >
    //   {children}
    // </a>
    <a
      href={link}
      className="relative inline-block px-4 py-2 text-sm group mr-5"
      target="__blank"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0.5 translate-y-0.5 bg-themeColor group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-darkThemeColor border-2 border-themeColor group-hover:bg-themeColor "></span>
      <span className="relative text-white capitalize">{children}</span>
    </a>
  );
};
