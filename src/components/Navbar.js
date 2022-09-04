const MobileNavLinks = ({ name, id }) => {
  return (
    <li className="hover:opacity-50 py-5 delay-[2s] text-white font-serif text-3xl capitalize">
      <a href={`#${id}`}>{name}</a>
    </li>
  );
};

const NavLinks = ({ name, id }) => {
  return (
    <a
      href={`#${id}`}
      className="font-serif ml-10 text-lightGrey ease-in duration-300 transition-all hover:text-themeColor capitalize"
    >
      {name}
    </a>
  );
};

export const Navbar = () => {
  const links = [
    {
      name: "Home",
      id: "home",
    },
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <>
      <div className="py-5 px-5 flex justify-between items-center w-screen fixed top-0 z-[100] bg-black">
        <a href="/">
          <img src="images/logo.svg" alt="" className="w-3/4" />
        </a>
        <nav className="hidden lg:block">
          {links.map((link, i) => (
            <NavLinks name={link.name} id={link.id} key={i} />
          ))}
        </nav>
        <div className="lg:hidden">
          <nav role="navigation">
            <div className="flex flex-col  z-10 select-none">
              <input
                type="checkbox"
                className="flex w-9 h-[32px] absolute cursor-pointer opacity-0 z-20 peer"
              />
              <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-themeColor rounded z-10 origin-top-left duration-500 transition-all peer-checked:rotate-45 peer-checked:translate-[-3px, -1px] peer-checked:bg-white"></span>
              <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-themeColor rounded z-10 origin-[5px 0] duration-500 transition-all peer-checked:opacity-0 peer-checked:bg-white"></span>
              <span className="flex w-7 h-[3px] mb-[6.5px] relative bg-themeColor rounded z-10 duration-500 transition-all origin-bottom-left peer-checked:opacity-100 peer-checked:-rotate-45 peer-checked:bg-white"></span>

              <ul className="absolute top-[0px] right-0 md:w-[350px] w-[75%] h-screen shadow-md shadow-themeColor/40 p-[50px] bg-themeColor origin-center translate-x-[100%] transform duration-500 peer-checked:transform-none flex flex-col items-end pr-[30px] pt-[75px]">
                {links.map((link, i) => (
                  <MobileNavLinks name={link.name} id={link.id} key={i} />
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <div className="h-[70px] w-full"></div> */}
    </>
  );
};
