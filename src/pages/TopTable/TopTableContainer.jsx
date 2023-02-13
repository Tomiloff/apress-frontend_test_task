import { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../common/TopTable/Header/Header";
import Table from "../../common/TopTable/Table/Table";
import { requestProducts } from "../../stores/reducers/topTable-reducer";
import styles from "./TopTable.module.css";
import crossIcon from "../../assets/all-images/icons/cross.svg";


const TopTableContainer = ({topTable, requestProducts}) => {

  useEffect(() => {
    console.log("render-top-table");
    requestProducts();
  }, []);

  const hideModal = () => {

  };
 
  return (
    <>
      <Header />
      <Table products={topTable.products} />
      <div className={styles.modalWrapper}>
        <div className={styles.modalProductCard}>
          <div className={styles.modalProductControl}>
            <button onClick={hideModal}>
              <img src={crossIcon} alt="crossIcon" />
            </button>
          </div>
          <h3 className={styles.modalProductTitle}>Hat</h3>
          <div className={styles.modalImgWrapper}>
            <img src="https://loremflickr.com/640/480" alt="imageProduct" className={styles.modalImg} />
          </div>
          <p className={styles.modalProductPrice}>₽4.95</p>
          <p className={styles.modalProductDescription}>В определенные исторические эпохи у ряда народов шляпа, как и другие элементы одежды, выполняла социальную функцию идентификации, указывая на принадлежность ее хозяин...</p>
          <p className={styles.modalProductCount}>Количество: 1</p>
          <a href="#" className={styles.modalProductLink}>Ссылка на товар</a>
        </div>
      </div>
    </>
  )
};


const mapStateToProps = (state) => {
  return {
    topTable: state.topTable
  }
};

export default connect(mapStateToProps, {requestProducts}) (TopTableContainer);