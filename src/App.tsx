import { useEffect, useState } from "react";
import { Button, NavBar, Table, TextStyle } from "components";
import { mockData } from "./mockData";
import { ProductData } from "types/ProductData";

import styles from "./App.module.css";

function App() {
  // This mocks a network request to fetch the actual
  // data; there doesn't seem to be an API in the coding
  // challenge, and I didn't hear back on whether or not
  // I was to create a server as well

  // I also added a loading state that will render as a
  // placeholder for when the data is "loaded" - I set it as
  // 3 seconds long
  const [data, setData] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setData(mockData);
    }, 3000);
  }, []);

  // When there is no active search, the value will be null,
  // Otherwise, we render the search results array instead of the
  // initial data found above
  const [searchResults, setSearchResults] = useState<ProductData[] | null>(
    null
  );

  function handleSearch(input: string) {
    // Adding some basic handling for spaces, missed user input
    const parsedInput = input
      .trim()
      .split(" ")
      .filter((s) => s.length > 0)
      .join(" ");
    if (parsedInput === "") {
      setSearchResults(null);
    } else {
      const filteredData = data.filter((product) => {
        return product.product.toLowerCase().includes(parsedInput);
      });

      setSearchResults(filteredData);
    }
  }

  const currentProductCount = searchResults
    ? searchResults?.length
    : data.length;
  const maxProductCount = data.length;

  if (loading) {
    return <div>Mocking fetch request - wait 3 seconds!</div>;
  }

  return (
    <div className={styles.App}>
      <NavBar handleSearch={handleSearch} />
      <p>
        <TextStyle strong>Products</TextStyle>{" "}
        <TextStyle subdued>
          {currentProductCount} of {maxProductCount} results
        </TextStyle>
      </p>
      <Table productData={searchResults ? searchResults : data} />
    </div>
  );
}

export default App;
