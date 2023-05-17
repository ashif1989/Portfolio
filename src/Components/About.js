import { useState } from "react";

const About = () => {
  const [about, setAbout] = useState(
    "Innovative, task driven professional with 10+ years of experience in web design and development across multiple technologies like React JS, JavaScript, HTML, CSS Java, .Net, Mainframe. Proficient in creating user interfaces, writing and testing codes, troubleshooting simple/complex issues and implementing new features based on user feedbacks."
  );

  return (
    <div>
      <h1>About </h1>
      <h4>{about}</h4>
    </div>
  );
};

export default About;
