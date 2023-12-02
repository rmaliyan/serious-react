import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Technologies() {
  let { lang } = useParams();
  const technologies = Content[lang].technologies;

  return (
    <div className="animate-slideInContent flex flex-col items-center p-10 lg:p-20">
      <div className="text-2xl lg:text-5xl text-cyan-400 font-extrabold">{technologies.title}</div>
    </div>
  );
}
