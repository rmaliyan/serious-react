import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Contact() {
  let { lang } = useParams();
  const contact = Content[lang].contact;

  return (
    <div className="animate-slideInContent flex flex-col p-10 lg:p-20">
      <div className="text-2xl lg:text-7xl text-cyan-400 font-extrabold">{contact.title}</div>
    </div>
  );
}
