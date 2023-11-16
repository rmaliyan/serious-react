import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import Content from "../content.json";
import MenuItemsList from "../MenuItemsList.json";
import { useEffect, useState } from "react";

function MenuSubitem({ content, url, menuOpen, setmenuOpen }) {
  return (
    <Link
      onClick={() => setmenuOpen(!menuOpen)}
      className="ml-16 grow"
      to={url}
    >
      <div>{content}</div>
    </Link>
  );
}

function MenuSubitemLargeScreen({ url }) {
  return (
    <Link className="ml-1 w-full" to={url}>
      <div className="h-1 w-full bg-white "></div>
    </Link>
  );
}

function MenuItem({
  content,
  url,
  subitems,
  langContent,
  menuOpen,
  setmenuOpen,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [isScreenBiggerThan1024, setIsScreenBiggerThan1024] = useState(false);

  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsScreenBiggerThan1024(window.innerWidth > 1024);
  //   };

  //   window.addEventListener('resize', checkScreenSize);
  //   checkScreenSize();
  //   return () => {

  //     window.removeEventListener('resize', checkScreenSize);
  //   };

  // }, []);

  return (
    <div className="flex flex-col overflow-hidden border border-slate-500 lg:mx-2 lg:flex lg:content-center lg:justify-center lg:border-0">
      <div className="flex w-full justify-between pr-5 lg:items-center lg:justify-center lg:p-0">
        <Link
          onClick={() => setmenuOpen(!menuOpen)}
          className="py-2 pl-7 lg:flex lg:p-0 "
          to={url}
        >
          {langContent[content]}
        </Link>

        {subitems.length > 0 && (
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="h-4 lg:hidden"
            src={isOpen ? "/lineUp.svg" : "/lineDown.svg"}
            alt="Sidebar icon"
          />
        )}
      </div>

      {isOpen && (
        <div className="flex animate-slideInText flex-col lg:hidden">
          {subitems.map((child) => (
            <MenuSubitem
              menuOpen={menuOpen}
              setmenuOpen={setmenuOpen}
              content={langContent[child.content]}
              url={child.url}
              key={child.url}
            />
          ))}
        </div>
      )}

      <div className="hidden lg:ml-1 lg:flex lg:w-4/5 lg:content-between">
        {subitems.map((child) => (
          <MenuSubitemLargeScreen url={child.url} key={child.url} />
        ))}
      </div>
    </div>
  );
}

function Menu({ langContent, menuOpen, setmenuOpen }) {
  const location = useLocation();
  const index = location.pathname.indexOf("/", 1);
  const currentLocation = location.pathname.substring(index + 1);

  return (
    <div
      className={`${
        menuOpen ? "animate-slideInText" : "animate-slideOutText"
      } absolute right-0 top-24 h-fit w-full text-2xl font-extrabold backdrop-blur-sm lg:right-20 lg:top-6 lg:ml-auto lg:mr-4 lg:flex lg:h-fit lg:w-fit lg:gap-y-0.5 lg:pt-0 lg:text-base lg:font-normal lg:backdrop-blur-none `}
    >
      {MenuItemsList.map((item) => (
        <MenuItem
          menuOpen={menuOpen}
          setmenuOpen={setmenuOpen}
          content={item.content}
          url={item.url}
          subitems={item.subitems}
          langContent={langContent}
          key={item.url}
        />
      ))}
      <div className="mt-10 flex w-full justify-around lg:hidden">
        <Link
          onClick={() => setmenuOpen(!menuOpen)}
          className="my-2"
          to={`/en/${currentLocation}`}
        >
          ENG
        </Link>
        <Link
          onClick={() => setmenuOpen(!menuOpen)}
          className="my-2"
          to={`/ru/${currentLocation}`}
        >
          RUS
        </Link>
        <Link
          onClick={() => setmenuOpen(!menuOpen)}
          className="my-2"
          to={`/am/${currentLocation}`}
        >
          ARM
        </Link>
      </div>
    </div>
  );
}







export function Layout() {
  const { lang } = useParams();
  const menu = Content[lang].menu;

  const location = useLocation();
  const index = location.pathname.indexOf("/", 1);
  const currentLocation = location.pathname.substring(index + 1);

  const [menuOpen, setmenuOpen] = useState(false);
  const [x, setmenuX] = useState(false);

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   return windowDimensions;
  // }

  // const { width } = useWindowDimensions();
  // console.log( width);
  // if(width >= 1024 && x == false){
  //   setmenuOpen(true);
  //   setmenuX(true)
  // }else if(width < 1024 && x == true){
  //       setmenuOpen(false);
  //       setmenuX(false);
  // }

  // console.log("menuOpen - " + menuOpen + ', x - ' + x);

  return (
    <div
      id="layout-container"
      className="layout-container flex h-fit w-full flex-col overflow-scroll text-white lg:overflow-hidden"
    >
      <div id="upper-bar" className="flex w-full">
        <div
          id="upper-horizontal-bar"
          className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 sm:h-20 sm:w-full"
        >
          <div
            id="Logo"
            className="Logo flex h-5/6 items-center justify-center"
          >
            <img
              className="ml-4 h-4/6"
              src="/SeriousLogo.webp"
              alt="Brand logo"
            />
          </div>

          {menuOpen && (
            <Menu
              menuOpen={menuOpen}
              setmenuOpen={setmenuOpen}
              langContent={menu}
            />
          )}
        </div>

        <div
          onClick={() => setmenuOpen(!menuOpen)}
          className="menu-icon-container flex h-20 w-20 items-center justify-center border border-slate-500 bg-neutral-700 bg-opacity-80 sm:h-20 sm:w-20 lg:bg-transparent"
        >
          <img
            className="h-6 lg:hidden"
            src="/sidebarLogo.svg"
            alt="Sidebar icon"
          />
        </div>
      </div>

        {/* <div className="lower-bar flex h-fit  w-full">
          <div className="outlet-container box-content h-screen w-full border border-slate-500 bg-slate-950 bg-opacity-50">
            <Outlet />
          </div>

          <div className="lower-vertical-bar hidden h-full w-20 flex-col items-center border-0 bg-transparent bg-opacity-50 sm:border-slate-500 sm:bg-slate-950 lg:flex">
            <Link className="my-2 mt-10" to={`/en/${currentLocation}`}>
              Eng
            </Link>
            <Link className="my-2" to={`/ru/${currentLocation}`}>
              Rus
            </Link>
            <Link className="my-2" to={`/am/${currentLocation}`}>
              Arm
            </Link>
          </div>
        </div> */}
    </div>
  );
}