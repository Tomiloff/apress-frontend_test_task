import styles from "./ProductBtn.module.css";


const ProductBtn = ({id, name, imageUrl, openModal}) => {
  return (
    <button id={id} onClick={openModal} className={styles.itemProductBtn}>
      <figure className={styles.wrapperImg}>
        <img src={imageUrl} alt="product" className={styles.imgProduct} />
      </figure>
      <p>{name}</p>
    </button>
  )
};

export default ProductBtn;