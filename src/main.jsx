import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import "./styles/index.css";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import NoPage from "./pages/NoPage";




const domRoot = document.getElementById("root");
const root = createRoot(domRoot);

root.render(
<BrowserRouter>
    <Routes>
      <Route path="/"         element={<App />}>
        <Route index            element={<HomePage />}   />
        <Route path="explore"   element={<Explore/>} />                             
        <Route path="*"         element={<NoPage/>}  />
      </Route>
    </Routes>
  </BrowserRouter>
  );