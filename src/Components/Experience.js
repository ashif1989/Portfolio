import ListItems from "./ListItems";
import { useState } from "react";
import useFetch from "./useFetch";

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      info1: "DanskeIT",
      info2: "Chief Software Engineer",
      info3: "Bangalore",
      info4:
        "Working as Front End Full Stack Developer and working in different technologies like HTML, CSS, Javascript, React JS, .Net, Java",
      id: 1,
    },
    {
      info1: "HP",
      info2: "Technology Consultant",
      info3: "Bangalore",
      info4:
        "Worked as Java Full Stack Developer and working in different technologies like Java, Rest API, API Connect, Automation Testing, Mainframe.",
      id: 2,
    },
    {
      info1: "Patni",
      info2: "Senior Software Engineer",
      info3: "Mumbai",
      info4:
        "Worked as Senior Mainframe Developer and working in different technologies like REXX, JCL, COBOL, CICS.",
      id: 3,
    },
  ]);

  const { status, error, loading } = useFetch("https://randomuser.me/api/");

  const handleDeleteItems = (id) => {
    const newExp = experience.filter((exp) => exp.id !== id);
    setExperience(newExp);
  };

  return (
    <div>
      <h1>Experience </h1>
      {loading ? (
        <div>Experience Details loading....</div>
      ) : (
        status && (
          <>
            <ListItems
              items={experience}
              deleteItems={handleDeleteItems}
              flag={"experience"}
            />
            <div>{status}</div>
          </>
        )
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Experience;
