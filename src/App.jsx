import RestroHeader from "./components/RestroHeader";
import RestroBody from "./components/RestroBody";
// import "./App.css";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <RestroHeader />
      <Outlet />
    </div>
  );
}
