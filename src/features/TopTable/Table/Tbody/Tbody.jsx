import Product from "./Product/Product";
import styles from "./Tbody.module.css"


const Tbody = ({products, openModal}) => {
  return (
    <tbody>
      {products.map( ({id, name, createdAt, price, count, description, imageUrl, url}) => {
        return(
          <Product key={id} id={id} name={name} createdAt={createdAt} price={price} count={count} description={description} imageUrl={imageUrl} url={url} openModal={openModal} />
        )
      })}
    </tbody>
  )
};

export default Tbody;