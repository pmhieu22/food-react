import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import foodActions from "../../../../redux/food/action";

const AvailableMeals = () => {
  const dispatch = useDispatch();

  const foodItem = useSelector((state) => state.foodReducer.foodItem);

  useEffect(() => {
    dispatch(foodActions.actions.getFoodItems());
  }, [dispatch]);

  return;
};

export default AvailableMeals;
