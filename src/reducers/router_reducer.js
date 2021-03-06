import { NavigationActions } from 'react-navigation';
import { LOGIN_USER_SUCCESS, EMPLOYEE_CREATE_SUCCESS, EMPLOYEE_EDIT_SUCCESS, EMPLOYEE_FIRE_SUCCESS } from '../actions/types';
import { routerInitialState, router, ROUTES } from '../components/router';

export default (state = routerInitialState, action) => {
    let nextState = null;
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
        case EMPLOYEE_CREATE_SUCCESS:
        case EMPLOYEE_EDIT_SUCCESS:
        case EMPLOYEE_FIRE_SUCCESS:
            nextState = router.getStateForAction(
                NavigationActions.navigate({ routeName: ROUTES.EmployeeListScreen }),
                state
            );
            break;
        default:
            nextState = router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};
