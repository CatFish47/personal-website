import { openModalID } from "../../stores/modalStore";
import ProjectModal from "./ProjectModal";
import type { Project } from "./projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: string;
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { id, project } = props;
  const { name, description } = project;

  const onClickCard = () => {
    openModalID.set(id);
  };

  return (
    <div className={styles.ProjectCard}>
      <div onClick={onClickCard}>
        <h2 className={styles.CardTitle}>
          {name}
          {/* <span>&#129109;</span> */}
        </h2>
        <p className={styles.CardBody}>{description}</p>
      </div>
      <ProjectModal id={id} project={project} />
    </div>
  );
};

export default ProjectCard;
