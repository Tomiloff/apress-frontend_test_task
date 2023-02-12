import ProductBtn from "../../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import styles from "./Product.module.css";


const Product = ({name, createdAt, price, count}) => {
  return (
    <tr className={styles.rowProduct}>
      <td>
        <ProductBtn name={name} />
      </td>
      <td>{createdAt}</td>
      <td>₽ {price}</td>
      <td>{count}</td>
      <td>
        <p className={styles.indicatorYes}>Есть на складе</p>
      </td>
    </tr>
  )
};

export default Product;