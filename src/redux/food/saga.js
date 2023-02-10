import { all, fork, put, select, takeEvery } from "redux-saga/effects";
import foodApi from "../../service/apis/foodApi";
import foodActions from "./action";

function* getFoodItems_saga(action) {
  try {
    let mealItems = [];

    const foodItem = yield select((state) => state.foodReducer.foodItem);

    const res = yield foodApi.getFoodList();

    if (res) {
      for (const meal in res) {
        mealItems.push(res[meal]);
      }
    }

    yield put(
      foodActions.actions.updateState({
        foodItem: {
          ...foodItem,
          meals: mealItems,
          isLoading: false,
        },
      })
    );
  } catch (error) {
    console.log(error);
    //   yield put(
    //     foodActions.actions.updateState({
    //       foodItem: {
    //         meals: [],
    //         isLoading: false,
    //       },
    //     })
    //   );
  }
}

function* addFood_saga(action) {
  try {
    const params = action.payload;
    console.log("param", params)

    const foodItem = yield select((state) => state.foodReducer.foodItem);

    const { amount } = params.amount;

    const { totalAmount, totalPrice, meals } = foodItem;

    if (params.id) {
      const foundFoodIndex = meals.findIndex((meal) => meal.id === params.id);
      if (foundFoodIndex !== -1 && amount) {
        const updatedTotalPrice =
          totalPrice + amount * meals[foundFoodIndex].price;

        const updatedTotalAmount = totalAmount + amount;
        let updatedAmount = amount;
        console.log("c", updatedTotalAmount);

        if (meals[foundFoodIndex].amount) {
          console.log("meal amount", meals.amount);
          updatedAmount = meals[foundFoodIndex].amount + amount;
        }

        console.log(updatedAmount);

        const updatedItemObject = {
          ...meals[foundFoodIndex],
          amount: updatedAmount,
        };

        console.log(updatedItemObject);

        const updatedItemArr = [
          ...meals.slice(0, foundFoodIndex),
          updatedItemObject,
          ...meals.slice(foundFoodIndex + 1),
        ];

        yield put(
          foodActions.actions.updateState({
            foodItem: {
              ...foodItem,
              meals: updatedItemArr,
              totalPrice: updatedTotalPrice,
              totalAmount: updatedTotalAmount,
            },
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* removeFood_saga(action) {
  try {
    const { id } = action.payload;

    const foodItem = yield select((state) => state.foodReducer.foodItem);

    const { meals, totalPrice, totalAmount } = foodItem;
    const _list = meals;

    if (id) {
      const foundFoodItem = _list.findIndex((item) => item.id === id);

      if (foundFoodItem !== -1) {
        const updatedTotalPrice = totalPrice - meals[foundFoodItem].price;
        const updatedTotalAmount = totalAmount - 1;

        // if (meals[foundFoodItem].amount && meals[foundFoodItem].amount === 1) {
        //   const removedItem = _list.filter((item) => item.id !== id);

        //   yield put(
        //     foodActions.actions.updateState({
        //       foodItem: {
        //         meals: removedItem,
        //         totalPrice: updatedTotalPrice,
        //         totalAmount: updatedTotalAmount,
        //         isLoading: false,
        //       },
        //     })
        //   );
        // }

        if (meals[foundFoodItem].amount && meals[foundFoodItem].amount) {
          const updatedAmount = meals[foundFoodItem].amount - 1;

          const updatedItemObject = {
            ...meals[foundFoodItem],
            amount: updatedAmount,
          };

          const updatedItemArr = [
            ..._list.slice(0, foundFoodItem),
            updatedItemObject,
            ..._list.slice(foundFoodItem + 1),
          ];

          yield put(
            foodActions.actions.updateState({
              foodItem: {
                meals: updatedItemArr,
                totalPrice: updatedTotalPrice,
                totalAmount: updatedTotalAmount,
                isLoading: false,
              },
            })
          );
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function* listen() {
  yield takeEvery(foodActions.types.GET_FOOD_ITEMS, getFoodItems_saga);
  yield takeEvery(foodActions.types.ADD_FOOD, addFood_saga);
  yield takeEvery(foodActions.types.REMOVE_FOOD, removeFood_saga);
}

export default function* foodSaga() {
  yield all([fork(listen)]);
}
