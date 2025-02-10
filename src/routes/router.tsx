import { JSX } from "react";
import { Home } from "@pages/Home";
import { Articles } from "@pages/Articles";
import { Categories } from "@pages/Caterogies";
import { BrowserRouter, Routes, Route } from "react-router";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};