import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login/index";
import { Register } from "../pages/Register/index";
import Home from "../pages/Home/index";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login"></Route>
                <Route element={<Register />} path="/register"></Route>
                <Route element={<Home />} path="/"></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
