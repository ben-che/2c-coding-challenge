import { NavBar, Table, TextStyle } from "components";
import styles from "./App.module.css";

function App() {
  const currentProductCount = 20;
  const maxProductCount = 40;
  return (
    <div className={styles.App}>
      <NavBar />
      <p>
        <TextStyle strong>Products</TextStyle>{" "}
        <TextStyle subdued>
          {currentProductCount} of {maxProductCount} results
        </TextStyle>
      </p>
      <Table />
    </div>
  );
}

export default App;
