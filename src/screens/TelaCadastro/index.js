import React, { useState } from 'react';
import { Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomBottomText,
    SignMessageButton,
    SignMessageButtonText,
} from './styles';

import firebase from '../../connection/FirebaseConection';

export default () => {

    const [emailField, setEmailField] = useState('');
    const [nomeField, setNomeField] = useState('');
    const [senhaField, setSenhaField] = useState('');
    const navigation = useNavigation();

/*função logout a ser passada para sistemaconect*/
    firebase.auth().signOut();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'TelaLogin' }]
        });
    }
    
    /*função cadastro a ser passada para sistemaconect*/
    const handleSignClic = () => {
        if(emailField != '' && senhaField != '' && nomeField != '') {

/*função ouvinte que seta nome para DB a ser passada para sistemaconect*/
            firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            firebase.database().ref('usuarios').child(user.uid).set({
                nome:nomeField
            });
                
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            });
        }
     });
     /*conexao firebase cadastro*/
        firebase.auth().createUserWithEmailAndPassword(
            emailField,
            senhaField).catch((error) =>{
                
                switch (error.code) {
                    case 'auth/weak-password':
                        alert("Sua senha deve ter pelo menos 6 caracteres!");
                        break;
                    
                    case 'auth/email-already-in-use':
                        alert("Este e-mail já está cadastrado");
                        break;
                    
                    case 'auth/invalid-email':
                        alert("E-mail inválido");
                        break;

                    default:
                        break;
                }
                
            });
        }else{
            alert("Preencha os campos corretamente");
        }
    }

    return (
        <Container>
            <Image source={require('../../../assets/brasaoTransarente.png')}
                style={{ width: 250, height: 250 }}

            />
            <Text style={{ fontSize: 40, marginTop: 10, color: '#D3D3D3' }}>INFOSEG</Text>

            <InputArea>

            

                <CustomButton onPress={handleSignClic} >
                    <CustomBottomText>CADASTRAR</CustomBottomText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>LOGIN</SignMessageButtonText>
            </SignMessageButton>
        </Container>
    );
}