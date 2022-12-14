import { useStore } from "@nanostores/react";
import { openModalID } from "../../stores/modalStore";
import styles from "./ProjectModal.module.css";
import type { Project } from "./projects";

interface ProjectModalProps {
  id: string;
  project: Project;
}

const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const { id, project } = props;
  const { name, details, links, image, when } = project;
  const $openModalID = useStore(openModalID);

  const handleCloseModal = () => {
    openModalID.set("");
  };

  const onOpenProject = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <div
      id={id}
      style={{ display: $openModalID === id ? "flex" : "none" }}
      className={styles.ModalBackground}
      onClick={(e) => {
        console.log(e);
      }}
    >
      <div className={styles.ModalWindow}>
        <div className={styles.ModalTitle}>
          <span>{name}</span>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.ModalImage}>
            <img src="portrait-square.jpg" />
          </div>
          <div className={styles.ModalContent}>{details}</div>
        </div>
        <div className={styles.ModalFooter}>
          <button onClick={onOpenProject}>View Project</button>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
