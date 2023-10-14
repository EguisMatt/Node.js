import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./register/index";
import Login from "./login";
import Recovery from "./Recovery";

const IndexRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/recovery" element={<Recovery/>}/>
            </Routes>
        </>
    )
}

export default IndexRouter;