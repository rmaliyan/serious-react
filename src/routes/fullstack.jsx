import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Fullstack() {
  let { lang } = useParams();
  const fullstack = Content[lang].fullstack;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{fullstack.title}</div>
      <div className="mt-5">
        <div className="text-xl">{fullstack.emphasis}</div>
        <div className="">{fullstack.paragraph}</div>
      </div>
    </div>
  );
}
