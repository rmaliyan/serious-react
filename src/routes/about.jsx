import { useParams } from "react-router-dom";
import Content from "../content.json";

export function About() {
  let { lang } = useParams();
  const about = Content[lang].about;

  return (
    <div className="animate-slideInContent flex flex-col p-10">
      <div className="text-3xl">{about.title}</div>
      <div className="mt-5">{about.paragraph}</div>
    </div>
  );
}
