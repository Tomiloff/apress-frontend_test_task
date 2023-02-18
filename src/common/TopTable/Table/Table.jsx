import styles from "./Table.module.css"
import TableHeader from "../../../features/TopTable/Table/TableHeader/TableHeader";
import MobileTableBody from "../../../features/TopTable/Table/MobileTableBody/MobileTableBody";
import DesktopTableBody from "../../../features/TopTable/Table/DesktopTableBody/DesktopTableBody";


const Table = ({products, openModal, pageWidth}) => {

  return (
    <table className={styles.table}>
      <TableHeader />

      {pageWidth >= 800 ? 
      <DesktopTableBody products={products} openModal={openModal} />
      : products.map( ({id, name, createdAt, price, count, description, imageUrl, url}) => {
        return(
          <MobileTableBody key={id} name={name} createdAt={createdAt} price={price} count={count} description={description} imageUrl={imageUrl} url={url} openModal={openModal} />
        )
      })
      }
    </table>
  )
};

export default Table;