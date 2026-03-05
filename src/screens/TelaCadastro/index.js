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
import { createUserWithEmailAndPassword, getCurrentUser } from '../../services/authService';
import { setUsuario } from '../../services/usuarioService';
import { getAuthErrorMessage } from '../../utils/authErrors';
import { validateCadastro } from '../../utils/validation';

export default () => {
    const [emailField, setEmailField] = useState('');
    const [nomeField, setNomeField] = useState('');
    const [senhaField, setSenhaField] = useState('');
    const [siape, setSiape] = useState('');
    const [matricula, setMatricula] = useState('');
    const [cargo, setCargo] = useState('');
    const navigation = useNavigation();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'TelaLogin' }],
        });
    };

    const handleSignClic = () => {
        const validationError = validateCadastro(emailField, senhaField, nomeField);
        if (validationError) {
            alert(validationError);
            return;
        }

        createUserWithEmailAndPassword(emailField.trim(), senhaField)
            .then(() => {
                const user = getCurrentUser();
                if (user) {
                    setUsuario(user.uid, {
                        nome: nomeField.trim(),
                        siape: siape || '',
                        matricula: matricula || '',
                        cargo: cargo || '',
                    });
                }
            })
            .catch((error) => {
                alert(getAuthErrorMessage(error.code));
            });
    }

    
  
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