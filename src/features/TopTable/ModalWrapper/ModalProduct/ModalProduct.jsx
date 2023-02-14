import styles from "./ModalProduct.module.css";
import ExitButton from "../../../../components/TopTable/Buttons/ModalBtn/ExitButton";
import ModalProductContent from "./ModalProductContent/ModalProductContent";


const ModalProduct = ({hideModal, dataForModal}) => {
  return (
    <div className={styles.modalProductCard}>
      <ExitButton hideModal={hideModal} />
      <ModalProductContent dataForModal={dataForModal} />
    </div>
  )
};

export default ModalProduct;