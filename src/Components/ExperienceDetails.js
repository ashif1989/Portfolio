import { useParams } from "react-router-dom";

const ExperienceDetails = () => {
  const { id } = useParams();

  return <div>Experience Details - {id}</div>;
};

export default ExperienceDetails;
