import styles from "./ModalWrapper.module.css";
import classNames from "classnames";
import ModalProduct from "./ModalProduct/ModalProduct";


const ModalWrapper = ({hide, hideModal, dataForModal}) => {
  return (
    <div className={classNames(hide ? styles.modal_wrapper_hide : styles.modal_wrapper)}>
      <ModalProduct hideModal={hideModal} dataForModal={dataForModal} />
    </div>
  )
};

export default ModalWrapper;