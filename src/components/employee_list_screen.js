import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { ROUTES } from '../components/router';
import { Button, Spinner } from '../components/common';
import ListItem from './list_item';
import { employeesFetch } from '../actions';

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
                    btnStyle={{ borderWidth: 0 }}>
                    Add
                </Button>
            ),
        }
    };

    keyExtractor = (item) => item.name;

    componentDidMount() {
        this.props.employeesFetch();
    }

    renderRow({ item }) {
        return (
            <ListItem employee={item} {...this.props}/>
        );
    }

    render() {
        if (!this.props.employees.length) return <Spinner size="large"/>;
        return (
            <FlatList
                data={this.props.employees}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderRow.bind(this)}
            />
        );
    }
}

function mapStateToProps({ employees }) {
    return {
        employees: _.map(employees, (value, uid) => {
            return { ...value, uid };
        }),
    };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeListScreen);
