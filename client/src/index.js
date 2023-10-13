import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Login from "./components/login/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
    {/* <Register/> */}
  </React.StrictMode>
);

