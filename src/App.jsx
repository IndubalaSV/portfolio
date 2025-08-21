import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainProjectsPage from "./pages/MainProjectsPage";
import SideProjectsPage from "./pages/SideProjectsPage";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-projects" element={<MainProjectsPage />} />
          <Route path="/side-projects" element={<SideProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
