import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import Communications from 'react-native-communications';
import { Card, CardSection, Input, Button, Spinner, Confirm } from '../components/common';
import { employeeUpdate, employeeCreate, employeeReset, employeeEdit, employeeFire } from '../actions';

class EmployeeEditScreen extends Component {
    state = { showModal: false };

    static navigationOptions = ({ navigation, screenProps }) => {
        const title = navigation.state.params ? 'Edit' : 'Create';
        return {
            ...screenProps,
            title: `${title} Employee`,
        }
    };

    componentDidMount() {
        const { editing, employee, employeeUpdate, employeeReset } = this.props;
        if (editing) _.map(employee, (value, prop) => employeeUpdate({ prop, value }));
        else employeeReset();
    }


    onCreatePress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    onEditPress() {
        const { name, phone, shift, employee: { uid } } = this.props;
        this.props.employeeEdit({ name, phone, shift: shift || 'Monday', uid  });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFireEmployeePress() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        const { employee: { uid } } = this.props;
        this.setState({ showModal: false });
        this.props.employeeFire({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    renderButton() {
        if (this.props.loading) return <Spinner size="large"/>;
        if (this.props.editing) {
            return [
                <Button
                    key="edit_button"
                    btnStyle={{ flex: 0 }}
                    onPress={this.onEditPress.bind(this)}>
                    Edit
                </Button>,
                <Button
                    key="message_button"
                    btnStyle={{
                        flex: 0,
                        marginTop: 5,
                    }}
                    onPress={this.onTextPress.bind(this)}>
                    Text Schedule
                </Button>,
                <Button
                    key="delete_button"
                    btnStyle={{
                        flex: 0,
                        borderColor: 'red',
                        marginTop: 5,
                    }}
                    txtStyle={{ color: 'red' }}
                    onPress={this.onFireEmployeePress.bind(this)}>
                    Fire Employee
                </Button>
            ];
        }
        return (
            <Button onPress={this.onCreatePress.bind(this)}>
                Create
            </Button>
        );
    }

    render() {
        const buttonContainerStyle = this.props.editing ? { flexDirection: 'column' } : {};
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
                <CardSection style={buttonContainerStyle}>
                    {this.renderButton()}
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}>
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
};

function mapStateToProps({ employeeForm: { name, phone, shift, loading } }, ownProps) {
    const employee = ownProps.navigation.state.params;
    const editing = !!employee;
    return {
        name,
        phone,
        shift,
        loading,
        editing,
        employee,
    };
}

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate, employeeReset, employeeEdit, employeeFire,
})(EmployeeEditScreen);
