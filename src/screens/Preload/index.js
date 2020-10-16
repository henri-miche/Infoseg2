import React from 'react';
import {Container ,LoadingIcon} from './styles';
import {Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../connection/FirebaseConection';

export default () => {

    const navigation = useNavigation();
    
    firebase.auth().onAuthStateChanged((user)=>{
        if(user) {            
            navigation.reset({
                routes:[{name:'MainTab'}]
            });
        }else {
            navigation.reset({
                routes: [{ name: 'TelaLogin' }]
            });
        }
    })

    return (
    <Container>
            <Image source={require('../../../assets/brasaoTransarente.png')}
                style={{ width: 250, height: 250 }}/>
                <Text style={{fontSize:40,marginTop: 10}}>INFOSEG</Text>
            <LoadingIcon size="large" color="#D3D3D3" />
    </Container>
    );
}