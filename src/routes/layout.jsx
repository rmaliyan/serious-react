import {
  Outlet,
  NavLink,
  useParams,
  useLocation,
} from "react-router-dom";
import Content from "../content.json";
import MenuItemsList from "../MenuItemsList.json";
import { useEffect, useState } from "react";

function MenuSubitem({ content, url, menuOpen, setmenuOpen }) {
  const location = useLocation();
  const index = location.pathname.indexOf("/", 1);
  const currentLocation = location.pathname.substring(index + 1);

  return (
    <NavLink
      onClick={() => setmenuOpen(!menuOpen)}
      className={({ isActive }) =>
        `w-full lg:px-1 ${isActive ? "text-cyan-500" : ""}`
      }
      to={url}
    >
      {({ isActive }) => (
        <>
          <div
            className={`hidden lg:block lg:h-1 lg:w-full lg:rounded-full ${
              currentLocation == url ? "lg:bg-cyan-500" : "lg:bg-white"
            }`}
          ></div>
          <div
            className={`lg:hidden ${
              currentLocation == url ? "text-cyan-500" : "text-white"
            }`}
          >
            {content}
          </div>
        </>
      )}
    </NavLink>
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

  return (
    <div className="flex flex-col overflow-hidden border border-slate-500 lg:flex lg:items-center lg:justify-start lg:border-0">
      <div className="flex w-full items-center justify-between pr-5 lg:mx-2 lg:items-start lg:justify-center lg:p-0 lg:text-2xl lg:font-extrabold">
        <NavLink
          onClick={() => setmenuOpen(!menuOpen)}
          className={({ isActive }) =>
            `py-2 pl-7 lg:flex lg:p-0 ${isActive ? "text-cyan-500" : ""}`
          }
          to={url}
        >
          {langContent[content]}
        </NavLink>

        {subitems.length > 0 && (
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="h-4 lg:hidden"
            src={isOpen ? `${import.meta.env.BASE_URL}lineUp.svg` : `${import.meta.env.BASE_URL}lineDown.svg`}
            alt="Sidebar icon"
          />
        )}
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full animate-slideInText flex-col pl-16 lg:flex lg:flex-row lg:pl-0`}
      >
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
        menuOpen
          ? "animate-slideInText"
          : "h-0 translate-x-full animate-slideOutText"
      } absolute right-0 top-24 h-full w-full text-2xl font-extrabold backdrop-blur-sm 
      lg:relative lg:right-0  lg:top-0 lg:ml-auto lg:mr-4 lg:flex lg:h-fit lg:w-fit lg:translate-x-0 lg:animate-none lg:gap-y-0.5 lg:text-base lg:font-normal lg:backdrop-blur-none`}
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

      <div className="flex h-full w-full justify-around border border-slate-500 pt-10 lg:hidden">
        <NavLink
          onClick={() => setmenuOpen(!menuOpen)}
          className={({ isActive }) =>
            `my-2 ${isActive ? "text-cyan-500" : ""}`
          }
          to={`/en/${currentLocation}`}
        >
          ENG
        </NavLink>
        <NavLink
          onClick={() => setmenuOpen(!menuOpen)}
          className={({ isActive }) =>
            `my-2 ${isActive ? "text-cyan-500" : ""}`
          }
          to={`/ru/${currentLocation}`}
        >
          RUS
        </NavLink>
        <NavLink
          onClick={() => setmenuOpen(!menuOpen)}
          className={({ isActive }) =>
            `my-2 ${isActive ? "text-cyan-500" : ""}`
          }
          to={`/am/${currentLocation}`}
        >
          ARM
        </NavLink>
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

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1024) {
      setmenuOpen(true);
    } else if (width < 1024) {
      setmenuOpen(false);
    }
  }, [width]);

  return (
    <div
      id="layout-container"
      className="layout-container flex h-screen w-full flex-col overflow-x-hidden overflow-y-scroll text-white lg:overflow-hidden"
    >
      <div id="upper-bar" className="flex w-full">
        <div
          id="upper-horizontal-bar"
          className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 lg:h-28"
        >
          <div
            id="Logo"
            className="Logo ml-1 flex h-3/5 items-center justify-center lg:ml-28 lg:h-5/6"
          >
            <img
              className="ml-4 h-4/6"
              src={`${import.meta.env.BASE_URL}SeriousLogo.webp`}
              alt="Brand logo"
            />
          </div>

          <Menu
            menuOpen={menuOpen}
            setmenuOpen={setmenuOpen}
            langContent={menu}
          />
        </div>

        <div
          onClick={() => setmenuOpen(!menuOpen)}
          className="menu-icon-container flex h-20 w-20 items-center justify-center border border-slate-500 bg-neutral-700 bg-opacity-80 lg:h-28 lg:w-28 lg:bg-transparent"
        >
          <img
            className="h-6 lg:hidden"
            src={`${import.meta.env.BASE_URL}sidebarLogo.svg`}
            alt="Sidebar icon"
          />
        </div>
      </div>

      <div className="lower-bar flex h-full w-full">
        <div className="outlet-container box-content h-full w-full border border-slate-500 bg-slate-950 bg-opacity-50">
          <Outlet />
        </div>

        <div className="lower-vertical-bar hidden h-full w-28 flex-col items-center border-0 bg-transparent bg-opacity-50 lg:flex lg:place-self-stretch lg:border lg:border-slate-500 lg:bg-slate-950">
          <NavLink
            className={({ isActive }) =>
              `my-2 mt-10 text-xl font-bold ${isActive ? "text-cyan-500" : ""}`
            }
            to={`/en/${currentLocation}`}
          >
            ENG
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `my-2 mt-8 text-xl font-bold ${isActive ? "text-cyan-500" : ""}`
            }
            to={`/ru/${currentLocation}`}
          >
            RУС
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `my-2 mt-8 text-xl font-bold ${isActive ? "text-cyan-500" : ""}`
            }
            to={`/am/${currentLocation}`}
          >
            ՀԱՅ
          </NavLink>
        </div>
      </div>
    </div>
  );
}
