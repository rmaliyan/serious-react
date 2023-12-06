import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Mobile() {
  let { lang } = useParams();
  const mobile = Content[lang].mobile;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-4xl lg:text-8xl font-extrabold font-serif">{mobile.title1}</div>
      <div className="outlineTitle text-3xl lg:text-7xl font-sans font-black text-black">{mobile.title2}</div>
      <div className="mt-5 text-xl lg:text-2xl  font-bold">{mobile.paragraph}</div>
    </div>
  );
}
