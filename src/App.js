import logo from "./logo.svg";
import "./App.css";
import { Routes } from "react-router-dom";
import NavBer from "./Pages/NavBer/NavBer";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <NavBer></NavBer>
      <Home></Home>
    </div>
  );
}

export default App;
