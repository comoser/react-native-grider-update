import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size = 'large' }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size}/>
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export { Spinner };
