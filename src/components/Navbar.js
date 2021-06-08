import React from "react";
import Logo from "../assets/Logo.png";
import UserIcon from "../assets/user-icon.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="App">
      <head className="App-header">
        <title>Header</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <header className="header">
          <img src={Logo} alt="logo" className="header_img"></img>
          <div className="header_menu">
            <div className="header_menu--profile">
              <img src={UserIcon} alt="Perfil"></img>
              <p>Perfil</p>
            </div>
            <ul>
              <li>
                <Link to="/">Cuenta</Link>
              </li>
              <li>
                <Link to="/Register">Registrate</Link>
              </li>
              <li>
                <Link to="/Login">Cerrar Sesion</Link>
              </li>
            </ul>
          </div>
        </header>
      </body>
    </div>
  );
}

export default Navbar;
