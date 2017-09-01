import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL, LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
            break;
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
            break;
        case LOGIN_USER:
            return {
                ...state,
                loading: true,
                error: '',
            };
            break;
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload,
            };
            break;
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication Failed.',
                password: '',
                loading: false,
            };
            break;
    }
    return state;
};
