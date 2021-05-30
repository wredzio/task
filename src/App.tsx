import React from "react";
import "./App.css";
import { Sidebar } from "./application/layout/sidebar/Sidebar";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="App__content">content</div>
    </div>
  );
};
