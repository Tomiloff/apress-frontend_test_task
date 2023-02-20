import styles from "./ModalWrapper.module.css";
import classNames from "classnames";
import ModalProduct from "./ModalProduct/ModalProduct";


const ModalWrapper = ({displayModal, hideModal, dataForModal}) => {
  return (
    <div onClick={e => e.currentTarget === e.target && hideModal()} className={classNames(displayModal ? styles.modal_wrapper_hide : styles.modal_wrapper)}>
      <ModalProduct hideModal={hideModal} dataForModal={dataForModal} />
    </div>
  )
};

export default ModalWrapper;