import "./App.css";
import Logo from "./assets/Logo.png";
import UserIcon from "./assets/user-icon.png";
function App() {
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
                <a href="/">Cuenta</a>
              </li>
              <li>
                <a href="/">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </header>
        <section className="main">
          <h2 className="main_title">¿Que es lo que quieres buscar?</h2>
          <input
            className="input"
            type="text"
            placeholder="Buscar..."
          ></input>
        </section>
      </body>
    </div>
  );
}

export default App;
