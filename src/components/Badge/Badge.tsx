import { ReactNode } from "react";
import styles from "./Badge.module.css";

interface Props {
  variation?: BadgeStyle;
  children: ReactNode;
}

export enum BadgeStyle {
  info = "info",
  warning = "warning",
  critical = "critical",
}

// I wasn't sure what the conditions or content was for the Badges from the Figma file, so
//   I tried my best to add in some placeholders for now 

export function Badge({ variation, children }: Props) {
  const styleVariations = getBadgeStyle();

  function getBadgeStyle() {
    switch (variation) {
      case BadgeStyle.critical:
        return styles.BadgeCritical;
      case BadgeStyle.info:
        return styles.BadgeInfo;
      case BadgeStyle.warning:
        return styles.BadgeWarning;
      default:
        return "";
    }
  }
  return <div className={`${styles.Badge} ${styleVariations}`}>{children}</div>;
}
