import { StackNavigator } from 'react-navigation';
import LoginScreen from './login_screen';
import EmployeeListScreen from './employee_list_screen';
import EmployeeEditScreen from './employee_edit_screen';

export const ROUTES = {
    LoginScreen: 'LoginScreen',
    EmployeeListScreen: 'EmployeeListScreen',
    EmployeeEditScreen: 'EmployeeEditScreen',
};
export const AppNavigator = StackNavigator({
    [ROUTES.LoginScreen]: { screen: LoginScreen },
    [ROUTES.EmployeeListScreen]: { screen: EmployeeListScreen },
    [ROUTES.EmployeeEditScreen]: { screen: EmployeeEditScreen },
});
export const { router } = AppNavigator;
export const routerInitialState = router.getStateForAction(
    router.getActionForPathAndParams(ROUTES.LoginScreen)
);