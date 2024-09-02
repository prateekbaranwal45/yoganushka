// src/ app.js

import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage';
import NavBar from './NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <div id="signup"> Signup </div>
            <div id="login"> Login </div>
            <div id="homepage"> Homepage </div>
            
        </div>
    );
}