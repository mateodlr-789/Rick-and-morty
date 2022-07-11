import React from "react";
import logo from '../assets/Recursos/Logo-RandM.png';
import campana from '../assets/Recursos/Icono_de_campana.png';
import casa from '../assets/Recursos/Home.png';


export const Head = () => {   
    return (
        <nav className="hnav navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                    
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn " type="submit"><img src={campana} alt="" /></button>
                        <button className="btn " type="submit"><img src={casa} alt="" /></button>
                    </form>
                </div>
            </div>
        </nav>
    );
}