import { Outlet, Link, useParams } from "react-router-dom";
import Content from "../content.json";

export function Layout() {
  let { lang } = useParams();
  const menu = Content[lang].menu;

  return (
    <div className="layout-container flex flex-col    h-screen w-screen text-white">
      <div className="upper-bar     flex     w-full">
        <div className="upper-horizontal-bar    flex items-center   border border-slate-500     bg-slate-950 bg-opacity-50     xl:h-32 xl:w-full sm:h-20 sm:w-full    h-20 w-full">
          <div className="Logo h-5/6 flex items-center justify-center ">
            <img
              className="ml-4 h-4/6"
              src="/public/SeriousLogo.webp"
              alt="Brand logo"
            />
          </div>
          <div className="Text mr-4 gap-y-0.5 ml-auto hidden lg:flex">
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
              Technologies
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
              Clients
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
              Careers
            </Link>
            <Link className="mx-2" to="contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="menu-icon-container    border border-slate-500     bg-neutral-700 bg-opacity-80     xl:h-32 xl:w-32     sm:h-20 sm:w-20     h-20 w-20"></div>
      </div>

      <div className="lower-bar   flex     w-full h-full">
        <div className="outlet-container     border border-slate-500      bg-slate-950 bg-opacity-50     h-full w-full">
          <Outlet />
        </div>

        <div className="lower-vertical-bar  flex-col items-center    border border-slate-500     bg-slate-950 bg-opacity-50      hidden md:flex       xl:h-full xl:w-32     sm:h-full sm:w-20     h-full w-20">
          <Link className="mt-10 my-2" to="/en">
            Eng
          </Link>
          <Link className="my-2" to="/ru">
            Rus
          </Link>
          <Link className="my-2" to="/am">
            Arm
          </Link>
        </div>
      </div>
    </div>
  );
}
