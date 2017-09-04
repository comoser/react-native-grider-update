import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import { ROUTES } from './router';

class ListItem extends Component {
    onRowPress() {
        this.props.navigation.navigate(ROUTES.EmployeeEditScreen, this.props.employee);
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    },
};

export default ListItem;
