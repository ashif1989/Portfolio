import { useParams } from "react-router-dom";

const SkillDetails = () => {
  const { id } = useParams();

  return <div>Skill Details - {id}</div>;
};

export default SkillDetails;
