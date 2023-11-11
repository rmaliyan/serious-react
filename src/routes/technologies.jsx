import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Technologies() {
  let { lang } = useParams();
  const technologies = Content[lang].technologies;

  return (
    <div className="animate-slideInContent flex flex-col p-10">
      <div className="text-3xl">{technologies.title}</div>
    </div>
  );
}
