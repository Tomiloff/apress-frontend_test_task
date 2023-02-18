import styles from "./ModalProduct.module.css";
import ExitButton from "../../../../components/TopTable/Buttons/ModalBtn/ExitButton";
import ModalProductContent from "./ModalProductContent/ModalProductContent";


const ModalProduct = ({hideModal, dataForModal}) => {
  return (
    <div className={styles.modal_product_card}>
      <ExitButton hideModal={hideModal} />
      <ModalProductContent dataForModal={dataForModal} />
    </div>
  )
};

export default ModalProduct;