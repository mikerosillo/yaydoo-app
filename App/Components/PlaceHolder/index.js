import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

class PlaceHolder extends Component {
    async componentDidMount() {
        const gotToken = await AsyncStorage.getItem('ACCESS_TOKEN');
        if (gotToken) {
            Actions.profile({ type: 'reset' })
        } else {
            Actions.login({ type: 'reset' });
        }
    }
    render() {
        return <View />;
    }
}
export default PlaceHolder;
