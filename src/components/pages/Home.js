import React from "react";
import "../../styles/Home.css";
import Play from "../../assets/play.png";
import Plus from "../../assets/Plus.png";

function Home() {
  return (
    <div>
      <section className="main">
        <h2 className="main_title">¿Que es lo que quieres buscar?</h2>
        <input className="input" type="text" placeholder="Buscar..."></input>
      </section>
      <section className="carousel">
        <div className="carousel_container">
          <div className="carousel_item">
            <img
              className="carousel_item_img"
              src="https://source.unsplash.com/random?movie"
              alt="img"
            ></img>
            <div className="carousel_item_details">
              <div>
                <img src={Play} alt=""></img>
                <img src={Plus} alt=""></img>
              </div>
              <p className="carousel_item_details-title">Titulo Descriptivo</p>
              <p className="carousel_item_details-subtitle">
                2019 16+ 114minutos
              </p>
            </div>
          </div>
          <div className="carousel_item"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
