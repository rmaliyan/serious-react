import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Business() {
  let { lang } = useParams();
  const business = Content[lang].business;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{business.title1}</div>
      <div className="text-3xl">{business.title2}</div>
      <div className="mt-5">{business.paragraph}</div>
    </div>
  );
}
