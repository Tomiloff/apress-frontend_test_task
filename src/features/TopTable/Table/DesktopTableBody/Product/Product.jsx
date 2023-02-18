import ProductBtn from "../../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../../components/TopTable/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../../components/TopTable/Indicators/OutOfStock/OutOfStock";
import styles from "./Product.module.css";
import { dateConverter } from "../../../../../utils/dateConverter/dateConverter";


const Product = ({name, createdAt, price, count, imageUrl, openModal}) => {
  
  return (
    <tr className={styles.table_row}>
      <td className={styles.table_cell}>
        <ProductBtn name={name} imageUrl={imageUrl} openModal={openModal} />
      </td>
      <td className={styles.table_cell}>{dateConverter(createdAt)}</td>
      <td className={styles.table_cell}>₽ {price}</td>
      <td className={styles.table_cell}>{count}</td>
      <td className={styles.table_cell}>
        {Number(count) ? <AvailableInStock /> : <OutOfStock />}
      </td>
    </tr>
  )
};

export default Product;