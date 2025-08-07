// import { type } from "@testing-library/user-event/dist/type"

export const loginRequest =(credentials)=>({
    type:'LOGIN_REQUEST',
    payload: credentials,
});

export const loginSuccess = (user)=>({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const loginFailure = (error)=>({
    type: 'LOGIN_FAILURE',
    payload: error,
});