import ProductBtn from "../../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../../components/TopTable/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../../components/TopTable/Indicators/OutOfStock/OutOfStock";
import styles from "./Product.module.css";


const Product = ({name, createdAt, price, count}) => {

  const transformDate = createdAt
            .replace("-", "/")
            .replace("-", "/")
            .slice(0, 10)
            .split("/")
            .reverse()
            .join("/");
  
  return (
    <tr className={styles.rowProduct}>
      <td>
        <ProductBtn name={name} />
      </td>
      <td>{transformDate}</td>
      <td>₽ {price}</td>
      <td>{count}</td>
      <td>
        {Number(count) > 0 ? <AvailableInStock /> : <OutOfStock />}
      </td>
    </tr>
  )
};

export default Product;