import React from "react";
import "./Navbar.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="nav_logo">Central</div>
            <div className="nav_items">
                <a href="#"> Inicio </a>
                <a href="#"> Administración </a>
                <a href="#"> Novedades  </a>
                <a href="#"> Registro </a>
            </div>
            <div className="nav_toggle">
                <span></span>
                <span></span>
                <span></span>
            </div> 
    
        </div>
    )

}

export default Navbar;