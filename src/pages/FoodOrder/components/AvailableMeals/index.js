import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../../../components/Card";
import MealControl from "../../../../components/MealControl";

import styles from "./index.module.css";

const AvailableMeals = () => {
  const foodItem = useSelector((state) => state.foodReducer.foodItem);

  console.log(foodItem.totalPrice);

  const { meals } = foodItem;

  const mealItem = meals.map((item, index) => (
    <MealControl
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      key={index}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealItem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
