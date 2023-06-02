import "./styles.css";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import ExperienceDetails from "./Components/ExperienceDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SkillDetails from "./Components/SkillDetails";
import CreateSkills from "./Components/CreateSkills";
import { useHistory } from "react-router-dom";
import NotFound from "./Components/NotFound";

export default function App() {
  const [skills, setSkills] = useState([
    {
      info1: "React",
      info2: "Intermediate",
      info3: "Experience(in years): 4",
      id: 1,
    },
    {
      info1: "HTML",
      info2: "Expert",
      info3: "Experience(in years): 5",
      id: 2,
    },
    {
      info1: "CSS",
      info2: "Expert",
      info3: "Experience(in years): 5",
      id: 3,
    },
    {
      info1: "Redux",
      info2: "Intermediate",
      info3: "Experience(in years): 4",
      id: 4,
    },
    {
      info1: "Javascript",
      info2: "Expert",
      info3: "Experience(in years): 5",
      id: 5,
    },
  ]);
  const hist = useHistory();

  const addSkills = (obj) => {
    let newskills = skills;
    newskills.push(obj);
    setSkills(newskills);
  };

  const deleteSkills = (id) => {
    console.log(id);
    console.log("skils", skills);
    let newskills = skills.filter((skill) => skill.id != id);
    console.log(newskills);
    setSkills(newskills);
    console.log("Skills deleted");
    //hist.push("/skills");
  };

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
              <Skills skills={skills} />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/addNewSkill">
              <CreateSkills addSkills={addSkills} />
            </Route>
            <Route path="/experienceDetails/:id">
              <ExperienceDetails />
            </Route>
            <Route path="/skillDetails/:id">
              <SkillDetails deleteSkills={deleteSkills} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
