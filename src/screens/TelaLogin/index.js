import React, {useState} from 'react';
import { Text,Image,StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    TextoTitulo,
    ImagemStyle,
    SubtituloCbtu,
    FaçaSeuLogin,
    BtnEntrar,
    EntrarText,
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

        if (emailField != '' && senhaField != '') {

            /*função ouvinte a ser passada para sistemaconect*/
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                }
            });
            /*conexao firebase cadastro*/
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

            <InputLogin/>
            <InputLoginSenha/>

            <BtnEntrar>
                <EntrarText>Entrar</EntrarText>
            </BtnEntrar>
            
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