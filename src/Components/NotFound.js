import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <>
      <div>Page you are looking for doesnt exist, you can go to Home Page</div>
      <Link to="/">Back to About Page</Link>
    </>
  );
};

export default NotFound;
