import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RestroHeader from "./components/RestroHeader";
import RestroBody from "./components/RestroBody";

export default function App() {
  return (
    <div className="app">
      <RestroHeader />
      <RestroBody />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
