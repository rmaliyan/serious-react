import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import Content from "../content.json";

export function Layout() {
  const { lang } = useParams();
  const menu = Content[lang].menu;

  const location = useLocation();
  const index = location.pathname.indexOf("/", 1);
  const currentLocation = location.pathname.substring(index + 1);

  return (
    <div id="layout-container" className="flex h-screen w-screen flex-col overflow-scroll text-white lg:overflow-hidden">
      <div id="upper-bar" className="flex w-full">
        <div id="upper-horizontal-bar" className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 sm:h-20 sm:w-full xl:h-32 xl:w-full">
          <div id="Logo" className="Logo flex h-5/6 items-center justify-center ">
            <img className="ml-4 h-4/6" src="/public/SeriousLogo.webp" alt="Brand logo"
            />
          </div>
          <div className="Text ml-auto mr-4 hidden gap-y-0.5 lg:flex">
            <Link className="mx-2" to="home">
              {menu.home}
            </Link>

            <div className="flex flex-col">
              <div>
                <Link className="mx-1" to="about">
                  {menu.about}
                </Link>
              </div>

              <div className="flex gap-1">
                <Link className="grow" to="about">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="delivery">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="ratings">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
              </div>
            </div>

            <Link className="mx-2" to="home">
              {menu.technologies}
            </Link>

            <div className="flex flex-col">
              <div>
                <Link className="mx-1" to="webdesign">
                  {menu.services}
                </Link>
              </div>

              <div className="flex gap-1">
                <Link className="grow" to="webdesign">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="mobile">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="software">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="business">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="ceo">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
              </div>
            </div>

            <Link className="mx-2" to="clients">
              {menu.clients}
            </Link>

            <div className="flex flex-col">
              <div>
                <Link className="mx-1" to="fullstack">
                  {menu.courses}
                </Link>
              </div>

              <div className="flex gap-1">
                <Link className="grow" to="fullstack">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
                <Link className="grow" to="reactjs">
                  <div className="h-1.5 rounded bg-white"></div>
                </Link>
              </div>
            </div>

            <Link className="mx-2" to="careers">
              {menu.careers}
            </Link>
            <Link className="mx-2" to="contact">
              {menu.contact}
            </Link>
          </div>
        </div>

        <div className="menu-icon-container flex h-20 w-20   items-center justify-center     border border-slate-500     bg-neutral-700 bg-opacity-80     sm:h-20 sm:w-20     xl:h-32 xl:w-32">
          <img
            className="h-6"
            src="/public/sidebarLogo.svg"
            alt="Sidebar icon"
          />
        </div>
      </div>

      <div className="lower-bar   flex     h-full w-full">
        <div className="outlet-container     box-content h-full      w-full border   border-slate-500   bg-slate-950 bg-opacity-50">
          <Outlet />
        </div>

        <div className="lower-vertical-bar  hidden h-full    w-20 flex-col     items-center border      border-slate-500 bg-slate-950       bg-opacity-50 sm:h-full     sm:w-20 lg:flex     xl:h-full xl:w-32">
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
      </div>
    </div>
  );
}
