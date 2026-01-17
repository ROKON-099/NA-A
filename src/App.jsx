import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./Layout/Mainlayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
