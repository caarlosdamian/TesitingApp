import React from "react";
import "../../styles/Home.css";

function Home() {
  return (
    <div>
      <section className="main">
        <h2 className="main_title">¿Que es lo que quieres buscar?</h2>
        <input className="input" type="text" placeholder="Buscar..."></input>
      </section>
    </div>
  );
}

export default Home;
