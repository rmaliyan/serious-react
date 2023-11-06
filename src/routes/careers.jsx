import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Careers() {
  let { lang } = useParams();
  const careers = Content[lang].careers;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{careers.title}</div>
      <div className="mt-5">{careers.paragraph}</div>
    </div>
  );
}
