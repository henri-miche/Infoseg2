import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBo from '../screens/HomeBo';
import HomeBoCadastro from '../screens/HomeBoCadastro';



const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="HomeBo" >

        <Stack.Screen name="HomeBo" component={HomeBo} />
        <Stack.Screen name="HomeBoCadastro" component={HomeBoCadastro} />

    </Stack.Navigator>
);