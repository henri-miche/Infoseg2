import React, {useState,useEffect} from 'react';
import { Text,Image,StyleSheet,TouchableOpacity, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    TextoTitulo,
    ImagemStyle,
    SubtituloCbtu,
    FaçaSeuLogin,
    BtnEntrar,
    EntrarText,
    EsqueciSenha,
    BtnCriarConta,
    SignMessageButton,
    SignMessageButtonText
 } from './styles';
import InputLogin from '../../components/InputLogin';
import InputLoginSenha from '../../components/InputLoginSenha';
import firebase from '../../connection/FirebaseConection';

export default () => {

    const [emailField, setEmailField] = useState('');
    const [senhaField, setSenhaField] = useState('');
    const navigation = useNavigation();

    firebase.auth().signOut();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'TelaCadastro'}]
        });
    }

     
    
  

    const handleSignClic = () => {

        firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.reset({
                        routes: [{ name: 'HomeRo' }]
                    });
                }
            });
            
        if (emailField != '' && senhaField != '') {

            firebase.auth().signInWithEmailAndPassword(
                emailField,
                senhaField).catch((error) => {
                    

                    switch (error.code) {
                        case 'auth/invalid-email':
                            alert("E-mail inválido!");
                            break;

                        case 'auth/wrong-password':
                            alert("Senha inválida!");
                            break;

                        case 'auth/user-not-found':
                            alert("Usuário não encontrado!");
                            break;

                        default:
                            break;
                    }

                });
        } else {
            alert("Preencha os campos corretamente");
        }
    

    }

    return (
        <Container>
            
            <ImagemStyle source={require('../../../assets/brasaoTransarente.png')}/>
            
            <TextoTitulo>InfoSeg Mobile</TextoTitulo>

            <SubtituloCbtu>CBTU BH</SubtituloCbtu>

            <FaçaSeuLogin> Faça seu login</FaçaSeuLogin>

            
            <InputLogin
             value={emailField} 
             onChangeText={t => setEmailField(t)}
             placeholder="E-mail" 
             placeholderTextColor="#666360" 
             color="#fff"/>
            <InputLoginSenha  
            value={senhaField} 
            onChangeText={t => setSenhaField(t)} 
            password={true}
            placeholder="Senha" 
            placeholderTextColor="#666360" 
            color="#fff"/>

            <BtnEntrar onPress={handleSignClic}>
                <EntrarText>Entrar</EntrarText>
            </BtnEntrar>

            
            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>CADASTRE-SE</SignMessageButtonText>
            </SignMessageButton>
         
            
        </Container>
    );
}
/*
<Container>
       
            <Image source={require('../../../assets/brasaoTransarente.png')}
             style={{width: 175,height: 175}}
                    
                />
            <Textotitulo>
            <Text>InfoSeg Mobile</Text>
            </Textotitulo>
            <InputArea>
                <SignInput placeholder="E-mail" 
                value={emailField} 
                onChangeText={t => setEmailField(t)}    
                />

                <SignInput 
                    placeholder="Senha" 
                    value={senhaField} 
                    onChangeText={t => setSenhaField(t)} 
                    password={true}   
                />

                <CustomButton onPress={handleSignClic} >
                    <CustomBottomText>LOGIN</CustomBottomText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>CADASTRE-SE</SignMessageButtonText>
            </SignMessageButton>
        </Container>

*/