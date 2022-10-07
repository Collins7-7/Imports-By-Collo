import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import AddCar from "./components/pages/AddCar";
import Signup from "./components/pages/SignUp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/services" element={<AddCar/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
