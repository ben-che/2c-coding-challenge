import { Button } from "components/Button";
import { TextStyle } from "components/TextStyle";
import { FormEvent } from "react";
import styles from "./SearchInput.module.css";

interface Props {
  handleInputChange: (input: string) => void;
  handleSearch: () => void;
  input: string;
  error?: string;
}

export function SearchInput({
  input,
  error,
  handleInputChange,
  handleSearch,
}: Props) {
  function handleSearchSubmit(event?: FormEvent) {
    event?.preventDefault();
  
    if (error === "") {
      handleSearch();
    }
  }

  const errorMarkup = error ? (
    <p className={styles.ErrorMessage}>
      <TextStyle error>{error}</TextStyle>
    </p>
  ) : null;

  return (
    <form
      className={styles.SearchInputContainer}
      onSubmit={(event) => handleSearchSubmit(event)}
    >
      <input
        value={input}
        placeholder="Search"
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
      <Button primary onClick={handleSearchSubmit}>
        Search
      </Button>
      {errorMarkup}
    </form>
  );
}
