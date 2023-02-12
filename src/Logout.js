import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link, Routes, useNavigate} from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";

function Logout() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const a = () => {
        navigate("/");
        logout();
    }

    return (
        <>
            <div>
                <button className="dashboard__btn" onClick={a}>
                    Logout
                </button>
            </div>
        </>
    );
}
export default Logout;