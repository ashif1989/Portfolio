import ListItems from "./ListItems";
import useFetch from "./useFetch";

const Skills = ({ skills }) => {
  const { status, error, loading } = useFetch("https://randomuser.me/api/");

  // const handleDeleteItems = (id) => {
  //   const newSkl = skills.filter((skill) => skill.id !== id);
  //   setSkills(newSkl);
  // };

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
              // deleteItems={handleDeleteItems}
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
