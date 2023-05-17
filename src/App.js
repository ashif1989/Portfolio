import "./styles.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
