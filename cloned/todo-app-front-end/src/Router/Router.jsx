import React from "react";
import { Routes, Route, } from "react-router-dom";
import App from "../App";
import Form from "../pages/Form";

const MainRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/form" element={<Form/>}></Route>
      </Routes>
    </React.Fragment>
  );
};
export default MainRoutes;
