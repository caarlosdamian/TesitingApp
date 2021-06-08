import React from "react";
import Google from "../../assets/google.jpg";
import Twitter from "../../assets/Twitter.png";
import "../../styles/Login.css";

function LogIn() {
  return (
    <div>
      <section className="login">
        <section className="login_container">
          <h2>Inicia sesion</h2>
          <form className="login_container_form">
            <input className="inputs" type="text" placeholder="Correo" />
            <input
              className="inputs"
              type="password"
              placeholder="Contraseña"
            />
            <button className="button">Iniciar sesion</button>
            <div className="login_container_remember_me">
              <input type="checkbox" id="cbox1" balue="checkbox" />
              <label>Recuerdame</label>

              <a href="/">Olvide mi Contraseña</a>
            </div>
          </form>
          <section className="login_container_social_media">
            <div>
              <img src={Google} alt="Google" />
              Iniciar sesion con Google
            </div>
            <div>
              <img src={Twitter} alt="Twitter" />
              Iniciar sesion con Twitter
            </div>
          </section>
          <p className="login_container--register">
            {" "}
            No tienes ninguna cuenta <a href="/">Registrate</a>
          </p>
        </section>
      </section>
      <footer className="footer">
        <a href="/">Terminos de uso</a>
        <a href="/">Declaracion de privacidad</a>
        <a href="/">Centro de ayuda</a>
      </footer>
    </div>
  );
}

export default LogIn;
