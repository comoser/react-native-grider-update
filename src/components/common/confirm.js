import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './card_section';
import { Button } from './button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>
                        <Text>Yes</Text>
                    </Button>
                    <Button onPress={onDecline}>
                        <Text>No</Text>
                    </Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
};

export { Confirm };
