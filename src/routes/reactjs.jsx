import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Reactjs() {
  let { lang } = useParams();
  const reactjs = Content[lang].reactjs;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{reactjs.title}</div>
      <div className="mt-5">
        <div className="text-xl">{reactjs.emphasis}</div>
        <div className="">{reactjs.paragraph}</div>
        <div className="mt-5">{reactjs.emphasis2}</div>
      </div>
    </div>
  );
}
