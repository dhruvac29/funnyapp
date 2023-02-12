import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Notification from "./Notification";
import Notify from "./Notification";
import Navbar from "./Components/Navbar";
import Photo from "./Photo";
import Calculator from "./Calculator";
import Logout from "./Logout";

function App() {
    return (
        <div className="App">
            <div className="navsticky">
                <Navbar/>
            </div>
            <div>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/reset" element={<Reset/>}/>
                    <Route exact path="/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/notification" element={<Notify/>}/>
                    <Route exact path="/photo" element={<Photo/>}/>
                    <Route exact path="/text" element={<entertext/>}/>
                    <Route exact path="/text" element={<Calculator/>}/>
                    <Route exact path="/logout" element={<Logout/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
