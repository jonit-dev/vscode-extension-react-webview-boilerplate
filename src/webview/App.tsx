import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Demo } from "./Demo";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </Router>
  );
};
