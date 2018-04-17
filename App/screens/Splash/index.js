import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class Splash extends Component {

    componentDidMount() {
        // if (newProps.isSuccesfullyGetUser !== this.props.isSuccesfullyGetUser) {
        setTimeout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                ]
            });

            this.props.navigation.dispatch(resetAction);
        }, 500);

        // }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#38D9E7' }}>
        
            </View>
        )
    }
};

export default Splash;
