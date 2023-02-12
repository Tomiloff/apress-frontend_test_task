import ProductBtn from "../../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import styles from "./Product.module.css";


const Product = () => {
  return (
    <tr className={styles.rowProduct}>
      <td>
        <ProductBtn />
      </td>
      <td>13/05/2022</td>
      <td>₽4.95</td>
      <td>1</td>
      <td>
        <p className={styles.indicatorYes}>Есть на складе</p>
      </td>
    </tr>
  )
};

export default Product;