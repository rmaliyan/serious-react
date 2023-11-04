import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";
import { Layout } from "./routes/layout";
import { Home } from "./routes/home";
import { About } from "./routes/about";
import { Delivery } from "./routes/delivery";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={ <Navigate to="/en" replace={true} /> } errorElement={<ErrorPage />}>    
               
        </Route>

        <Route path="/:lang"  element={<Layout />}  errorElement={<ErrorPage />}>
          <Route path="home" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="delivery" element={<Delivery />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
