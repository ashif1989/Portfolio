import { useState } from "react";
import ListItems from "./ListItems";

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      info1: "DanskeIT",
      info2: "Chief Software Engineer",
      info3: "Bangalore",
      id: 1
    },
    {
      info1: "HP",
      info2: "Technology Consultant",
      info3: "Bangalore",
      id: 2
    },
    {
      info1: "Patni",
      info2: "Senior Software Engineer",
      info3: "Mumbai",
      id: 3
    }
  ]);

  const handleDeleteItems = (id) => {
    const newExp = experience.filter((exp) => exp.id !== id);
    setExperience(newExp);
  };

  return (
    <div>
      <h1>Experience </h1>
      <ListItems items={experience} deleteItems={handleDeleteItems} />
    </div>
  );
};

export default Experience;
