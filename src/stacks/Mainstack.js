import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import TelaLogin from '../screens/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro';
import MainTab from '../stacks/MainTab';
import {Image,Text,View} from 'react-native';



const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown:false}} >
    
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="MainTab" component={MainTab}
            options={{  headerShown: true,
                headerTitle: () => 
                <View style={{justifyContent:'center',alignItems:'center', }}>
                        <Image source={require("../../assets/brasaoTransarente.png")} style={{ width: 80, height: 80 }} />
                        <Text style={{ color: '#fff', fontSize: 30,paddingBottom: 10 ,fontWeight: 'bold'}}>INFOSEG</Text>
                </View>,
                headerStyle:{
                    backgroundColor: '#000',
                    height:130
                },
                
                headerTitleAlign: 'center',
                        
            }}     
            
        />
    
    </Stack.Navigator>
);