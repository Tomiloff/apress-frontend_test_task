import styles from "./ProductBtn.module.css";


const ProductBtn = ({id, name, imageUrl, openModal}) => {
  return (
    <button id={id} onClick={openModal} className={styles.itemProductBtn}>
      <div className={styles.wrapperImg}>
        <img src={imageUrl} alt={name} className={styles.imgProduct} />
      </div>
      {name}
    </button>
  )
};

export default ProductBtn;