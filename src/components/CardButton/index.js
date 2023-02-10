import { useState } from "react";
import { useSelector } from "react-redux";
import CartIcon from "../Cart/components/CartIcon";

import styles from "./index.module.css";

const CardButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const foodItem = useSelector((state) => state.foodReducer.foodItem);

  const { totalAmount } = foodItem;

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />

        <styles />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalAmount}</span>
    </button>
  );
};

export default CardButton;
