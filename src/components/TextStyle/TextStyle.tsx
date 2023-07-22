import { ReactNode } from "react";
import styles from "./TextStyle.module.css";

interface Props {
  subdued?: boolean;
  strong?: boolean;
  children: ReactNode;
}

export function TextStyle({ subdued, strong, children }: Props) {
  const variation = getStyles();

  function getStyles() {
    if (subdued) return styles.Subdued;
    if (strong) return styles.Strong;
  }
  return <span className={variation}>{children}</span>;
}
