import React, { useState } from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  TextoTitulo,
  ImagemStyle,
  SubtituloCbtu,
  FaçaSeuLogin,
  BtnEntrar,
  EntrarText,
  EsqueciSenha,
  SignMessageButton,
  SignMessageButtonText,
} from './styles';
import InputLogin from '../../components/InputLogin';
import InputLoginSenha from '../../components/InputLoginSenha';
import { signInWithEmailAndPassword, onAuthStateChanged } from '../../services/authService';
import { getAuthErrorMessage } from '../../utils/authErrors';
import { validateLogin } from '../../utils/validation';

export default () => {
  const [emailField, setEmailField] = useState('');
  const [senhaField, setSenhaField] = useState('');
  const navigation = useNavigation();

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'TelaCadastro' }],
    });
  };

  const handleEsqueciSenha = () => {
    navigation.navigate('EsqueciSenha');
  };

  const handleSignClic = () => {
    const validationError = validateLogin(emailField, senhaField);
    if (validationError) {
      alert(validationError);
      return;
    }

    onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          routes: [{ name: 'HomeRo' }],
        });
      }
    });

    signInWithEmailAndPassword(emailField.trim(), senhaField).catch((error) => {
      alert(getAuthErrorMessage(error.code));
    });
  };

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

            <TouchableOpacity onPress={handleEsqueciSenha} style={{ marginTop: 20 }}>
              <EsqueciSenha>Esqueci minha senha</EsqueciSenha>
            </TouchableOpacity>

            <SignMessageButton onPress={handleMessageButtonClick}>
              <SignMessageButtonText>CADASTRE-SE</SignMessageButtonText>
            </SignMessageButton>
        </Container>
    );
};
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