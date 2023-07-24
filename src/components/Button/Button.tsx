import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  primary?: boolean;
  children?: ReactNode;
  onClick: () => void;
}

export function Button({ primary, children, onClick }: Props) {
  const ButtonStyles = primary ? styles.PrimaryButton : styles.SecondaryButton;
  return <button onClick={onClick} className={`${styles.button} ${ButtonStyles}`}>{children}</button>;
}
