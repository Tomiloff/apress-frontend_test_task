import styles from "./ModalProductContent.module.css"


const ModalProductContent = ({dataForModal}) => {
  return (
    <>
      <h3 className={styles.modal_product_title}>{dataForModal.name}</h3>
      <img src={dataForModal.imageUrl} alt="imageProduct" className={styles.modal_product_img} />
      <p className={styles.modal_product_price}>₽ {dataForModal.price}</p>
      <p className={styles.modal_product_description}>{dataForModal.description}</p>
      <p className={styles.modal_product_count}>Количество: {dataForModal.count}</p>
      <a href={dataForModal.url} className={styles.modal_product_link}>Ссылка на товар</a>
    </>
  )
};

export default ModalProductContent;