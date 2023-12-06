import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Business() {
  let { lang } = useParams();
  const business = Content[lang].business;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-4xl lg:text-8xl font-extrabold font-serif">{business.title1}</div>
      <div className="outlineTitle text-3xl lg:text-7xl font-sans font-black text-black">{business.title2}</div>
      <div className="mt-5 text-xl lg:text-2xl font-bold">{business.paragraph}</div>
    </div>
  );
}
