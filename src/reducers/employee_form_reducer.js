import {
    EMPLOYEE_CREATE,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_UPDATE,
    EMPLOYEE_RESET, EMPLOYEE_EDIT, EMPLOYEE_EDIT_SUCCESS, EMPLOYEE_FIRE_SUCCESS, EMPLOYEE_FIRE,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
            };
            break;
        case EMPLOYEE_CREATE:
        case EMPLOYEE_EDIT:
        case EMPLOYEE_FIRE:
            return {
                ...state,
                loading: true,
            };
            break;
        case EMPLOYEE_CREATE_SUCCESS:
        case EMPLOYEE_EDIT_SUCCESS:
        case EMPLOYEE_FIRE_SUCCESS:
        case EMPLOYEE_RESET:
            return INITIAL_STATE;
            break;
    }
    return state;
}
