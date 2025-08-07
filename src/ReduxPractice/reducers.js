const initialState ={
    user: null,
    loading: false,
    error: null,
};

export function authReducer(state = initialState, action){
switch(action.type){
    case 'LOGIN_REQUEST':
        return{...state, loading: true, error: null};
        case 'LOGIN_SUCCESS':
            return {...state, loading: false, user: action.payload};
            case 'LOGIN_FAILURE':
                return {...state, loading:false, user:action.payload};
                default:
                    return state;
}
}