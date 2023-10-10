import React from 'react';
import "./Logo.css"
import "../App.css"

export default function Logo() {
    return (
        <div className='center-width'>
            <div id='logo-container'>
                <img src="broken-heart.png" alt='logo'/>
                <h1 id="logo">Super Cute<br/>Shy Club</h1>
            </div>
        </div>
    )
  }