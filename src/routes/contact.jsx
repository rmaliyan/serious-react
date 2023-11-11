import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Contact() {
  let { lang } = useParams();
  const contact = Content[lang].contact;

  return (
    <div className="animate-slideInContent flex flex-col p-10">
      <div className="text-3xl">{contact.title}</div>
    </div>
  );
}
