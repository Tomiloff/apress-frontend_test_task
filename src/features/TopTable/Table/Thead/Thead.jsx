import styles from "./Thead.module.css"
import arrowsIcon from "../../../../assets/all-images/icons/arrows.svg";


const Thead = () => {
  return (
    <thead className={styles.thead}>
        <tr className={styles.topTableTitles}>
          <th>Имя товара</th>
          <th>
            <button className={styles.dateFilterBtn}>
              <img src={arrowsIcon} alt="Arrows" />
            </button>
            Дата создания
          </th>
          <th>
            <button className={styles.priceFilterBtn}>
              <img src={arrowsIcon} alt="Arrows" />
            </button>
            Цена
          </th>
          <th>Количество</th>
          <th>Наличие</th>
        </tr>
      </thead>
  )
};

export default Thead;