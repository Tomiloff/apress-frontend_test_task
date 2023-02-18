import styles from "./ProductBtn.module.css";


const ProductBtn = ({name, imageUrl, openModal}) => {
  return (
    <button onClick={() => openModal(name)} className={styles.product_btn}>
      <div className={styles.product_btn_wrapper}>
        <img src={imageUrl} alt={name} className={styles.product_btn_img} />
      </div>
      {name}
    </button>
  )
};

export default ProductBtn;