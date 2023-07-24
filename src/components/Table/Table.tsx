import { TextStyle } from "components/TextStyle";
import { ProductData } from "types/ProductData";
import { TableRow } from "./components";
import styles from "./Table.module.css";

interface Props {
  productData: ProductData[];
  handleSelectProduct: (product: ProductData) => void;
}

export function Table({ productData, handleSelectProduct }: Props) {
  const tableRowMarkup = productData.map((data) => {
    const { id, product, serial, total, quantity } = data;
    return (
      <TableRow
        handleSelectProduct={() => {handleSelectProduct(data)}}
        id={id}
        product={product}
        serial={serial}
        total={total}
        quantity={quantity}
        key={`productdatarow-${data.id}`}
      />
    );
  });

  const tableBodyMarkup = tableRowMarkup.length === 0 ? (
    <tr className={styles.TableBodyEmpty}>
      <TextStyle strong>No products found</TextStyle>
    </tr>
  ) : (
    tableRowMarkup
  );

  return (
    <table>
      <thead className={styles.TableHeader}>
        <tr>
          <th className={styles.SecondaryTableColumn}>ID</th>
          <th className={styles.SecondaryTableColumn}>Status</th>
          <th className={styles.SecondaryTableColumn}>Quantity</th>
          <th className={styles.MainTableColumn}>Product Name</th>
          <th className={styles.SecondaryTableColumn}>Prices</th>
        </tr>
      </thead>
      <tbody>{tableBodyMarkup}</tbody>
    </table>
  );
}
