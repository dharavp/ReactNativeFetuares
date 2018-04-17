import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NavigationMenu extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)
    }

    navigateToScreen = (route) => {
        this.props.navigation.navigate(route);
    }

    render() {
        const { container, logoStyle, bgColorGreen, bgColorRed, itemContainer, imageItemStyle, textItemStyle, bgColorGrey } = styles;
        return (
            <View style={container}>
                <Text style={textItemStyle} onPress={() => {
                    { this.navigateToScreen('Map') }
                }}>Map</Text>
                <Text style={textItemStyle} onPress={() => {
                    { this.navigateToScreen('Tab') }
                }}>Tab</Text>
            </View>);
    }
};
const styles = {
    container: {
        // backgroundColor: '#B5D6A8',
        backgroundColor: 'white',
        padding: 20,
        flex: 1
    },
    textItemStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        height: 35,
        marginTop: 5
    }
};

export default NavigationMenu;