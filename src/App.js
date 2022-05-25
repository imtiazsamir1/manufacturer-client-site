import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import NavBer from "./Pages/Sheared/NavBer";
import Footer from "./Pages/Sheared/Footer";
import Login from "./Pages/Sheared/Login/Login";
import SignUp from "./Pages/Sheared/Login/SignUp";
import MyOrders from "./Pages/MyOrders/MyOrders";
import RequireAuth from "./Pages/Sheared/Login/RequireAuth";
import PartsDetail from "./Pages/PartsDetail/PartsDetail";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";

function App() {
  return (
    <div>
      <NavBer></NavBer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/part/:partId"
          element={<PartsDetail></PartsDetail>}
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myorder" element={<MyOrder></MyOrder>}></Route>
        </Route>
        <Route
          path="/myorders"
          element={
            <RequireAuth>
              <MyOrders></MyOrders>
            </RequireAuth>
          }
        ></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
