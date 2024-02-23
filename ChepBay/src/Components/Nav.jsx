import React from "react";
export default  function Nav(){
    return(
        <>
        <nav className="nav-section">
            <div className="nav-top">
            <h3 className="logo">ChepBay</h3>
            <input typeof="search" placeholder="Login"/>
            </div>
            <div className="nav-bottom">
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            <h4>Cart</h4>
            </div>
            </nav>
        
        </>
    )
}