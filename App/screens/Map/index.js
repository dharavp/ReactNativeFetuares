import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Platform, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ToolBar } from 'atoms';
import { AskLocationPermission } from 'molecules';
import Permissions from 'react-native-permissions';

const result = {
    location: undefined,
};
class Map extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props)
        this.state = {
            x: undefined,
            locationPermission: ''
        }
    }
    componentWillMount() {
        this.checkForLocationPermission();
    }
    checkForLocationPermission() {
        Permissions.check('location', { type: 'always' }).then(response => {
            console.log("permission", response);
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            this.setState({ locationPermission: response });
            if (response === 'authorized') {
                this.setState({ locationPermission: response });
            }
        }).catch(error => {
            console.log(error);
        });
    }
    requestPermission() {
        if (Platform.OS === 'android') {
            Permissions.request('location', { type: ['whenInUse'] }).then(response => {
                if (response === 'restricted') {
                    Alert.alert('Go to settings and enable location');
                }
                this.setState({ locationPermission: response })
            });
        } else {
            Permissions.check('location', { type: 'always' }).then(response => {
                // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                this.setState({ locationPermission: response });
                if (response === 'authorized') {
                    Permissions.request('location', 'always').then(response => {
                        if (response === 'restricted') {
                            Alert.alert('Go to settings and enable location');
                        }
                        this.setState({ locationPermission: response })
                    });
                } else {
                    var buttons = [{ text: 'Cancel', style: 'cancel' }]
                    if (true)
                        Permissions.openSettings().then(() => {
                            this.checkForLocationPermission();
                        })
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
    render() {
        if (this.state.locationPermission === 'authorized') {
            return (<View style={styles.container}>
                <MapView
                    ref={(ref) => { this.map = ref }}
                    style={styles.map}
                    showsMyLocationButton={false}
                    showsIndoors={true}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    onMapReady={() => {
                        this.setState({ showsMyLocationButton: true })
                        navigator.geolocation.getCurrentPosition(
                            ({ coords }) => {
                                if (this.map) {
                                    this.map.animateToRegion({
                                        latitude: coords.latitude,
                                        longitude: coords.longitude,
                                        latitudeDelta: 0.005,
                                        longitudeDelta: 0.005,
                                    }, 10)
                                }
                            },
                            (error) => alert(JSON.stringify(error)),
                            {
                                enableHighAccuracy: true,
                                timeout: 20000
                            }
                        );
                    }}
                    onLongPress={(e) => {
                        const location = e.nativeEvent.coordinate;
                        console.log(JSON.stringify(location));
                        this.setState({ x: location });
                        result.location = location;

                    }}
                >
                    {this.state.x ?
                        <Marker draggable
                            coordinate={this.state.x}
                            onDragEnd={(e) => {
                                const location = e.nativeEvent.coordinate;
                                this.setState({ x: location });
                                result.location = location;
                            }}
                        /> : null
                    }
                </MapView>
                <ToolBar
                    title='Map'
                    isBackHide={true}
                    leftImage={require('@assets/images/ic_menu.png')}
                    onBackPress={() => {
                        this.props.navigation.navigate('DrawerOpen')
                    }} />
            </View>);
        }
        else if (this.state.locationPermission === '') {
            return (<View style={styles.spinnerStyle}>
                <ActivityIndicator size="large" color="#38D9E7" />
            </View>);
        } else {
            return (
                <AskLocationPermission
                    onButtonPress={() => { this.requestPermission() }
                    }
                />
            );
        }
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
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '400'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop: 48
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
};

export default Map;