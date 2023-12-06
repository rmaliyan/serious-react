import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Webdesign() {
  let { lang } = useParams();
  const webdesign = Content[lang].webdesign;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-4xl lg:text-8xl font-extrabold font-serif">{webdesign.title1}</div>
      <div className="outlineTitle text-3xl lg:text-7xl font-sans font-black text-black">{webdesign.title2}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold">{webdesign.paragraph}</div>
    </div>
  );
}
