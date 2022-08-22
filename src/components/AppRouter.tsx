import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ListContact from "../pages/ListContact";
import Login from "../pages/Login";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="contact" element={<ListContact />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
