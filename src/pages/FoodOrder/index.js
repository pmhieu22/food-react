import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cart from "../../components/Cart";
import Header from "../../components/Header";
import useActions from "../../redux/useActions";
import AvailableMeals from "./components/AvailableMeals";
import MealsSummary from "./components/MealsSummary";

import styles from "./index.module.css";

const FoodOrder = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const dispatch = useDispatch();
  const { foodActions } = useActions();

  useEffect(() => {
    dispatch(foodActions.actions.getFoodItems());
  }, [dispatch, foodActions]);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} cartIsShown={cartIsShown} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </>
  );
};

export default FoodOrder;
