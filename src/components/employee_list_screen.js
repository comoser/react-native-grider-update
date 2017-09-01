import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ROUTES } from '../components/router';
import { Button } from '../components/common';

class EmployeeListScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { navigate } = navigation;
        return {
            ...screenProps,
            title: 'Employee List',
            headerLeft: null,
            gesturesEnabled: false,
            headerRight: (
                <Button
                    onPress={() => navigate(ROUTES.EmployeeEditScreen)}
                    outline={false}>
                    Add
                </Button>
            ),
        }
    };

    render() {
        return (
            <View>
                <Text>ola</Text>
            </View>
        );
    }
}

export default EmployeeListScreen;
