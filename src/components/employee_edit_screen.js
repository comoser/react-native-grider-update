import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from '../components/common';
import { employeeUpdate } from '../actions';

class EmployeeEditScreen extends Component {
    static navigationOptions = ({ screenProps }) => {
        return {
            ...screenProps,
            title: 'Create Employee',
        }
    };

    render() {
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
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
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

function mapStateToProps({ employeeForm: { name, phone, shift } }) {
    return {
        name,
        phone,
        shift,
    };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEditScreen);
