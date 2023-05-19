import { Link } from "react-router-dom";

const ListItems = ({ items, deleteItems, flag }) => {
  return (
    <div>
      {items.map((exp) => (
        <div className="preview" key={exp.id}>
          {flag === "experience" ? (
            <Link to={`/experienceDetails/${exp.id}`}>
              <h2>{exp.info1}</h2>
            </Link>
          ) : (
            <Link to={`/skillDetails/${exp.id}`}>
              <h2>{exp.info1}</h2>
            </Link>
          )}

          <h4>{exp.info2}</h4>
          <h5>{exp.info3}</h5>
          <button onClick={() => deleteItems(exp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
