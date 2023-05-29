import { useState } from "react";
import ListItems from "./ListItems";
import useFetch from "./useFetch";

const Skills = () => {
  const [skills, setSkills] = useState([
    {
      info1: "React",
      info2: "Intermediate",
      info3: "Experience: 4 years",
      info4: "Last Company Worked: DanskeIT",
      id: 1,
    },
    {
      info1: "HTML",
      info2: "Expert",
      info3: "Experience: 5 years",
      info4: "Last Company Worked: DanskeIT",
      id: 2,
    },
    {
      info1: "CSS",
      info2: "Expert",
      info3: "Experience: 5 years",
      info4: "Last Company Worked: DanskeIT",
      id: 3,
    },
    {
      info1: "Redux",
      info2: "Intermediate",
      info3: "Experience: 4 years",
      info4: "Last Company Worked: DanskeIT",
      id: 4,
    },
    {
      info1: "Javascript",
      info2: "Expert",
      info3: "Experience: 5 years",
      info4: "Last Company Worked: DanskeIT",
      id: 5,
    },
  ]);

  const { status, error, loading } = useFetch("https://randomuser.me/api/");

  const handleDeleteItems = (id) => {
    const newSkl = skills.filter((skill) => skill.id !== id);
    setSkills(newSkl);
  };

  return (
    <div>
      <h1>Skills </h1>
      {loading ? (
        <div>Skills Details loading....</div>
      ) : (
        status && (
          <>
            <ListItems
              items={skills}
              deleteItems={handleDeleteItems}
              flag={"skills"}
            />
            <div>{status}</div>
          </>
        )
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Skills;
