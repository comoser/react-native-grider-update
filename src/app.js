import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { addNavigationHelpers } from 'react-navigation';
import { AppNavigator } from './components/router';
import reducers from './reducers';

const App = ({ dispatch, nav }) => (
    <AppNavigator
        screenProps={{ headerStyle: styles.headerStyle }}
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
);
const AppWithNavigationState = connect(() => ({ nav }) => ({ nav }))(App);
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class NavigationalApp extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDGC3_NaCfhCRLKhcdJwQj665yp481_Tjk',
            authDomain: 'manager-668f2.firebaseapp.com',
            databaseURL: 'https://manager-668f2.firebaseio.com',
            projectId: 'manager-668f2',
            storageBucket: '',
            messagingSenderId: '294224814138'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

const styles = {
    headerStyle: {
        backgroundColor: '#fff',
    },
};

export default NavigationalApp;
