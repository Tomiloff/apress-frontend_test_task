import InvalidSearchMessage from "../../../../components/TopTable/Validators/InvalidSearchMessage/InvalidSearchMessage";
import Product from "./Product/Product";


const DesktopTableBody = ({openModal, filtredProductsName}) => {
  return (
    <>
      {filtredProductsName.length === 0 ? <InvalidSearchMessage /> : filtredProductsName.map( ({id, name, createdAt, price, count, imageUrl}) => {
        return(
          <Product key={id} name={name} createdAt={createdAt} price={price} count={count} imageUrl={imageUrl} openModal={openModal} />
        )
      })}
    </>
  )
};

export default DesktopTableBody;