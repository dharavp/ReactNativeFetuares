import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CustomButton } from 'atoms';
import { ToolBar } from 'atoms';
class TabNavigate extends Component {
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
            <ToolBar
                    title='Tab Navigate'
                    isBackHide={false}
                    leftImage={require('@assets/images/ic_back_arrow.png')}
                    onBackPress={() => {
                        this.props.navigation.goBack(null);
                    }} />
                <Text style={textItemStyle}>{this.props.navigation.state.params.name}</Text>
            </View>);
    }
};
const styles = {
    container: {
        // backgroundColor: '#B5D6A8',
        backgroundColor: 'white',
        flex: 1
    },
    textItemStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400'
    }
};

export default TabNavigate;