import { useParams } from "react-router-dom";
import Content from "../content.json"

export function Software() {
  let { lang } = useParams();
  const software = Content[lang].software;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{software.title1}</div>     
      <div className="text-3xl">{software.title2}</div>   
      <div className="mt-5">{software.paragraph}</div>
    </div>
  );
}
