import React from "react";
export default  function Nav(){
    return(
        <>
        <nav className="nav-section">
            <div className="nav-top">
            <h3 className="logo">ChepBay</h3>
            <input typeof="text" placeholder="Login"/>
            </div>
            <ul className="nav-bottom">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
            </nav>
        
        </>
    )
}