
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { reducers } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ...reducers,
  },
  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export { store };
