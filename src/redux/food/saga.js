import { all, fork, takeEvery } from "redux-saga/effects";
import foodApi from "../../service/apis/foodApi";
import foodActions from "./action";

function* getFoodItems_saga(action) {
  try {
    console.log('a')
    const res = yield foodApi.getFoodList();
    console.log("1234", res);
  } catch (error) {
    console.log(error);
  }
}

function* listen() {
  yield takeEvery(foodActions.types.GET_FOOD_ITEMS, getFoodItems_saga);
}

export default function* foodSaga() {
  yield all([fork(listen)]);
}
