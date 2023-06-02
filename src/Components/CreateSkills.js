import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateSkills = ({ addSkills }) => {
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("Beginner");
  const [experience, setExperience] = useState(0);
  const history = useHistory();

  let handleOnChangeinfo1 = (e) => {
    setInfo1(e.target.value);
  };

  let handleOnChangeinfo2 = (e) => {
    setInfo2(e.target.value);
  };

  let handleOnChangeexperience = (e) => {
    setExperience(e.target.value);
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    let id = Math.round(Math.random() * 1000);
    let info3 = "Experience(in years): " + experience;
    let skills = { info1, info2, info3, id };
    addSkills(skills);
    setInfo1("");
    setInfo2("Beginner");
    setExperience(0);
    history.push("/skills");
  };

  return (
    <div className="create">
      <form onSubmit={handleOnSubmit}>
        <label>Skill Name</label>
        <input
          type="text"
          required
          value={info1}
          onChange={handleOnChangeinfo1}
        />
        <label>Proficiency Level</label>
        <select required value={info2} onChange={handleOnChangeinfo2}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
        <label>Experience(in years)</label>
        <input
          type="number"
          required
          value={experience}
          onChange={handleOnChangeexperience}
        />
        <button>Add New Skill</button>
      </form>
    </div>
  );
};

export default CreateSkills;
