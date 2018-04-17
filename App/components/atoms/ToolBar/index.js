import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Text, Image, TouchableOpacity, BackHandler, Platform } from 'react-native';
import { getContainer } from '../../../Root';

class ToolBar extends Component {
    componentWillMount() {
        if (Platform.OS === 'android' && !this.props.isBackHide) {
            BackHandler.addEventListener('hardwareBackPress', () => {
                if (getContainer) {
                    console.log(getContainer().props.navigation.state.routes.length);
                    if (getContainer().props.navigation.state.routes.length === 1) {
                        BackHandler.exitApp();
                        return true;
                    }
                    getContainer().props.navigation.dispatch(NavigationActions.back());
                    return true;
                } else {
                    console.log(false);
                    return false;
                }
            });
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android' && !this.props.isBackHide) {
            BackHandler.removeEventListener('hardwareBackPress');
        }
    }
    render() {
        const { onBackPress, leftImage, title, moreStyle, headerTextStyle } = this.props;
        const { containerStyle, textStyle, navigationImageStyle, navigationBackgrondStyle } = styles;
        return (
            <View style={[containerStyle, moreStyle]}>
                <TouchableOpacity onPress={onBackPress} style={navigationBackgrondStyle}>
                    <Image source={leftImage} style={navigationImageStyle} />
                </TouchableOpacity>
                <Text style={[textStyle, headerTextStyle]}>{title}</Text>
            </View>
        );
    };
}

const styles = {
    textStyle: {
        color: 'black',
        fontWeight: 500,
        fontSize: 16,
        alignItems: 'center',
        fontWeight: '500'
    },
    containerStyle: {
        paddingTop: Platform.OS == 'ios' ? 15.0 : 0.0,
        alignSelf: 'stretch',
        height: Platform.OS == 'ios' ? 64.0 : 48.0,
        backgroundColor: '#38D9E7',
        flexDirection: 'row',
        alignItems: 'center',
    },
    navigationImageStyle: {
        width: 16,
        height: 16,
        alignItems: 'center'
    },
    navigationBackgrondStyle: {
        padding: 12
    }
};

export default ToolBar;