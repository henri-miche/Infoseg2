import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRo from '../screens/HomeRo';
import HomeRoCadastro from '../screens/HomeRoCadastro';
import HomeRoSearch from '../screens/HomeRoSearch'


const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="HomeRo" screenOptions={{headerShown:false}} >

        <Stack.Screen name="HomeRo" component={HomeRo} />
        <Stack.Screen name="HomeRoCadastro" component={HomeRoCadastro} />
        <Stack.Screen name="HomeRoSearch" component={HomeRoSearch} />
    </Stack.Navigator>
);