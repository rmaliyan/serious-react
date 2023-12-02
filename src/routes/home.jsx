import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Home() {
  let { lang } = useParams();
  const home = Content[lang].home;

  return (
    <div className="animate-slideInContent flex flex-col items-start w-10/12 p-10 lg:p-32">
      <div className="text-cyan-400 font-extrabold text-2xl lg:text-7xl">{home.title}</div>
      <div className="mt-5 font-bold text-xl lg:text-3xl">{home.paragraph}</div>
    </div>
  );
}
