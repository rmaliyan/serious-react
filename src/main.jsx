import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { Layout } from "./routes/layout";
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Delivery } from "./routes/delivery";
import { Ratings } from "./routes/ratings";
import { Technologies } from "./routes/technologies";
import { Webdesign } from "./routes/webdesign";
import { Mobile } from "./routes/mobile";
import { Software } from "./routes/software";
import { Business } from "./routes/business";
import { Ceo } from "./routes/ceo";
import { Clients } from "./routes/clients";
import { Fullstack } from "./routes/fullstack";
import { Reactjs } from "./routes/reactjs";
import { Careers } from "./routes/careers";
import { Contact } from "./routes/contact";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/en/home" replace={true}/>}
          errorElement={<ErrorPage />}
        ></Route>

        <Route path="/:lang" element={<Layout />} errorElement={<ErrorPage />} >
          <Route path="home" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="ratings" element={<Ratings />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="webdesign" element={<Webdesign />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="software" element={<Software />} />
          <Route path="business" element={<Business />} />
          <Route path="ceo" element={<Ceo />} />
          <Route path="clients" element={<Clients />} />
          <Route path="fullstack" element={<Fullstack />} />
          <Route path="reactjs" element={<Reactjs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
