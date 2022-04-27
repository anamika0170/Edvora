import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/header.style.css'
import ana from '../images/Anamika.jpeg'
import UserDetails from "./UserDetails";
import axios from "axios";
const Header = () => {


    

  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Edvora
            </a>
            <div className="d-flex">
            
            <UserDetails/>
                
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
