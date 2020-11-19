import React, {useState} from 'react';
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

import InputLoginSenha from '../../components/InputLoginSenha';
import firebase from '../../connection/FirebaseConection';

export default () => {

    
    const [newPassword, setNewPassword] = useState();
    const [currentPass, setCurrentPass] = useState();
    const [confirmaçao, setConfirmaçao] = useState();
    const navigation = useNavigation();

    

    

    

    const handleClickRedefinir = () => {


        const user = firebase.auth().currentUser;
        
    
    if (user != null && newPassword === confirmaçao) {
        user.updatePassword(newPassword).then(() => {
            alert('Sanha redefinida!')
    }, (error) => {
  
         alert(error)
    });
}}
   
    
    

    return (
        <Container>
            
            <ImagemStyle source={require('../../../assets/brasaoTransarente.png')}/>
            
            <TextoTitulo>InfoSeg Mobile</TextoTitulo>

            <SubtituloCbtu>CBTU BH</SubtituloCbtu>

            <FaçaSeuLogin>REDEFINIR SENHA</FaçaSeuLogin>

            
            
            <InputLoginSenha
             value={newPassword} 
             onChangeText={t => setNewPassword(t)}
             placeholder="Nova senha" 
             placeholderTextColor="#666360" 
             password={true}
             color="#fff"/>
            <InputLoginSenha  
            value={confirmaçao} 
            onChangeText={t => setConfirmaçao(t)} 
            password={true}
            placeholder="Confirmar nova senha" 
            placeholderTextColor="#666360" 
            color="#fff"/>

            <BtnEntrar onPress={handleClickRedefinir}>
                <EntrarText>Enviar</EntrarText>
            </BtnEntrar>
         
            
        </Container>
    );
}
