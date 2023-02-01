import mealsImage from "../../assets/images/meals.jpg";
import CardButton from "../CardButton";

import styles from "./index.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CardButton onClick={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
