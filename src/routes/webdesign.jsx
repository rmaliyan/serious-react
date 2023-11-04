import { useParams } from "react-router-dom";
import Content from "../content.json"

export function Webdesign() {
  let { lang } = useParams();
  const webdesign = Content[lang].webdesign;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{webdesign.title1}</div>     
      <div className="text-3xl">{webdesign.title2}</div>   
      <div className="mt-5">{webdesign.paragraph}</div>
    </div>
  );
}
