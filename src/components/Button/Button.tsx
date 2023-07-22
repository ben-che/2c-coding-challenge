import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  primary?: boolean;
  children?: ReactNode;
}

export function Button({ primary, children }: Props) {
  const ButtonStyles = primary ? styles.PrimaryButton : styles.SecondaryButton;
  return <button className={ButtonStyles}>{children}</button>;
}
