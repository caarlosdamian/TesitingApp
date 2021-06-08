import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home";
import Login from "./components/pages/LogIn";
import Register from "./components/pages/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
