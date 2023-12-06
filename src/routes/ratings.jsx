import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Ratings() {
  let { lang } = useParams();
  const ratings = Content[lang].ratings;

  return (
    <div className="animate-slideInContent flex flex-col items-center p-10 lg:p-20">
      <div className="text-2xl lg:text-7xl text-cyan-400 font-extrabold">{ratings.title}</div>
    </div>
  );
}
