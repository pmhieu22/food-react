import { useState } from "react";
import CartIcon from "../Cart/components/CartIcon";

import styles from "./index.module.css";

const CardButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />

        <styles />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CardButton;
