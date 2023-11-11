import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import Content from "../content.json";
import MenuItemsList from "../MenuItemsList.json";
import {useState} from "react";

function MenuSubitem({ content, url }) {
  return (
    <Link className="ml-16 grow" to={url}>
      {content}
    </Link>
  );
}

function MenuItem({ content, url, subitems, langContent }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden border border-slate-500 lg:border-0">
      <div className="flex w-full items-center justify-between pr-5">
        <Link className="py-2 pl-7 lg:p-0" to={url}>
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
        <div className="flex animate-slideInText flex-col">
          {subitems.map((child) => (
            <MenuSubitem
              content={langContent[child.content]}
              url={child.url}
              key={child.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Menu({ langContent }) {   
  const location = useLocation();
  const index = location.pathname.indexOf("/", 1);
  const currentLocation = location.pathname.substring(index + 1);

  return (
    <div className="absolute right-0 top-24 h-fit w-full text-2xl font-extrabold backdrop-blur-sm lg:ml-auto lg:mr-4 lg:flex lg:h-fit lg:w-fit lg:gap-y-0.5 lg:pt-0 lg:text-base lg:font-normal lg:backdrop-blur-none lg:right-20 lg:top-6 ">
      {MenuItemsList.map((item) => (
        <MenuItem
          content={item.content}
          url={item.url}
          subitems={item.subitems}
          langContent={langContent}
          key={item.url}
        />
      ))}
      <div className="mt-10 flex w-full justify-around lg:hidden">
        <Link className="my-2" to={`/en/${currentLocation}`}>
          ENG
        </Link>
        <Link className="my-2" to={`/ru/${currentLocation}`}>
          RUS
        </Link>
        <Link className="my-2" to={`/am/${currentLocation}`}>
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

  return (
    <div
      id="layout-container"
      className="layout-container flex h-fit w-screen flex-col overflow-scroll text-white lg:overflow-hidden"
    >
      <div id="upper-bar" className="flex w-full">
        <div
          id="upper-horizontal-bar"
          className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 sm:h-20 sm:w-full"
        >
          <div
            id="Logo"
            className="Logo flex h-5/6 items-center justify-center "
          >
            <img
              className="ml-4 h-4/6"
              src="/SeriousLogo.webp"
              alt="Brand logo"
            />
            
          </div>

          <Menu langContent={menu} />
        </div>

        <div className="menu-icon-container flex h-20 w-20 items-center justify-center border border-slate-500 bg-neutral-700 bg-opacity-80 sm:h-20 sm:w-20 lg:bg-transparent">
          <img
            className="h-6 lg:hidden"
            src="/sidebarLogo.svg"
            alt="Sidebar icon"
          />
        </div>
      </div>

      <div className="lower-bar flex h-fit  w-full">
        <div className="outlet-container box-content h-screen w-full border border-slate-500 bg-slate-950 bg-opacity-50">
          <Outlet />
        </div>

        <div className="lower-vertical-bar hidden h-full flex-col items-center border-0 bg-transparent bg-opacity-50 w-20 sm:border-slate-500 sm:bg-slate-950 lg:flex">
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

/////////////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <div
//       id="layout-container"
//       className="layout-container flex h-fit w-screen flex-col overflow-scroll text-white lg:overflow-hidden"
//     >
//       <div id="upper-bar" className="flex w-full">
//         <div
//           id="upper-horizontal-bar"
//           className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 sm:h-20 sm:w-full"
//         >
//           <div
//             id="Logo"
//             className="Logo flex h-5/6 items-center justify-center "
//           >
//             <img
//               className="ml-4 h-4/6"
//               src="/public/SeriousLogo.webp"
//               alt="Brand logo"
//             />
//           </div>

//           <div className="menuText absolute right-0 top-24 h-fit w-full text-2xl font-extrabold backdrop-blur-sm lg:right-20 lg:top-6 lg:ml-auto lg:mr-4 lg:flex lg:h-fit lg:w-fit lg:gap-y-0.5 lg:pt-0 lg:text-base lg:font-normal lg:backdrop-blur-none">
//             <div classname="w-full h-full flex flex-col">
//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="home">
//                   {menu.home}
//                 </Link>
//               </div>

//               <div className="border border-slate-500 ">
//                 <Link className="py-2 pl-7" to="about">
//                   {menu.about}
//                 </Link>

//                 <div className="flex flex-col gap-1 lg:flex-row">
//                   <Link className="ml-16 grow" to="about">
//                     {menu.aboutUs}
//                   </Link>

//                   <Link className="ml-16 grow" to="delivery">
//                     {menu.delivery}
//                   </Link>

//                   <Link className="ml-16 grow" to="ratings">
//                     {menu.ratings}
//                   </Link>
//                 </div>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="technologies">
//                   {menu.technologies}
//                 </Link>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="webdesign">
//                   {menu.services}
//                 </Link>

//                 <div className="flex flex-col gap-1">
//                   <Link className="ml-16 grow" to="webdesign">
//                     {menu.web}
//                   </Link>

//                   <Link className="ml-16 grow" to="mobile">
//                     {menu.mobile}
//                   </Link>

//                   <Link className="ml-16 grow" to="software">
//                     {menu.software}
//                   </Link>

//                   <Link className="ml-16 grow" to="business">
//                     {menu.business}
//                   </Link>

//                   <Link className="ml-16 grow" to="ceo">
//                     {menu.ceo}
//                   </Link>
//                 </div>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="fullstack">
//                   {menu.courses}
//                 </Link>

//                 <div className="flex flex-col gap-1">
//                   <Link className="ml-16 grow" to="fullstack">
//                     {menu.fullstack}
//                   </Link>

//                   <Link className="ml-16 grow" to="reactjs">
//                     {menu.reactjs}
//                   </Link>
//                 </div>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="clients">
//                   {menu.clients}
//                 </Link>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="careers">
//                   {menu.careers}
//                 </Link>
//               </div>

//               <div className="border border-slate-500">
//                 <Link className="py-2 pl-7" to="contact">
//                   {menu.contact}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="menu-icon-container flex h-20 w-20 items-center justify-center border border-slate-500 bg-neutral-700 bg-opacity-80 sm:h-20 sm:w-20 lg:bg-transparent">
//           <img
//             className="h-6 lg:hidden"
//             src="/public/sidebarLogo.svg"
//             alt="Sidebar icon"
//           />
//         </div>
//       </div>

//       <div className="lower-bar flex h-fit  w-full">
//         <div className="outlet-container box-content  h-screen  w-full border border-slate-500 bg-slate-950 bg-opacity-50">
//           <Outlet />
//         </div>

//         <div className="lower-vertical-bar hidden h-full flex-col items-center border-0 bg-transparent bg-opacity-50 sm:h-full sm:w-20 sm:border-slate-500 sm:bg-slate-950 lg:flex">
//           <Link className="my-2 mt-10" to={`/en/${currentLocation}`}>
//             Eng
//           </Link>
//           <Link className="my-2" to={`/ru/${currentLocation}`}>
//             Rus
//           </Link>
//           <Link className="my-2" to={`/am/${currentLocation}`}>
//             Arm
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// return (
//   <div id="layout-container" className="layout-container flex h-screen w-screen flex-col overflow-scroll text-white lg:overflow-hidden">
//     <div id="upper-bar" className="flex w-full">
//       <div id="upper-horizontal-bar" className="flex h-20 w-full items-center border border-slate-500 bg-slate-950 bg-opacity-50 sm:h-20 sm:w-full xl:h-32 xl:w-full">
//         <div id="Logo" className="Logo flex h-5/6 items-center justify-center ">
//           <img className="ml-4 h-4/6" src="/public/SeriousLogo.webp" alt="Brand logo"
//           />
//         </div>
//         <div className="Text ml-auto mr-4 hidden gap-y-0.5 lg:flex">
//           <Link className="mx-2" to="home">
//             {menu.home}
//           </Link>

//           <div className="flex flex-col">
//             <div>
//               <Link className="mx-1" to="about">
//                 {menu.about}
//               </Link>
//             </div>

//             <div className="flex gap-1">
//               <Link className="grow" to="about">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="delivery">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="ratings">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//             </div>
//           </div>

//           <Link className="mx-2" to="home">
//             {menu.technologies}
//           </Link>

//           <div className="flex flex-col">
//             <div>
//               <Link className="mx-1" to="webdesign">
//                 {menu.services}
//               </Link>
//             </div>

//             <div className="flex gap-1">
//               <Link className="grow" to="webdesign">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="mobile">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="software">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="business">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="ceo">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//             </div>
//           </div>

//           <Link className="mx-2" to="clients">
//             {menu.clients}
//           </Link>

//           <div className="flex flex-col">
//             <div>
//               <Link className="mx-1" to="fullstack">
//                 {menu.courses}
//               </Link>
//             </div>

//             <div className="flex gap-1">
//               <Link className="grow" to="fullstack">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//               <Link className="grow" to="reactjs">
//                 <div className="h-1.5 rounded bg-white"></div>
//               </Link>
//             </div>
//           </div>

//           <Link className="mx-2" to="careers">
//             {menu.careers}
//           </Link>
//           <Link className="mx-2" to="contact">
//             {menu.contact}
//           </Link>
//         </div>
//       </div>

//       <div className="menu-icon-container flex h-20 w-20   items-center justify-center     border border-slate-500     bg-neutral-700 bg-opacity-80     sm:h-20 sm:w-20     xl:h-32 xl:w-32">
//         <img
//           className="h-6"
//           src="/public/sidebarLogo.svg"
//           alt="Sidebar icon"
//         />
//       </div>
//     </div>

//     <div className="lower-bar   flex     h-full w-full">
//       <div className="outlet-container     box-content h-full      w-full border   border-slate-500   bg-slate-950 bg-opacity-50">
//         <Outlet />
//       </div>

//       <div className="lower-vertical-bar  hidden h-full    w-20 flex-col     items-center border      border-slate-500 bg-slate-950       bg-opacity-50 sm:h-full     sm:w-20 lg:flex     xl:h-full xl:w-32">
//         <Link className="my-2 mt-10" to={`/en/${currentLocation}`}>
//           Eng
//         </Link>
//         <Link className="my-2" to={`/ru/${currentLocation}`}>
//           Rus
//         </Link>
//         <Link className="my-2" to={`/am/${currentLocation}`}>
//           Arm
//         </Link>
//       </div>
//     </div>
//   </div>
// );
