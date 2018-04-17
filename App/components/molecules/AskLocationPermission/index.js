import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const AskLocationPermission = ({ onButtonPress }) => {

    const { buttonStyle, textStyle, container } = styles;
    return (
        <View style={container}>
            <Text style={[textStyle, { marginBottom: 10 }]}>Enable Access so you can use Further Features.</Text>
            <TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
                <Text style={textStyle}>Enable Location Access</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: '400'
    },
    buttonStyle: {
        alignSelf: 'stretch',
        borderRadius: 2,
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 0,
        borderColor: '#007aff',
        height: 30,
        padding: 10,
        backgroundColor: '#38D9E7',
        justifyContent: 'center'
    }
};

export default AskLocationPermission;