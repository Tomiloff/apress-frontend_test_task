import styles from "./ProductBtn.module.css";


const ProductBtn = ({name}) => {
  return (
    <button className={styles.itemProductBtn}>
      <figure className={styles.wrapperImg}>
        <img src="https://loremflickr.com/640/480" alt="product" className={styles.imgProduct} />
      </figure>
      <p>{name}</p>
    </button>
  )
};

export default ProductBtn;