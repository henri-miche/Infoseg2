import React,{useEffect, useState} from 'react';
import { SafeAreaView,Text, View, StyleSheet,Image,TextInput,Button,Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import ConfirmarCancel from '../../components/ConfirmarCancel';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as imagePicker from 'expo-image-picker';
import moment from 'moment';
import firebase from '../../connection/FirebaseConection';
import Inputs from '../../components/Inputs'
import InputsInteiro from '../../components/InputsInteiro'
import InputMaePai from '../../components/InputMaePai'
import InputMenor from '../../components/InputMenor'
import InputMenorAinda from '../../components/InputMenorAinda'
import { Container,
ViewTitullo,
TouchSair,
TextTitulo,
TextSubtitulo,
ImageSpace,
BtnFixa,
TextEndereço,
TextInformações,
} from './styles';


export default () => {
    
    const [foto,setFoto] = useState(null);
    const [cpf, setCpf] = useState('');
    const [endereço, setEndereço] = useState('');
    const [nome, setNome] = useState('');
    const [identidade, setIdentidade] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [tipoRo, setTipoRo] = useState('');
    const [local, setLocal] = useState('');
    const [mae, setMae] = useState('');
    const [pai, setPai] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState('');
    const [historico, setHistorico] = useState('');
    const [estado, setEstado] = useState("MG");


    const navigation = useNavigation();

    const handleClick = () => {
        setNome('');
        setCpf('');
        setEndereço('');
        navigation.navigate('HomeRo');
    };


    const saveFoto = (chave) => {
        if (foto !== null) {
            
            uploadImage(foto.uri, chave)
                .then(() => {
                    setNome('');
                    setCpf('');
                    setEndereço('');
                    setIdentidade('');
                    setNascimento('');
                    setTipoRo('');
                    setLocal('');
                    setMae('');
                    setPai('');
                    setTelefone('');
                    setGenero('');
                    setHistorico('');
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');
                })
                .catch((error) => {
                    Alert.alert(error);
                });
        }
    }

    const uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("images/" + imageName);
        return ref.put(blob);
    }

     

    const saveUser =  (cosop,chave) => {
            
        let horario = moment().utcOffset('-03:00').format(' hh:mm:ss a');
        let dataa = moment().format('DD-MM-YYYY');

        try {
            firebase.database().ref('/Ro').child(chave).set({
                Nome: nome,
                CPF: cpf,
                Endereço: endereço,
                Cosop:cosop,
                ChaveFoto:chave,
                Data:dataa,
                Hora:horario,
                Identidade:identidade,
                Nascimento:nascimento,
                TipoRo:tipoRo,
                Local:local,
                Mae:mae,
                Pai:pai,
                Telefone:telefone,
                Genero:genero,
                Historico:historico
            })

        } catch (error) {
            alert(error);
        }
        finally {
            setNome('');
            setCpf('');
            setEndereço('');
            setIdentidade('');
            setNascimento('');
            setTipoRo('');
            setLocal('');
            setMae('');
            setPai('');
            setTelefone('');
            setGenero('');
            setHistorico('');
            alert('Dados enviados!');
            navigation.navigate('HomeRo');
            
        }
    }

   

   
    
    
 /*if tem que ser editado para nano permitir envio vazio*/
    const confirmar = () => {
        if(nome !== '' && cpf !== '' ){
           
           const user = firebase.auth().currentUser;
                if(user){
                   //seta nome do usuario pro relatorio
                    firebase.database().ref('usuarios').child(user.uid)
                        .once('value').then((snapshot) => {
                            let cosop = snapshot.val().nome;
                            //seta chave realtime para foto
                            let chavess = firebase.database().ref('Ro');
                            let chave = chavess.push().key;
                            
                            saveFoto(chave);
                            saveUser(cosop,chave);
                    
                        });       
                    
                } 
           
                    
        }else {alert("Preencha os campos corretamente");}
     };

     const carregarFoto = async () => {
        if(Constants.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== 'granted'){
                alert('Permissão necessária!');
                return;
            }
        }
        const data = await imagePicker.launchImageLibraryAsync({});
        if (data.cancelled) {
            return;
        }
         if (!data.uri) {
             return;
         }
        setFoto(data);
    }

    const tirarFoto = async () => {
        if(Constants.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== 'granted'){
                alert('Permissão necessária!');
                return;
            }
        }
        const data = await imagePicker.launchCameraAsync({});
        if (data.cancelled) {
            return;
        }
         if (!data.uri) {
             return;
         }
        setFoto(data);
    }

    const sair = () => {
        navigation.goBack();
    };

    return (
        <Container >

            <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair onPress = {sair}>
                    <Image source = {require('../../../assets/SetaSair.png')} />
                </TouchSair>
            
            </ViewTitullo>

            <View style={styles.viewQualiEnv}>
                <TextSubtitulo>Qualificação do Envolvido</TextSubtitulo>
            </View>

            <View style = {styles.viewFotoMais}>

                <View> 
                    <ImageSpace>
                        <Image source = {require('../../../assets/adicionarimagem.png')} />
                    </ImageSpace> 
                </View>

                <View style={styles.viewInpustsCima}>
                
                <Inputs source = {require('../../../assets/rgicon.png')} placeholder ='RG' placeholderTextColor ='#666360'/>
                 <Inputs source = {require('../../../assets/rgicon.png')} placeholder ='CPF' placeholderTextColor ='#666360'/>
                  <Inputs source = {require('../../../assets/phone.png')} placeholder ='Telefone' placeholderTextColor ='#666360'/>
                </View>

            </View>

            <View style = {styles.viewInputsMeio} >
                <InputsInteiro  source = {require('../../../assets/user.png')} placeholder ='Nome Completo' placeholderTextColor ='#666360'/>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Mãe' placeholderTextColor ='#666360'/>
                    <BtnFixa>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360'/>
                    <BtnFixa>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' />

                <Picker
                selectedValue={genero}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#666360'}}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
                >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

            <View>
                <TextEndereço>Endereço do Envolvido</TextEndereço>

            </View>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' placeholderTextColor ='#666360' />
                <Picker
                selectedValue={estado}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#666360' }}
                onValueChange={(itemValue, itemIndex) => setEstado(itemValue)}
                >
                        <Picker.Item label="Minas Gerais" value="MG" />
                        <Picker.Item label="Acre" value="AC" />
                        <Picker.Item label="Alagoas" value="AL" />
                        <Picker.Item label="Amapa" value="AP" />
                        <Picker.Item label="Amazonas" value="AM" />
                        <Picker.Item label="Bahia" value="BA" />
                        <Picker.Item label="Ceará" value="CE" />
                        <Picker.Item label="Espírito Santo" value="ES" />
                        <Picker.Item label="Goiás" value="GO" />
                        <Picker.Item label="Maranhão" value="MA" />
                        <Picker.Item label="Mato Grosso do Sul" value="MS" />
                        <Picker.Item label="Pará" value="PA" />
                        <Picker.Item label="Paraíba" value="PB" />
                        <Picker.Item label="Paraná" value="PR" />
                        <Picker.Item label="Pernambuco" value="PE" />
                        <Picker.Item label="Piauí" value="PI" />
                        <Picker.Item label="Rio de Janeiro" value="RJ" />
                        <Picker.Item label="Rio Grande do Norte" value="RN" />
                        <Picker.Item label="Rio Grande do Sul" value="RS" />
                        <Picker.Item label="Rondônia" value="RO" />
                        <Picker.Item label="Roraima" value="RR" />
                        <Picker.Item label="Santa Catarina" value="SC" />
                        <Picker.Item label="Pernambuco" value="PE" />
                        <Picker.Item label="São Paulo" value="SP" />
                        <Picker.Item label="Sergipe" value="SE" />
                        <Picker.Item label="Tocantins" value="TO" />
                        <Picker.Item label="Distrito Federal" value="DF" />
                </Picker>
            </View>
                    
            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cidade' placeholderTextColor ='#666360' />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Bairro' placeholderTextColor ='#666360' />
            </View>

            <View style = {styles.viewLogradoro}>
             <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Logradouro' placeholderTextColor ='#666360' />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Número' placeholderTextColor ='#666360' />

            </View>

            <View style = {{marginLeft:30}} >
            <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Complemento' placeholderTextColor ='#666360'/>
            </View>

            <View style = {{marginBottom:25}}>
            <TextInformações>Informações da Ocorrência</TextInformações>

            </View>
                    
            <View style = {styles.viewDataHora} >
                 <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Data' placeholderTextColor ='#666360' />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Hora' placeholderTextColor ='#666360' />
            </View>

            <View style = {styles.viewTipoRo}>

               <Picker
                selectedValue={tipoRo}
                style={{ height: 50, width: 182,backgroundColor: '#2E2E2E',borderRadius:10,color:'#666360'}}
                onValueChange={(itemValue, itemIndex) => setTipoRo(itemValue)}
                >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>

                <Picker
                selectedValue={local}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,color:'#666360',marginRight:14}}
                onValueChange={(itemValue, itemIndex) => setLocal(itemValue)}
                >
                <Picker.Item label="UVL" value="UVL" />
                <Picker.Item label="UFL" value="UFL" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                <Picker.Item label="Masculino" value="Masculino" />
                
                </Picker>
                
            </View>
 
        </Container>
    );
}
const styles = StyleSheet.create({
    viewTipoRo:{
        marginLeft:30,
        flexDirection:'row', 
        justifyContent:'space-between' 
    }, 
    viewDataHora:{
        marginLeft:30,
        flexDirection:'row',  
    }, 
    viewLogradoro:{
        marginLeft:30,
        flexDirection:'row',  
    }, 
    
    viewCidadeBairro:{
        marginLeft:30,
        flexDirection:'row',
        
        
    }, 
    viewNascimento:{
        marginLeft:30,
        flexDirection:'row'
    }, 
    viewEstado:{
        marginLeft:30,
        flexDirection:'row'
    },
    viewInputsMeio:{
        marginLeft:30
    },
    viewInpustsCima:{
        marginLeft:16
    },
    viewInpustsCima:{
        marginLeft:16
    },
    
    viewFotoMais:{
        marginLeft:30,
        marginTop:25,
        flexDirection:'row',
        
        
    },
    viewQualiEnv:{
        marginLeft:30,
        marginTop:25,
        
    },
    
})
/*
 <SafeAreaView style={{ backgroundColor: '#000', flex: 1, marginBottom: 0.5,justifyContent:'flex-end' }}>
                
                    <ScrollView> 
                    
                        <View style={styles.form}>
                            <View style={{flex: 1,marginTop:5}}>
                                <TextInput style={styles.input} placeholder='Nome:' autoCapitalize='characters' value={nome} onChangeText={(t)=>setNome(t)} />
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={styles.campos}>
                                    <Image source={foto} style={styles.formFoto}/>
                                    
                                        <View style={{marginTop:5}} >
                                            <Button title='Carregar foto.' onPress={carregarFoto} />
                                            <View style={{marginTop:5}}>
                                                <Button title='Tirar foto.'  onPress={tirarFoto} />
                                            </View>
                                        </View>
                                
                                </View>
                                
                                <View style={{flex:1,marginLeft:10}}>
                                    
                                    <TextInput style={styles.input} placeholder='CPF:' keyboardType='number-pad' value={cpf} onChangeText={(t) => setCpf(t)} />
                                    <TextInput style={styles.input} placeholder='Identidade:' keyboardType='number-pad' value={identidade} onChangeText={(t) => setIdentidade(t)} />
                                    <TextInput style={styles.input} placeholder='Nascimento:' keyboardType='number-pad' value={nascimento} onChangeText={(t) => setNascimento(t)} />
                                    <TextInput style={styles.input} placeholder='Tipo RO:' value={tipoRo} onChangeText={(t) => setTipoRo(t)} />
                                    <TextInput style={styles.input} placeholder='Local:' autoCapitalize='characters' value={local} onChangeText={(t) => setLocal(t)} />
                                
                                </View>
                            
                        </View>
                                <View style={{flex:1}}>
                                <TextInput style={styles.input} placeholder='Mãe:' value={mae} onChangeText={(t) => setMae(t)} />
                                <TextInput style={styles.input} placeholder='Pai:' value={pai} onChangeText={(t) => setPai(t)} />
                                <TextInput style={styles.input} placeholder='Endereço:' value={endereço} onChangeText={(t) => setEndereço(t)} />
                                </View>

                                <View style={{flexDirection:'row',flex:1}}>

                                      <View style={{flex:1}}>  
                                        <TextInput style={styles.input} placeholder='Telefone:' keyboardType='number-pad' value={telefone} onChangeText={(t) => setTelefone(t)} />
                                     </View>

                                     <View style={{flex:1}}>
                                         <TextInput style={styles.input} placeholder='Gênero:' value={genero} onChangeText={(t) => setGenero(t)} />
                                     </View>
                                </View>
                                <TextInput style={styles.inputHist} placeholder='Histórico:' multiline={true} textAlignVertical='top' value={historico} onChangeText={(t) => setHistorico(t)} />
                        </View>

                    </ScrollView>
                
                <ConfirmarCancel onPress={handleClick} onPress1={confirmar}/>
               
            </SafeAreaView>*/