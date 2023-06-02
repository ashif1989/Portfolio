import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([
    {
      info: "Working as Front End Full Stack Developer and working in different technologies like HTML, CSS, Javascript, React JS, .Net, Java. Technology used in last Company: DanskeIT",
      id: 1,
    },
    {
      info: "Worked as Java Full Stack Developer and working in different technologies like Java, Rest API, API Connect, Automation Testing, Mainframe. Technology used in last Company: HP",
      id: 2,
    },
    {
      info: "Worked as Java Full Stack Developer and working in different technologies like Java, Rest API, API Connect, Automation Testing, Mainframe. Technology used in last Company: HP",
      id: 3,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            setStatus("Details Fetched Successfully");
            setError(null);
            setLoading(false);
          } else {
            throw Error("Error in fetching Details");
          }
        })
        .catch((err) => {
          setStatus(null);
          setError(err.message);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return { status, error, loading };
};

export default useFetch;
