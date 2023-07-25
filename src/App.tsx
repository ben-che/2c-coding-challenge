import { useEffect, useState } from "react";
import { Modal, NavBar, Table, TextStyle } from "components";
import { mockData } from "./mockData";
import { ProductData } from "types/ProductData";
import laptop from "./assets/laptop.png";

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
        return product.product.toLowerCase().includes(parsedInput.toLowerCase());
      });

      setSearchResults(filteredData);
    }
  }

  const currentProductCount = searchResults
    ? searchResults?.length
    : data.length;
  const maxProductCount = data.length;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductData>();

  function handleSelectProduct(product: ProductData) {
    setSelectedProduct(product);
    setModalOpen(true);
  }

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
      <Table productData={searchResults ? searchResults : data} handleSelectProduct={handleSelectProduct} />
      <Modal
        title={selectedProduct?.product || ""}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className={styles.ModalProductBody}>
          <img src={laptop} alt="product placeholder"></img>
          <div>
            <p>Key Features</p>
            <ul>
              <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
              <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD </li>
              <li>16" 3072 x 1920 Retina Display </li>
              <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
            </ul>
            <p>
              The Apple 16" MacBook Pro features a 16" Retina Display, a Magic
              Keyboard with a redesigned scissor mechanism, a six-speaker
              high-fidelity sound system, and an advanced thermal design. This
              MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a
              7nm mobile discrete GPU designed for pro users. With 8GB of HBM2
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
