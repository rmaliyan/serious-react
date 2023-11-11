import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Home() {
  let { lang } = useParams();
  const home = Content[lang].home;

  return (
    <div className="animate-slideInContent flex flex-col p-10">
      <div className="text-3xl">{home.title}</div>
      <div className="mt-5">{home.paragraph}</div>
    </div>
  );
}
