import { combineReducers } from 'redux';
import AuthReducer from './auth_reducer';
import NavReducer from './router_reducer';
import EmployeeFormReducer from './employee_form_reducer';
import EmployeeReducer from './employee_reducer';

export default combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,
});
