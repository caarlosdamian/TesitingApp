import React from "react";
import Google from "../../assets/google.jpg";
import Twitter from "../../assets/Twitter.png";

function LogIn() {
  return (
    <section className="login">
      <section className="login_container">
        <h2>Inicia sesion</h2>
        <form className="login_container_form">
          <input className="input" type="text" placeholder="correo"></input>
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
          ></input>
          <button className="button">Iniciar sesion</button>
          <div className="login_container_remember_me">
            <label>
              <input type="checkbox" id="cbox1" balue="checkbox">
                Recuerdame
              </input>
            </label>
            <a href="/">Olvide mi Contraseña</a>
          </div>
        </form>
        <section className="login_container_social_media">
        <div><img src={Google} alt="Google">Inicia sesion con Google</img></div>
        <div><img src={Twitter} alt="Twitter">Inicia sesion con Twitter</img></div>


        </section>
      </section>
    </section>
  );
}

export default LogIn;
