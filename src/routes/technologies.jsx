import { useParams } from "react-router-dom";
import Content from "../content.json";
import PhotosJS from "../assets/technologiesPhotos/iconsjavascript.svg"
import PhotosReact from "../assets/technologiesPhotos/iconsreact.svg"
import PhotosVue from "../assets/technologiesPhotos/iconsvuejs.svg"
import PhotosNode from "../assets/technologiesPhotos/iconsnodejs.svg"
import PhotosAngular from "../assets/technologiesPhotos/iconsangularjs.svg"
import PhotosReact_Native from "../assets/technologiesPhotos/iconsreact_native.svg"
import PhotosPhp from "../assets/technologiesPhotos/iconsphp.svg"
import PhotosLaravel from "../assets/technologiesPhotos/iconslaravel.svg"
import PhotosPython from "../assets/technologiesPhotos/iconspython.svg"
import PhotosDjango from "../assets/technologiesPhotos/iconsdjango.svg"
import PhotosMysql from "../assets/technologiesPhotos/iconsmysql.svg"
import PhotosPostgreesql from "../assets/technologiesPhotos/iconspostgresql.svg"
import PhotosMongodb from "../assets/technologiesPhotos/iconsmongo.svg"
import PhotosAmazon from "../assets/technologiesPhotos/iconsamazon.svg"
import PhotosGoogle from "../assets/technologiesPhotos/iconsgoogle.svg"
import PhotosAzure from "../assets/technologiesPhotos/iconsazure.svg"
import PhotosJava from "../assets/technologiesPhotos/iconsjava.svg"
import PhotosKotlin from "../assets/technologiesPhotos/iconskotlin.svg"
export function Technologies() {
  let { lang } = useParams();
  const technologies = Content[lang].technologies;
  // inline-grid gap-6 grid-cols-9 m-5
  return (
    <div className="animate-slideInContent flex flex-col items-center p-10 lg:p-20">
      <div className="text-2xl lg:text-5xl text-cyan-400 font-extrabold ">{technologies.title}</div>
      <div className="">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-7 items-center">
          <div> <img src={PhotosJS} alt="js" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosReact} alt="react" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosVue} alt="vue" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosNode} alt="node" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosAngular} alt="angular" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosReact_Native} alt="react_native" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosPhp} alt="php" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosLaravel} alt="laravel" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosPython} alt="python" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosDjango} alt="django" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosMysql} alt="mysql" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosPostgreesql} alt="postgreesql" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosMongodb} alt="mongodb" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosAmazon} alt="amazon" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosGoogle} alt="google" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosAzure} alt="azure" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosJava} alt="java" /> <span>JavaScripte</span></div>
          <div> <img src={PhotosKotlin} alt="kotlin" /> <span>JavaScripte</span></div>
        </div>
      </div>
    </div>
  );
}
