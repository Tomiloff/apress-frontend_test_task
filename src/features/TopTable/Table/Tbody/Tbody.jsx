import Product from "./Product/Product";
import styles from "./Tbody.module.css"


const Tbody = ({products}) => {
  return (
    <tbody>
      {products.map( ({id, name, createdAt, price, count}) => {
        return(
          <Product key={id} name={name} createdAt={createdAt} price={price} count={count} />
        )
      })}
    </tbody>
  )
};

export default Tbody;