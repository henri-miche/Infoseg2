import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import TelaLogin from '../screens/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro';
import HomeRo from '../screens/HomeRo';
import HomeBo from '../screens/HomeBo';
import HomeRoCadastro from '../screens/HomeRoCadastro';
import HomeRoSearch from '../screens/HomeRoSearch';
import HomeRdm from '../screens/HomeRdm';


const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown:false}} >
    
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="HomeRo" component={HomeRo} />
         <Stack.Screen name="HomeRoCadastro" component={HomeRoCadastro} />
        <Stack.Screen name="HomeBo" component={HomeBo} />
         <Stack.Screen name="HomeRoSearch" component={ HomeRoSearch} />
         <Stack.Screen name="HomeRdm" component={ HomeRdm} />
         
        
    
    </Stack.Navigator>
);
/*
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
            
        />*/