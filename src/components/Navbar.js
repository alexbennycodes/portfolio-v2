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
      className="font-serif ml-10 text-white ease-in duration-300 transition-all hover:text-themeColor capitalize"
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
      <div className="py-5 px-8 flex justify-between items-center w-screen fixed top-0 z-[100] bg-black">
        <a href="/">
          {/* <img
            src="images/logo.svg"
            alt=""
            className="w-3/4 hover:fill-white"
          /> */}
          <svg
            width="55"
            height="39"
            viewBox="0 0 55 39"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3/4 fill-themeColor duration-500 hover:scale-[1.15] transition-all ease-in-out"
          >
            <g clip-path="url(#clip0_2_5)">
              <path
                d="M51.5055 21.8053C50.0671 20.5853 48.2987 19.8159 46.4225 19.5938L45.9999 19.5422C45.9999 19.531 45.9999 19.5191 45.9999 19.5078C46.0239 19.5034 46.0479 19.4974 46.0749 19.4951C46.5422 19.4556 47.0057 19.3806 47.4615 19.2709C49.9158 18.6924 52.0519 17.1939 53.4253 15.0872C54.7987 12.9804 55.3038 10.4274 54.8356 7.95924C54.4881 6.00443 53.5294 4.20891 52.0963 2.82902C50.1963 0.980884 47.9119 0.0127061 45.2552 0.00822029C37.7797 -0.00623384 30.3047 -0.00897514 22.8303 -3.6113e-06C22.786 -3.6113e-06 22.7424 -3.6113e-06 22.6989 -3.6113e-06C22.6677 -0.00467979 22.6358 0.00136065 22.6086 0.0171235C22.5813 0.0328863 22.5602 0.0574323 22.5488 0.0867212C22.5307 0.125598 22.506 0.161484 22.4842 0.199613L4.59803 31.0527L0.106599 38.8019C0.0735685 38.8587 0.0442913 38.9178 0 39H45.1591C45.9169 39.0012 46.6724 38.9169 47.4112 38.7488C52.3575 37.6161 55.819 32.7917 54.8333 27.4596C54.4092 25.1846 53.2809 23.2976 51.5055 21.8053ZM17.3239 28.7979L17.3156 28.7784C17.3156 28.7725 17.3096 28.7657 17.3156 28.7612C17.3274 28.7324 17.3406 28.7042 17.3554 28.6768C19.0385 25.777 20.7218 22.8769 22.4054 19.9766C22.4106 19.9669 22.4256 19.9624 22.4452 19.9497L27.5747 28.7979H17.3239Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_5">
                <rect width="55" height="39" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
