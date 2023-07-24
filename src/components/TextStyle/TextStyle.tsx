import { ReactNode } from "react";
import styles from "./TextStyle.module.css";

interface Props {
  subdued?: boolean;
  strong?: boolean;
  error?: boolean;
  children: ReactNode;
}

export function TextStyle({ subdued, strong, error, children }: Props) {
  const variation = getStyles();

  function getStyles() {
    if (subdued) return styles.Subdued;
    if (strong) return styles.Strong;
    if (error) return styles.Error;
  }
  return <span className={variation}>{children}</span>;
}
