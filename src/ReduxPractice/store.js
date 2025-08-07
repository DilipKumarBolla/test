import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./reducers";
import { rootSaga } from "./sagas";


const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(rootSaga);