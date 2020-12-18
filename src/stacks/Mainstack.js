import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import TelaLogin from '../screens/TelaLogin';
import TelaCadastro from '../screens/TelaCadastro';
import HomeRo from '../screens/HomeRo';
import DescricaoOcorrencia from '../screens/DescricaoOcorrencia';
import HomeRoCadastro from '../screens/HomeRoCadastro';
import RedefinirSenha from '../screens/RedefinirSenha';
import AreaAgente from '../screens/AreaAgente';



const Stack = createStackNavigator();


export default () => (
    <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown:false}} >
    
        <Stack.Screen name="Preload" component={Preload} />  
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="HomeRo" component={HomeRo} />
         <Stack.Screen name="HomeRoCadastro" component={HomeRoCadastro} />
        <Stack.Screen name="DescricaoOcorrencia" component={DescricaoOcorrencia} />
         <Stack.Screen name="RedefinirSenha" component={ RedefinirSenha} />
         <Stack.Screen name="AreaAgente" options={{headerShown:true,
         headerTitle:'Área do Agente',
         headerTintColor:'#FF9000',
         headerStyle:{
                    backgroundColor: '#000',
                    
                }
         }} component={ AreaAgente} />
         
        
    
    </Stack.Navigator>
);
