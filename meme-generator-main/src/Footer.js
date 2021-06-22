import React from "react"
import Heart from "./Heart.gif"; 


function Footer () {
    return (
        <div className="footer">
            <h3>Made By Ahsan Soomro with <img src={Heart} alt="Heart"/><span>All Right Reserved&copy;</span></h3>
        </div>
    )
}

export default Footer