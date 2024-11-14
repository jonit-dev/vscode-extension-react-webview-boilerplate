import { useVSCodeElements } from '@hooks/useVSCodeElements';
import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { Demo } from "./Demo";
import { ExampleRoute } from "./components/ExampleRoute";

export const App: React.FC = () => {
  const isLoading = useVSCodeElements();

  if (isLoading) {
    return null;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/example-route" element={<ExampleRoute />} />
      </Routes>
    </Router>
  );
};
