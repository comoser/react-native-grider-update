import { NavigationActions } from 'react-navigation';
import { LOGIN_USER_SUCCESS } from '../actions/types';
import { routerInitialState, router, ROUTES } from '../components/router';

export default (state = routerInitialState, action) => {
    let nextState = null;
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
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
