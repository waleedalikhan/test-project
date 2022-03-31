import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

const HomeRoutes = () => (
  <div className="">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default HomeRoutes;
