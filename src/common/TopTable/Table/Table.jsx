import styles from "./Table.module.css"
import Thead from "../../../features/TopTable/Table/Thead/Thead";
import Tbody from "../../../features/TopTable/Table/Tbody/Tbody";
import MobileTbody from "../../../features/TopTable/Table/MobileTbody/MobileTbody";


const Table = ({products, openModal}) => {
  return (
    <table className={styles.topTable}>
      <Thead />
      <Tbody products={products} openModal={openModal} />
      
      {products.map( ({id, name, createdAt, price, count, description, imageUrl, url}) => {
        return(
          <MobileTbody key={id} id={id} name={name} createdAt={createdAt} price={price} count={count} description={description} imageUrl={imageUrl} url={url} openModal={openModal} />
        )
      })}
      
    </table>
  )
};

export default Table;