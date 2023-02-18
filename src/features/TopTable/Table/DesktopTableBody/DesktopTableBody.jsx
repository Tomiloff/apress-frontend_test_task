import Product from "./Product/Product";


const DesktopTableBody = ({products, openModal}) => {
  return (
    <tbody>
      {products.map( ({id, name, createdAt, price, count, imageUrl}) => {
        return(
          <Product key={id} name={name} createdAt={createdAt} price={price} count={count} imageUrl={imageUrl} openModal={openModal} />
        )
      })}
    </tbody>
  )
};

export default DesktopTableBody;