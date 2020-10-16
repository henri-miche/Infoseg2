import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';
import HomeRoStack from '../stacks/HomeRoStack';
import HomeBoStack from '../stacks/HomeBoStack';
import HomeRdmStack from '../stacks/HomeRdmStack';
import HomeRauStack from '../stacks/HomeRauStack';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=> <CustomTabBar {...props}/> } >
        <Tab.Screen name="HomeRoStack" component={HomeRoStack} />
        <Tab.Screen name="HomeRauStack" component={HomeRauStack} />
        <Tab.Screen name="HomeRdmStack" component={HomeRdmStack} />
        <Tab.Screen name="HomeBoStack" component={HomeBoStack} />
    </Tab.Navigator>
);