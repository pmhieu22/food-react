import { useState } from "react";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import AvailableMeals from "./components/AvailableMeals";
import MealsSummary from "./components/MealsSummary";

import styles from "./index.module.css";

const FoodOrder = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </>
  );
};

export default FoodOrder;
