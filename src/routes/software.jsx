import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Software() {
  let { lang } = useParams();
  const software = Content[lang].software;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-4xl lg:text-8xl font-extrabold font-serif">{software.title1}</div>
      <div className="outlineTitle text-3xl lg:text-7xl font-sans font-black text-black">{software.title2}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold">{software.paragraph}</div>
    </div>
  );
}
