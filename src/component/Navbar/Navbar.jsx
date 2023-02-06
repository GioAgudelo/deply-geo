import React, {useState} from "react";
import "./Navbar.css"

const Navbar = () =>{
    const [isOpen, setIsopen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo">Central</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> Inicio </a>
                <a href="#"> Administración </a>
                <a href="#"> Novedades  </a>
                <a href="#"> Registro </a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsopen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div> 
    
        </div>
    )

}

export default Navbar;