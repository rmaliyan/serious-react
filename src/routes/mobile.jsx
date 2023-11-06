import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Mobile() {
  let { lang } = useParams();
  const mobile = Content[lang].mobile;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{mobile.title1}</div>
      <div className="text-3xl">{mobile.title2}</div>
      <div className="mt-5">{mobile.paragraph}</div>
    </div>
  );
}
