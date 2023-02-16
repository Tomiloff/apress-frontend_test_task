import styles from "./ExitButton.module.css";
import crossIcon from "../../../../assets/all-images/icons/cross.svg";


const ExitButton = ({hideModal}) => {
  return (
    <div className={styles.modal_product_control}>
      <button onClick={hideModal}>
        <img src={crossIcon} alt="crossIcon" />
      </button>
    </div>
  )
};

export default ExitButton;