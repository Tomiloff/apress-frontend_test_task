import ProductBtn from "../../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../../components/TopTable/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../../components/TopTable/Indicators/OutOfStock/OutOfStock";
import styles from "./Product.module.css";
import { dateConverter } from "../../../../../utils/dateConverter/dateConverter";


const Product = ({id, name, createdAt, price, count, imageUrl, openModal}) => {

 
  
  return (
    <tr className={styles.rowProduct}>
      <td>
        <ProductBtn id={id} name={name} imageUrl={imageUrl} openModal={openModal} />
      </td>
      <td>{dateConverter(createdAt)}</td>
      <td>₽ {price}</td>
      <td>{count}</td>
      <td>
        {Number(count) > 0 ? <AvailableInStock /> : <OutOfStock />}
      </td>
    </tr>
  )
};

export default Product;