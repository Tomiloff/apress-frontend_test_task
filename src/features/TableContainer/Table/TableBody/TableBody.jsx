import Product from "./Product/Product";
import styles from "./TableBody.module.css"


const TableBody = ({products, openModal}) => {
  return (
    <tbody className={styles.table_body}>
      {products.map( ({id, name, createdAt, price, count, imageUrl}) => {
        return(
          <Product key={id} name={name} createdAt={createdAt} price={price} count={count} imageUrl={imageUrl} openModal={openModal} />
        )
      })}
    </tbody>
  )
};

export default TableBody;