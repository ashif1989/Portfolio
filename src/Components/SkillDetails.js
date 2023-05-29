import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SkillDetails = () => {
  const { id } = useParams();
  const { status, error, loading } = useFetch(
    "https://oltgg4-3000.csb.app/skillDetails/" + id
  );

  return (
    <>
      {loading && <div>Skills Loading..</div>}
      {error && <div>{error}</div>}
      {status && (
        <>
          <div>{status}</div>
        </>
      )}
    </>
  );
};

export default SkillDetails;
