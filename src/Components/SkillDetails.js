import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SkillDetails = ({ deleteSkills }) => {
  const { id } = useParams();
  const { status, error, loading } = useFetch(
    "https://oltgg4-3000.csb.app/skillDetails/" + id
  );

  //const detail = details.filter((detail) => detail.id === id);

  const handleDelete = () => {
    deleteSkills(id);
  };

  return (
    <>
      {loading && <div>Skills Loading..</div>}
      {error && <div>{error}</div>}
      {status && (
        <>
          <div>{status}</div>
        </>
      )}
      <button onClick={handleDelete}>Delete Skills</button>
    </>
  );
};

export default SkillDetails;
