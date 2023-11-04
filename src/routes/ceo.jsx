import { useParams } from "react-router-dom";
import Content from "../content.json"

export function Ceo() {
  let { lang } = useParams();
  const ceo = Content[lang].ceo;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{ceo.title}</div>    
      <div className="mt-5">{ceo.paragraph}</div>
    </div>
  );
}
