import styles from "./ProductBtn.module.css";


const ProductBtn = () => {
  return (
    <button className={styles.itemProductBtn}>
      <figure className={styles.wrapperImg}>
        <img src="https://loremflickr.com/640/480" alt="product" className={styles.imgProduct} />
      </figure>
      <p>Hat</p>
    </button>
  )
};

export default ProductBtn;