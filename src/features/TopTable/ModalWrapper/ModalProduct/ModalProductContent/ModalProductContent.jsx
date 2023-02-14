import styles from "./ModalProductContent.module.css"


const ModalProductContent = ({dataForModal}) => {
  return (
    <>
      <h3 className={styles.modalProductTitle}>{dataForModal.name}</h3>
      <div className={styles.modalImgWrapper}>
        <img src={dataForModal.imageUrl} alt="imageProduct" className={styles.modalImg} />
      </div>
      <p className={styles.modalProductPrice}>₽ {dataForModal.price}</p>
      <p className={styles.modalProductDescription}>{dataForModal.description}</p>
      <p className={styles.modalProductCount}>Количество: {dataForModal.count}</p>
      <a href={dataForModal.url} className={styles.modalProductLink}>Ссылка на товар</a>
    </>
  )
};

export default ModalProductContent;