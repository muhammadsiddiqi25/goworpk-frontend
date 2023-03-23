import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
