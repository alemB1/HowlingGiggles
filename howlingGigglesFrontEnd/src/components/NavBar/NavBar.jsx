import React from "react";
import './NavBar.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function NavBar(){
    return(
        <div className="navbar--main">
                <div className="navbar--logo">
                    <img src="src/assets/image.png" className="image" alt="error"></img>
                    <h1 className="logo">Howling giggles</h1>
                </div>
                <div className="navbar--links">
                    <a href="#">Jokes</a>
                    <a href="#">Archive</a>
                    <a href="#">About</a>
                </div>

                <button className="navbar--postbtn">Post</button>
        </div>
        )
}