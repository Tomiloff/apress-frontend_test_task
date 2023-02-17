import styles from "./Table.module.css"
import TableHeader from "../../../features/TableContainer/Table/TableHeader/TableHeader";
import MobileTbody from "../../../features/TableContainer/Table/MobileTbody/MobileTbody";
import TableBody from "../../../features/TableContainer/Table/TableBody/TableBody";


const Table = ({products, openModal}) => {
  return (
    <table className={styles.table}>
      <TableHeader />
      <TableBody products={products} openModal={openModal} />
      
      {products.map( ({id, name, createdAt, price, count, description, imageUrl, url}) => {
        return(
          <MobileTbody key={id} name={name} createdAt={createdAt} price={price} count={count} description={description} imageUrl={imageUrl} url={url} openModal={openModal} />
        )
      })}
      
    </table>
  )
};

export default Table;