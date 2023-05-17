const ListItems = ({ items, deleteItems }) => {
  return (
    <div>
      {items.map((exp) => (
        <div className="preview" key={exp.id}>
          <h2>{exp.info1}</h2>
          <h4>{exp.info2}</h4>
          <h5>{exp.info3}</h5>
          <button onClick={() => deleteItems(exp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
