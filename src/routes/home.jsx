import { useParams } from "react-router-dom";
import Content from "../content.json"


export function Home() {
  let { lang } = useParams();
  const about = Content[lang].home;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{about.title}</div>
      <div>{about.paragraph}</div>
    </div>
  );
}
