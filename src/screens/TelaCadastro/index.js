import React, { useState } from 'react';
import { Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    TextoTitulo,
    ImagemStyle,
    SubtituloCbtu,
    FaçaSeuLogin,
    BtnEntrar,
    EntrarText,
    SignMessageButton,
    SignMessageButtonText,
    InputArea,
    CustomBottomText,
    CustomButton
 } from './styles';
import InputLogin from '../../components/InputLogin';
import InputLoginSenha from '../../components/InputLoginSenha';
import firebase from '../../connection/FirebaseConection';


export default () => {

    const [emailField, setEmailField] = useState('');
    const [nomeField, setNomeField] = useState('');
    const [senhaField, setSenhaField] = useState('');
    const [siape, setSiape] = useState('');
    const [matricula, setMatricula] = useState('');
    const [cargo, setCargo] = useState('');
    
    const navigation = useNavigation();


    firebase.auth().signOut();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'TelaLogin' }]
        });
    }
    
    

    const handleSignClic = () => {

        if(emailField != '' && senhaField != '' && nomeField != '') {

           

                firebase.auth().createUserWithEmailAndPassword(emailField, senhaField)
                    .then((user) => {
                        var user = firebase.auth().currentUser;
                        firebase.database().ref('usuarios').child(user.uid).set({
                            nome:nomeField,
                            siape:siape,
                            matricula:matricula,
                            cargo:cargo,
                        });
                
                    })
                    .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..

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

    
    console.log('render')
    return (
        <Container>
           
            
            <ImagemStyle source={require('../../../assets/brasaoTransarente.png')}/>
            
            <TextoTitulo>InfoSeg Mobile</TextoTitulo>

            <SubtituloCbtu>CBTU BH</SubtituloCbtu>

            <FaçaSeuLogin> Faça seu Cadastro</FaçaSeuLogin>

            
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
             <InputLoginSenha  
            value={nomeField} 
            onChangeText={t => setNomeField(t)} 
            
            placeholder="nome" 
            placeholderTextColor="#666360" 
            color="#fff"/>
             <InputLoginSenha  
            value={matricula} 
            onChangeText={t => setMatricula(t)} 
            
            placeholder="Matricula" 
            placeholderTextColor="#666360" 
            color="#fff"/>
             <InputLoginSenha  
            value={siape} 
            onChangeText={t => setSiape(t)} 
            
            placeholder="Siape" 
            placeholderTextColor="#666360" 
            color="#fff"/>
            <InputLoginSenha  
            value={cargo} 
            onChangeText={t => setCargo(t)} 
            
            placeholder="Cargo" 
            placeholderTextColor="#666360" 
            color="#fff"/>
            

            <BtnEntrar onPress={handleSignClic}>
                <EntrarText>Cadastrar</EntrarText>
            </BtnEntrar>
         

            <SignMessageButton onPress={handleMessageButtonClick} >
                <SignMessageButtonText>TELA LOGIN</SignMessageButtonText>
            </SignMessageButton>
        </Container>
    );
}