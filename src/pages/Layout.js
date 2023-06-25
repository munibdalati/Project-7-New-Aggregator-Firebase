import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sports from "./Sports";
import Category from "./Category";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "../assets/index.css";
import { AuthProvider } from "../context/AuthContext";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";


const Layout = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/sports" Component={Sports} />
          <Route path="/Details/:id" Component={Details} />
          <Route path="/signIn" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route
            path="/Profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/:type" Component={Category} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Layout;
