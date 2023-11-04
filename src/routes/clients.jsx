import { useParams } from "react-router-dom";
import Content from "../content.json"

export function Clients() {
  let { lang } = useParams();
  const clients = Content[lang].clients;

  return (
    <div className="flex flex-col p-10">
      <div className="text-3xl">{clients.title1}</div>     
      <div className="text-3xl">{clients.title2}</div>   
      <div className="mt-5">{clients.paragraph}</div>
    </div>
  );
}
