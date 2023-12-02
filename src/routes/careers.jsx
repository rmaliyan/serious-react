import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Careers() {
  let { lang } = useParams();
  const careers = Content[lang].careers;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-2xl lg:text-7xl text-cyan-400 font-extrabold">{careers.title}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold">{careers.paragraph}</div>
    </div>
  );
}
