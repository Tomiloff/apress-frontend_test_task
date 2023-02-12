import styles from "./Table.module.css"
import Thead from "../../../features/TopTable/Table/Thead/Thead";
import Tbody from "../../../features/TopTable/Table/Tbody/Tbody";


const Table = () => {
  return (
    <table className={styles.topTable}>
      <Thead />
      <Tbody />
    </table>
  )
};

export default Table;