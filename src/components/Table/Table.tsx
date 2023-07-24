import { ProductData } from "types/ProductData";
import { TableRow } from "./components";
import styles from "./Table.module.css";

interface Props {
  productData: ProductData[];
}

export function Table({ productData }: Props) {
  const tableMarkup = productData.map((data) => {
    const { id, product, serial, total, quantity } = data;
    return (
      <TableRow
        id={id}
        product={product}
        serial={serial}
        total={total}
        quantity={quantity}
        key={`productdatarow-${data.id}`}
      />
    );
  });
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
      <tbody>{tableMarkup}</tbody>
    </table>
  );
}
