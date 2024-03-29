import gz from "../images/gz/gzicon.png";
import fr from "../images/fr/fricon.png";
import lc from "../images/lc/lcicon.png";
import fi from "../images/fi/fiicon.png";
import fmp from "../images/fmp/fmpicon.png";
import d from "../images/d/dicon.png";
import wam from "../images/wam/wamicon.png";
import rps from "../images/rps/rpsicon.png";
import pp from "../images/pp/ppicon.png";
import mw from "../images/mw/mwicon.png";

import Card from "../Components/Card/Card";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Mittereder.com",
      image: mw,
      page: "mw",
    },
    {
      title: "Gradez",
      image: gz,
      page: "gz",
    },
    {
      title: "Franklin Regional",
      image: fr,
      page: "fr",
    },
    {
      title: "Life Counter",
      image: lc,
      page: "lc",
    },
    {
      title: "Frame It",
      image: fi,
      page: "fi",
    },
    {
      title: "Cuz",
      image: d,
      page: "cz",
    },
    {
      title: "Fast Movie Photos",
      image: fmp,
      page: "fmp",
    },
    {
      title: "Graph Game",
      image: d,
      page: "gg",
    },
    {
      title: "Words and Music",
      image: wam,
      page: "wam",
    },
    {
      title: "Vehicle App",
      image: d,
      page: "va",
    },
    {
      title: "Rock Paper Scissors",
      image: rps,
      page: "rps",
    },
    {
      title: "Pinball Price",
      image: pp,
      page: "pp",
    },
  ];

  const navigate = useNavigate();

  const currentProjectHandler = (project) => {
    navigate("/projects/" + project.page);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 p-2 bg-white">
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          image={project.image}
          onClick={() => currentProjectHandler(project)}
        />
      ))}
    </div>
  );
};

export default Projects;
