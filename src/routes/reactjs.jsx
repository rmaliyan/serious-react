import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Reactjs() {
  let { lang } = useParams();
  const reactjs = Content[lang].reactjs;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-32 ">
      <div className="text-3xl lg:text-7xl text-cyan-400 font-extrabold">{reactjs.title}</div>
      <div className="mt-5 text-2xl font-bold">
        <div className="text-xl lg:text-2xl text-cyan-400">{reactjs.emphasis}</div>
        <div className="">{reactjs.paragraph}</div>
        <div className="mt-5 font-bold">{reactjs.emphasis2}</div>
      </div>
    </div>
  );
}
