import styles from "./ExitButton.module.css";


const ExitButton = ({hideModal}) => {
  return <button className={styles.modal_product_btn} onClick={hideModal}></button>
};

export default ExitButton;