import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRau from '../screens/HomeRau';
import HomeRauCadastro from '../screens/HomeRauCadastro';
import HomeRauSearch from '../../src/screens/HomeRauSearch'


const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="HomeRau" >

        <Stack.Screen name="HomeRau" component={HomeRau} />
        <Stack.Screen name="HomeRauCadastro" component={HomeRauCadastro} />
        <Stack.Screen name="HomeRauSearch" component={HomeRauSearch} />
    </Stack.Navigator>
);