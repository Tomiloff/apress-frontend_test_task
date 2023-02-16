import ProductBtn from "../../../../components/TableContainer/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../components/TableContainer/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../components/TableContainer/Indicators/OutOfStock/OutOfStock";
import styles from "./MobileTbody.module.css";
import { dateConverter } from "../../../../utils/dateConverter/dateConverter";


const MobileTbody = ({id, name, price, imageUrl, createdAt, count, openModal}) => {

  return (
    <tbody className={styles.cardProduct}>
      <tr>
        <td>
          <ProductBtn id={id} name={name} imageUrl={imageUrl} openModal={openModal} />
        </td>
        <td></td>
      </tr>
      <tr>
        <td>Дата создания</td>
        <td>{dateConverter(createdAt)}</td>
      </tr>
      <tr>
        <td>Цена</td>
        <td>₽ {price}</td>
      </tr>
      <tr>
        <td>Количество</td>
        <td>{count}</td>
      </tr>
      <tr>
        <td>Наличие</td>
        <td>{Number(count) ? <AvailableInStock /> : <OutOfStock />}</td>
      </tr>
    </tbody>
  )
};

export default MobileTbody;