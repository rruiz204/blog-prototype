import { JSX } from "react";
import { Home } from "@pages/Home";
import { NotFound } from "@pages/NotFound";
import { Articles } from "@pages/Articles";
import { Categories } from "@pages/Caterogies";
import { BrowserRouter, Routes, Route } from "react-router";
import { LanguageVices } from "@articles/LanguageVices";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/categories" element={<Categories />} />

        <Route path="/articles/language-vices" element={<LanguageVices />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};