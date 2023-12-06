import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Clients() {
  let { lang } = useParams();
  const clients = Content[lang].clients;

  return (
    <div className="animate-slideInContent flex flex-col items-center justify-center p-20">
      <div className="text-base lg:text-4xl text-center text-cyan-400 font-extrabold">{clients.title1}</div>
      <div className="text-base lg:text-4xl text-center text-cyan-400 font-extrabold">{clients.title2}</div>
    </div>
  );
}
