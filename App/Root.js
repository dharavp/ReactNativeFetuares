import { AppRegistry, Platform } from 'react-native';
import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import appReducer from './store';
import AppRouteConfig from './store/AppRouteConfig';
import thunk from 'redux-thunk';

export function getContainer() {
    return _container;
}

let _container;

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);
const addListener = createReduxBoundAddListener('root');


class App extends React.Component {

    render() {
        return (
            <AppRouteConfig
                ref={(navigatorRef) => {
                    _container = navigatorRef;
                }}


                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })} />
        );
    }
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
    appReducer,
    compose(applyMiddleware(thunk)),
);

class Root extends React.Component {
   
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default Root;