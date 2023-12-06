import { useParams } from "react-router-dom";
import Content from "../content.json";

export function Delivery() {
  let { lang } = useParams();
  const delivery = Content[lang].delivery;

  return (
    <div className="animate-slideInContent flex flex-col items-center h-full mb-10 p-10 lg:p-20">
      <div className="text-2xl lg:text-7xl text-cyan-400 font-extrabold">{delivery.title0}</div>

      <div className="flex flex-col lg:flex-row mt-5 lg:mt-10">
        <div className="flex flex-col items-center p-5">
          <div className="font-bold text-2xl lg:text-4xl">{delivery.title1}</div>
          <div className="mt-2 lg:mt-5 text-xl font-bold">{delivery.paragraph1}</div>
        </div>
        <div className="flex flex-col items-center p-5">
          <div className="font-bold text-2xl lg:text-4xl">{delivery.title2}</div>
          <div className="mt-2 lg:mt-5 text-xl font-bold">{delivery.paragraph2}</div>
        </div>
        <div className="flex flex-col items-center p-5">
          <div className="font-bold text-2xl lg:text-4xl">{delivery.title3}</div>
          <div className="mt-2 lg:mt-5 text-xl font-bold">{delivery.paragraph3}</div>
        </div>
        <div className="flex flex-col items-center p-5">
          <div className="font-bold text-2xl lg:text-4xl">{delivery.title4}</div>
          <div className="mt-2 lg:mt-5 text-xl font-bold">{delivery.paragraph4}</div>
        </div>
      </div>
    </div>
  );
}
