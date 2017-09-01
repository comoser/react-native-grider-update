import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, outline = true }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity
            style={outline ? buttonStyle : { ...buttonStyle, borderWidth: 0 }}
            onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
};

export {
    Button,
};
