import firebase from 'firebase';
import {
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_RESET,
    EMPLOYEE_EDIT,
    EMPLOYEE_EDIT_SUCCESS,
    EMPLOYEE_FIRE,
    EMPLOYEE_FIRE_SUCCESS,
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value },
    };
};

export const employeeReset = () => {
    return { type: EMPLOYEE_RESET };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser: { uid } } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: EMPLOYEE_CREATE });
        firebase.database().ref(`/users/${uid}/employees`)
        .push({ name, phone, shift })
        .then(() => dispatch({ type: EMPLOYEE_CREATE_SUCCESS }));
    };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: EMPLOYEE_EDIT });
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => dispatch({ type: EMPLOYEE_EDIT_SUCCESS }));
    };
};

export const employeeFire = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: EMPLOYEE_FIRE });
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => dispatch({ type: EMPLOYEE_FIRE_SUCCESS }));
    };
};

export const employeesFetch = () => {
    const { currentUser: { uid } } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${uid}/employees`)
        .on('value', (snapshot) => {
            dispatch({
                type: EMPLOYEES_FETCH_SUCCESS,
                payload: snapshot.val(),
            });
        });
    };
};
