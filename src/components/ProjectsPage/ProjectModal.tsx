import { useStore } from "@nanostores/react";
import { openModalID } from "../../stores/modalStore";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  id: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const { id } = props;
  const $openModalID = useStore(openModalID);

  const onCloseModal = () => {
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
    >
      <div className={styles.ModalWindow}>
        <div className={styles.ModalTitle}>
          <span>Example Project</span>
        </div>
        <div className={styles.ModalBody}>
          <div className={styles.ModalImage}>
            <img src="portrait-square.jpg" />
          </div>
          <div className={styles.ModalContent}>Lorem ipsum dolor sit amet.</div>
        </div>
        <div className={styles.ModalFooter}>
          <button onClick={onOpenProject}>View Project</button>
          <button onClick={onCloseModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
