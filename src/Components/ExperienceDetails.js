import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ExperienceDetails = () => {
  const { id } = useParams();
  const { status, error, loading } = useFetch(
    "https://oltgg4-3000.csb.app/experienceDetails/" + id
  );
  console.log("loading", loading);
  console.log("error", error);
  //console.log("details", details);

  return (
    <>
      {loading && <div>Experience Loading..</div>}
      {error && <div>{error}</div>}
      {status && (
        <>
          <div>{status}</div>
        </>
      )}
    </>
  );
};

export default ExperienceDetails;
