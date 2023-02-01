import Modal from "../Modal";
import styles from "./index.module.css";

const Cart = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      {}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        {<button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
