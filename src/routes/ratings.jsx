import { useParams } from "react-router-dom";
import Content from "../content.json"

export function Ratings() {
  let { lang } = useParams();
  const ratings = Content[lang].ratings;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{ratings.title}</div>      
    </div>
  );
}
