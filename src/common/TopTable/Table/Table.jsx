import styles from "./Table.module.css"
import TableHeader from "../../../features/TopTable/Table/TableHeader/TableHeader";
import MobileTableBody from "../../../features/TopTable/Table/MobileTableBody/MobileTableBody";
import DesktopTableBody from "../../../features/TopTable/Table/DesktopTableBody/DesktopTableBody";
import InvalidSearchMessage from "../../../components/TopTable/Validators/InvalidSearchMessage/InvalidSearchMessage";


const Table = ({openModal, pageWidth, filtredProductsName}) => {

  return (
    <table className={styles.table}>
      <TableHeader />
      <tbody className={styles.table_body}>
        {pageWidth >= 800 ? 
        <DesktopTableBody openModal={openModal} filtredProductsName={filtredProductsName} />
        : 
        (filtredProductsName.length === 0 ? <InvalidSearchMessage /> : filtredProductsName.map( ({id, name, createdAt, price, count, description, imageUrl, url}) => {
          return(
            <MobileTableBody key={id} name={name} createdAt={createdAt} price={price} count={count} description={description} imageUrl={imageUrl} url={url} openModal={openModal} />
          )
        }))
        }
      </tbody>
    </table>
  )
};

export default Table;