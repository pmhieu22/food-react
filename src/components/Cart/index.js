import { Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import FormInfoControl from "../FormInfoControl";
import CartItem from "./components/CartItem";

import styles from "./index.module.css";

const Cart = ({ onClose, cartIsShown }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [isShowControlCart, setIsShowControlCart] = useState(true);

  const foodItem = useSelector((state) => state.foodReducer.foodItem);

  const { meals, totalPrice } = foodItem;

  const cartItems = meals.map((meal) => {
    if (meal.amount) {
      return (
        <CartItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          amount={meal.amount}
          price={meal.price}
        />
      );
    }
    return null;
  });

  const handleInfoForm = () => {
    setIsShowForm(true);
    setIsShowControlCart(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={cartIsShown}
      footer={null}
      onCancel={onClose}
    >
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      {isShowControlCart ? (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onClose}>
            Close
          </button>

          <button className={styles.button} onClick={handleInfoForm}>
            Order
          </button>
        </div>
      ) : (
        ""
      )}
      {isShowForm ? <FormInfoControl /> : ""}
    </Modal>
  );
};

export default Cart;
