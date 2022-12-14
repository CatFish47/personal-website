import { openModalID } from "../../stores/modalStore";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  id: string;
  title: string;
  body: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { id, title, body } = props;

  const onClickCard = () => {
    openModalID.set(id);
  };

  return (
    <div className={styles.ProjectCard}>
      <div onClick={onClickCard}>
        <h2 className={styles.CardTitle}>
          {title}
          <span>&#129109;</span>
        </h2>
        <p className={styles.CardBody}>{body}</p>
      </div>
      <ProjectModal id={id} />
    </div>
  );
};

export default ProjectCard;
