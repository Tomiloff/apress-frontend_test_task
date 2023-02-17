import ProductBtn from "../../../../../components/TableContainer/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../../components/TableContainer/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../../components/TableContainer/Indicators/OutOfStock/OutOfStock";
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
        {Number(count) > 0 ? <AvailableInStock /> : <OutOfStock />}
      </td>
    </tr>
  )
};

export default Product;