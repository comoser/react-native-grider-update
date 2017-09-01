import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secure, keyboardType = 'default' }) => {
    const { containerStyle, inputStyle, labelStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                secureTextEntry={secure}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
};

export {
    Input,
};
