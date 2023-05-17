import { useState } from "react";
import ListItems from "./ListItems";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      info1: "React",
      info2: "Intermediate",
      info3: "Experience: 4 years",
      id: 1
    },
    { info1: "HTML", info2: "Expert", info3: "Experience: 5 years", id: 2 },
    { info1: "CSS", info2: "Expert", info3: "Experience: 5 years", id: 3 },
    {
      info1: "Redux",
      info2: "Intermediate",
      info3: "Experience: 4 years",
      id: 4
    },
    {
      info1: "Javascript",
      info2: "Expert",
      info3: "Experience: 5 years",
      id: 5
    }
  ]);

  const handleDeleteItems = (id) => {
    const newSkl = skills.filter((skill) => skill.id !== id);
    setSkills(newSkl);
  };

  return (
    <div>
      <h1>Skills </h1>
      <ListItems items={skills} deleteItems={handleDeleteItems} />
    </div>
  );
};

export default Skills;
