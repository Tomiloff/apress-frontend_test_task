import styles from "./TableHeader.module.css"
import arrowsIcon from "../../../../assets/all-images/icons/arrows.svg";


const TableHeader = () => {
  return (
    <thead className={styles.table_header}>
        <tr className={styles.table_header_titles}>
          <th className={styles.header_titles_name}>Имя товара</th>
          <th className={styles.header_titles_name}>
            <button className={styles.titles_btn_sort}>
              <img src={arrowsIcon} alt="sort button" />
            </button>
            Дата создания
          </th>
          <th className={styles.header_titles_name}>
            <button className={styles.titles_btn_sort}>
              <img src={arrowsIcon} alt="sort button" />
            </button>
            Цена
          </th>
          <th className={styles.header_titles_name}>Количество</th>
          <th className={styles.header_titles_name}>Наличие</th>
        </tr>
      </thead>
  )
};

export default TableHeader;