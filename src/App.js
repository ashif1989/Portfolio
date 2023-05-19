import "./styles.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
