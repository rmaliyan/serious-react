import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Fullstack() {
  let { lang } = useParams();
  const fullstack = Content[lang].fullstack;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-32">
      <div className="text-3xl lg:text-7xl text-cyan-400 font-extrabold">{fullstack.title}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold ">
        <div className="text-cyan-400">{fullstack.emphasis}</div>
        <div className="">{fullstack.paragraph}</div>
      </div>
    </div>
  );
}
