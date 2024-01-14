import { Outlet, useParams } from "react-router-dom";
import Content from "../content.json";

export function About() {
  let { lang } = useParams();
  const about = Content[lang].about;

  return (    
    <div className="animate-slideInContent flex flex-col items-start w-10/12 p-10 lg:p-32">
      <div className="text-cyan-400 font-extrabold text-2xl lg:text-7xl">{about.title}</div>
      <div className="mt-5 font-bold text-xl lg:text-3xl">{about.paragraph}</div>     
    </div>
  );
}
