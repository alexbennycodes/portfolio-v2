export const RightMailLink = () => {
  return (
    <div className="hidden md:flex flex-col items-center w-9 fixed bottom-0 right-2 font-serif">
      <a
        href="mailto:alexbenny2811@gmail.com"
        className="rotate-90 mb-32 ml-1 text-lightGrey hover:text-themeColor hover:-translate-y-2 ease-in-out transition-all duration-500"
      >
        alexbenny2811@gmail.com
      </a>
      <div className="bg-lightGrey w-[2px] h-24"></div>
    </div>
  );
};
