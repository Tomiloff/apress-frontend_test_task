import Product from "./Product/Product";
import styles from "./Tbody.module.css"


const Tbody = ({products, openModal}) => {
  return (
    <tbody className={styles.tbody}>
      {products.map( ({id, name, createdAt, price, count, imageUrl}) => {
        return(
          <Product key={id} id={id} name={name} createdAt={createdAt} price={price} count={count} imageUrl={imageUrl} openModal={openModal} />
        )
      })}
    </tbody>
  )
};

export default Tbody;