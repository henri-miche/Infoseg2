import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeRdm from '../screens/HomeRdm';
import HomeRdmCadastro from '../screens/HomeRdmCadastro';
import HomeRdmSearch from '../screens/HomeRdmSearch'


const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="HomeRdm" >

        <Stack.Screen name="HomeRdm" component={HomeRdm} />
        <Stack.Screen name="HomeRdmCadastro" component={HomeRdmCadastro} />
         <Stack.Screen name="HomeRdmSearch" component={HomeRdmSearch} />
    </Stack.Navigator>
);