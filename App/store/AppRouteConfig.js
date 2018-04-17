import { StackNavigator, DrawerNavigator, TabNavigator, TabBarTop, createBottomTabNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';
import { ToolBar } from 'atoms';
import Splash from '../screens/Splash';
import NavigationMenu from '../screens/NavigationMenu';
import TabOne from '../screens/TabOne';
import TabSecond from '../screens/TabSecond';
import TabThree from '../screens/TabThree';
import TabFour from '../screens/TabFour';
import TabNavigate from '../screens/TabNavigate';
import Map from '../screens/Map';

const AppRouteConfig = StackNavigator({
    Splash: { screen: Splash },
    Home: {
        screen: DrawerNavigator({
            Map: {
                screen: Map
            },
            TabNavigate: {
                screen: TabNavigate
            },
            Tab: {
                screen: StackNavigator({
                    screen: TabNavigator({
                        TabOne: { screen: TabOne },
                        TabSecond: { screen: TabSecond },
                        TabThree: { screen: TabThree }
                    },
                        {
                            initialRouteName: 'TabOne',
                            tabBarPosition: 'top',
                            tabBarComponent: TabBarTop,
                            swipeEnabled: true,
                            animationEnabled: false,
                            lazy: false,
                            tabBarOptions: {
                                upperCaseLabel: false,
                                showIcon: false,
                                activeTintColor: 'black',
                                inactiveTintColor: '#000000',
                                indicatorHeight: 2,
                                labelStyle: {
                                    fontSize: 14,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                },
                                indicatorStyle: {
                                    backgroundColor: "black",
                                    height: 3
                                },
                                style: {
                                    backgroundColor: 'lightgrey',
                                    justifyContent: 'space-between'
                                },
                                tabStyle: {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }
                            }
                        })
                },
                    {
                        navigationOptions: ({ navigation }) => ({
                            header: <View>
                                <ToolBar
                                    title='Tab Example'
                                    isBackHide={false}
                                    leftImage={require('@assets/images/ic_menu.png')}
                                    onBackPress={() => {
                                        navigation.navigate('DrawerOpen')
                                    }} />
                            </View>
                        }),
                    }
                )
            },
        }, {
                contentComponent: NavigationMenu,
                drawerWidth: 250
            })
    },
}, {
        headerMode: 'none'
    });

export default AppRouteConfig;
