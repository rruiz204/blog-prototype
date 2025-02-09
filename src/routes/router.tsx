import { JSX } from "react";
import { Home } from "@pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};