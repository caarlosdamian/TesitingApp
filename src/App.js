import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home";
import Login from "./components/pages/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
