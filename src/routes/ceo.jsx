import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Ceo() {
  let { lang } = useParams();
  const ceo = Content[lang].ceo;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-4xl lg:text-8xl font-extrabold font-serif">{ceo.title}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold">{ceo.paragraph}</div>
    </div>
  );
}
