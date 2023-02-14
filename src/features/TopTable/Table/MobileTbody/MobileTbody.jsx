import ProductBtn from "../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../components/TopTable/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../components/TopTable/Indicators/OutOfStock/OutOfStock";
import styles from "./MobileTbody.module.css";


const MobileTbody = ({id, name, price, imageUrl, createdAt, count, openModal}) => {

  const transformDate = createdAt
            .replace("-", "/")
            .replace("-", "/")
            .slice(0, 10)
            .split("/")
            .reverse()
            .join("/");

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
        <td>{transformDate}</td>
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
        <td>{Number(count) > 0 ? <AvailableInStock /> : <OutOfStock />}</td>
      </tr>
    </tbody>
  )
};

export default MobileTbody;