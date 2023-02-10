import { useDispatch } from "react-redux";
import useActions from "../../../../redux/useActions";
import styles from "./index.module.css";

const CartItem = ({ name, price, amount, id }) => {
  const dispatch = useDispatch();
  const { foodActions } = useActions();

  const handleAddItem = () => {
    console.log("a");
    dispatch(foodActions.actions.addFood(id, { amount: 1 }));
  };

  const handleSubItem = () => {
    dispatch(foodActions.actions.removeFood(id));
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={handleSubItem}>−</button>

        <button onClick={handleAddItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
