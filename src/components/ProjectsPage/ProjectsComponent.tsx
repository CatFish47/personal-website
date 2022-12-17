import styles from "./ProjectsComponent.module.css";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className={styles.Main}>
      {/* <div>Filter</div> */}
      <hr />
      <div className={styles.Projects}>
        {projects.map((proj, key) => {
          const id = `p${key}`;
          return <ProjectCard project={proj} id={id} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
