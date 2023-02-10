import { all } from "redux-saga/effects";
import foodSaga from "./food/saga";

export default function* rootSaga() {
  yield all([foodSaga()]);
}
