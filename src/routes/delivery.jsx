import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Delivery() {
  let { lang } = useParams();
  const delivery = Content[lang].delivery;

  return (
    <div className="animate-slideInContent flex flex-col p-10">
      <div className="text-3xl">{delivery.title0}</div>

      <div className="flex">
        <div className="flex flex-col p-5">
          <div className="text-xl">{delivery.title1}</div>
          <div className="mt-5">{delivery.paragraph1}</div>
        </div>
        <div className="flex flex-col p-5">
          <div className="text-xl">{delivery.title2}</div>
          <div className="mt-5">{delivery.paragraph2}</div>
        </div>
        <div className="flex flex-col p-5">
          <div className="text-xl">{delivery.title3}</div>
          <div className="mt-5">{delivery.paragraph3}</div>
        </div>
        <div className="flex flex-col p-5">
          <div className="text-xl">{delivery.title4}</div>
          <div className="mt-5">{delivery.paragraph4}</div>
        </div>
      </div>
    </div>
  );
}
