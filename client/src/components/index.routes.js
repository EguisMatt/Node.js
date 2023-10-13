import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./register/index";
import Login from "./Login";

const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default IndexRouter;