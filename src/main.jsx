import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import Layout from "./layout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Profile from "./components/Profile/Profile.jsx";
import Intheft from "./components/InTheft/InTheft.jsx";
import Devices from "./components/Devices/Devices.jsx";
import Vehicles from "./components/Vehicles/Vehicles";
import Mycustomer from "./components/MyCustomer/Mycustomer.jsx";
import Home from "./components/Home/Home.jsx";
import { LoginForm } from "./components/Login/LoginForm";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="intheft" element={<Intheft />} />
      <Route path="devices" element={<Devices />} />
      <Route path="profile" element={<Profile />} />
      <Route path="vehicles" element={<Vehicles />} />
      <Route path="mycustomer" element={<Mycustomer />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
