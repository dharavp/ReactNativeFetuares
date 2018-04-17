import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from 'atoms';

class TabOne extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)
    }

    render() {
        const { container, logoStyle, bgColorGreen, bgColorRed, itemContainer, imageItemStyle, textItemStyle, bgColorGrey } = styles;
        return (
            <View style={container}>
                <Text style={textItemStyle}>Tab One</Text>
                {/* <CustomButton
                    label="CLICK"
                    onButtonPress={() => {
                        this.props.navigation.navigate('TabNavigate', { name: "Hello" });
                    }}
                /> */}
            </View>);
    }
};
const styles = {
    container: {
        // backgroundColor: '#B5D6A8',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    textItemStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400'
    }
};

export default TabOne;