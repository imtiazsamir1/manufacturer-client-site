import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NavBer from "./Pages/Sheared/NavBer";
import Footer from "./Pages/Sheared/Footer";

function App() {
  return (
    <div>
      <NavBer></NavBer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
