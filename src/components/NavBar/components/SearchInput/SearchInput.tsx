import { Button } from "components/Button";
import styles from "./SearchInput.module.css";

export function SearchInput() {
  return (
    <div className={styles.SearchInputContainer}>
      <input placeholder="Search" />
      <Button primary>Search</Button>
    </div>
  );
}
