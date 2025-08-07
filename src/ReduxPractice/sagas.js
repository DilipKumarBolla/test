// import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "./actions";
// import axios from "axios";

function* loginSaga(action){
    try{
        // const response  = yield call(axios.post,'https://jsonplaceholder.typicode.com/posts', action.payload);
        
        const user = {name: 'Dilip Kumar', token: 'abc123'};
        yield put(loginSuccess(user));
        localStorage.setItem('token', user.token);
    } catch{
        yield put(loginFailure('Invalid email and password'));

    }
}

export function* rootSaga(){
    yield takeLatest('LOGIN_REQUEST', loginSaga)
}