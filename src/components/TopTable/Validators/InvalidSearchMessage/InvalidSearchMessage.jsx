import styles from "./InvalidSearchMessage.module.css";


const InvalidSearchMessage = () => {
  return (
    <tr>
      <td className={styles.invalid_search_message}>Товары не найдены. Измените запрос.</td>
    </tr>
  )
};

export default InvalidSearchMessage;