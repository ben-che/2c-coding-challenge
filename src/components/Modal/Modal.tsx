import { Button } from "components/Button";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface Props {
  title: string;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export function Modal({ title, onClose, open, children }: Props) {
  if (!open) {
    return null;
  }

  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalCard}>
        <>
        <div className={styles.ModalTitleContainer}>
          <h2>{title}</h2>
          <button className={styles.button} onClick={onClose}>x</button>
        </div>
        {children}
        </>
        <div className={styles.ModalFooter}>
            <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}
