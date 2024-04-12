import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const ModalWindow = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center>
      {children}
    </Modal>
  );
};
