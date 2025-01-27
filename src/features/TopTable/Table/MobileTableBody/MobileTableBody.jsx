import ProductBtn from "../../../../components/TopTable/Buttons/ProductBtn/ProductBtn";
import AvailableInStock from "../../../../components/TopTable/Indicators/AvailableInStock/AvailableInStock";
import OutOfStock from "../../../../components/TopTable/Indicators/OutOfStock/OutOfStock";
import styles from "./MobileTableBody.module.css";
import { dateConverter } from "../../../../utils/dateConverter/dateConverter";


const MobileTableBody = ({name, price, imageUrl, createdAt, count, openModal}) => {

  return (
    <>
      <tr className={styles.mobile_table_row_title}>
        <td className={styles.mobile_table_cell}>
          <ProductBtn name={name} imageUrl={imageUrl} openModal={openModal} />
        </td>
        <td></td>
      </tr>
      <tr className={styles.mobile_table_row}>
        <td className={styles.mobile_table_cell}>Дата создания</td>
        <td className={styles.mobile_table_cell}>{dateConverter(createdAt)}</td>
      </tr>
      <tr className={styles.mobile_table_row}>
        <td className={styles.mobile_table_cell}>Цена</td>
        <td className={styles.mobile_table_cell}>₽ {price}</td>
      </tr>
      <tr className={styles.mobile_table_row}>
        <td className={styles.mobile_table_cell}>Количество</td>
        <td className={styles.mobile_table_cell}>{count}</td>
      </tr>
      <tr className={styles.mobile_table_row}>
        <td className={styles.mobile_table_cell}>Наличие</td>
        <td className={styles.mobile_table_cell}>{Number(count) ? <AvailableInStock /> : <OutOfStock />}</td>
      </tr>
    </>
  )
};

export default MobileTableBody;