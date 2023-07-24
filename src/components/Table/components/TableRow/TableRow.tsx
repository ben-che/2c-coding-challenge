import { Badge, BadgeStyle } from "components";
import { TextStyle } from "components/TextStyle";
import { ProductData } from "types/ProductData";
import styles from "./TableRow.module.css";

export function TableRow({
  id,
  product,
  serial,
  quantity,
  total,
}: ProductData) {
  // This is some additional logic I added for the Badges; the designs and instructions
  // as well as mock JSON data didn't provide a status field, so I made up some statuses
  // to add based on the amount of inventory a product has.
  const badgeMarkup = getBadge();

  function getBadge() {
    if (quantity > 100) {
      return <Badge><p>In stock</p></Badge>;
    } else if (quantity > 50) {
      return <Badge variation={BadgeStyle.info}><p>Low stock</p></Badge>;
    } else if (quantity > 0) {
      return <Badge variation={BadgeStyle.warning}><p>Low stock</p></Badge>;
    } else {
      return <Badge variation={BadgeStyle.critical}><p>No stock</p></Badge>;
    }
  }

  return (
    <tr>
      <td className={styles.SecondaryTableCell}>
        <p>{id}</p>
      </td>
      <td className={styles.SecondaryTableCell}>
        {badgeMarkup}
      </td>
      <td className={styles.SecondaryTableCell}>
        <p>{quantity}</p>
      </td>
      <td className={styles.MainTableCell}>
        <p>{product}</p>
        <p>
          <TextStyle subdued>{serial}</TextStyle>
        </p>
      </td>
      <td className={styles.SecondaryTableCell}>
        <p>{total}</p>
      </td>
    </tr>
  );
}
