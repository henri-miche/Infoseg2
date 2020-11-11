import React,{useEffect, useState} from 'react';
import { SafeAreaView,Text, View, StyleSheet,Image,TextInput,Button,Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
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
import { mask } from 'remask'
import { Container,
ViewTitullo,
TouchSair,
TextTitulo,
TextSubtitulo,
ImageSpace,
BtnFixa,
TextEndereço,
TextInformações,
BtnCadastrarOcorrencia,
TextBtnOcorrencia,
} from './styles';


export default () => {
    
    const [foto,setFoto] = useState(null);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [identidade, setIdentidade] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [tipoRo, setTipoRo] = useState("RO");
    const [local, setLocal] = useState("UVL");
    const [mae, setMae] = useState('');
    const [pai, setPai] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState("Masculino");
    const [historico, setHistorico] = useState('');

    const [estado, setEstado] = useState("MG");
   
    const [cep, setCep] = useState('');

    const [tipoOcorrencia1, setTipoOcorrencia1] = useState();
     const [tipoOcorrenciaRo, setTipoOcorrenciaRo] = useState({ "1": "Furto","2": "Auxilio Púbico","3": "Atendimento a deficiente físico","4": "Atendimento a deficiente visual",});
    const [tipoOcorrenciaRau, setTipoOcorrenciaRau] = useState({ "1": "Acidente","2": "Acidente na escada rolante","3": "Acidente na escada fixa","4": "Mal súbito",});
    const [tipoOcorrenciaBo, setTipoOcorrenciaBo] = useState({ "1": "Pessoa perdida","2": "Òbito","3": "Importunação ofensiva ao pudor","4": "Ameaça",});
    const [tipoOcorrenciaRRM, setTipoOcorrenciaRRM] = useState({ "1": "Panfletagem","2": "Recolhimento de mercadoria","3": "Recolhimento de bilhete",});
    
    const [tipoOcorrencia, setTipoOcorrencia] = useState(tipoOcorrenciaRo);

    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [complemento, setComplemento] = useState('');
    const [hora, setHora] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
    const [data, setData] = useState(moment().format('DD-MM-YYYY'));
    const [pickerChoice, setPickerChoice] = useState();

     const [pickerRO, setPickerRo] = useState(<Picker
                selectedValue={tipoOcorrencia}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginLeft:30,marginTop:15}}
                onValueChange={(itemValue, itemIndex) => setTipoOcorrencia(itemValue)}
                >
                <Picker.Item label="Furto" value="Furto" />
                <Picker.Item label="Auxilio público" value="Auxilio público" />
                <Picker.Item label="Atendimento a deficiente físico" value="Atendimento a deficiente físico" />
                <Picker.Item label="Atendimento a deficiente visual" value="Atendimento a deficiente visual" />
                </Picker>);

        const [pickerRau, setPickerRau] = useState(<Picker
                selectedValue={tipoOcorrencia}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginLeft:30,marginTop:15}}
                onValueChange={(itemValue, itemIndex) => setTipoOcorrencia(itemValue)}
                >
                <Picker.Item label="Acidente" value="Acidente" />
                <Picker.Item label="Acidente na escada rolante" value="Acidente na escada rolante" />
                <Picker.Item label="Acidente na escada fixa" value="Acidente na escada fixa" />
                <Picker.Item label="Mal súbito" value="Mal súbito" />
                </Picker>);

        const [pickerRRM, setPickerRRM] = useState(<Picker
                selectedValue={tipoOcorrencia}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginLeft:30,marginTop:15}}
                onValueChange={(itemValue, itemIndex) => setTipoOcorrencia(itemValue)}
                >
                <Picker.Item label="Panfletagem" value="Panfletagem" />
                <Picker.Item label="Recolhimento de mercadoria" value="Recolhimento de mercadoria" />
                <Picker.Item label="Recolhimento de bilhete" value="Recolhimento de bilhete" />
                
                </Picker>);
         
          const [pickerBO, setPickerBO] = useState(<Picker
                selectedValue={tipoOcorrencia}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginLeft:30,marginTop:15}}
                onValueChange={(itemValue, itemIndex) => setTipoOcorrencia(itemValue)}
                >
                <Picker.Item label="Pessoa perdida" value="Pessoa perdida" />
                <Picker.Item label="Òbito" value="Òbito" />
                <Picker.Item label="Importunação ofensiva ao pudor" value="Importunação ofensiva ao pudor" />
                <Picker.Item label="Ameaça" value="Ameaça" />
                </Picker>);



    const navigation = useNavigation();

    const handleClick = () => {
        setNome('');
        setCpf('');
        setEndereço('');
        navigation.navigate('HomeRo');
    };


    const saveFoto = (chave,cosop) => {
        if (foto !== null) {
            
            uploadImage(foto.uri, chave)
                .then(() => {
                firebase.database().ref('/'+tipoRo).child(chave).set({
                Nome: nome,
                CPF: cpf,
                Cosop:cosop,
                ChaveFoto:chave,
                Data:data,
                Hora:hora,
                Identidade:identidade,
                Nascimento:nascimento,
                TipoRo:tipoRo,
                Local:local,
                Mae:mae,
                Pai:pai,
                Telefone:telefone,
                Genero:genero,
                Historico:historico,
                Estado:estado,
                TipoOcorrencia:tipoOcorrencia,
                CEP:cep,
                Cidade:cidade,
                bairro:bairro,
                Logradouro:logradouro,
                NumeroCasa:numeroCasa,
                Complemento:complemento,
                
            })

                }).then(() => { 
                    setNome('');
                    setCpf('');
                    
                    setIdentidade('');
                    setNascimento('');
                    setTipoRo('');
                    setLocal('');
                    setMae('');
                    setPai('');
                    setTelefone('');
                    setGenero('');
                    setHistorico('');
                     setEstado('');
                    setTipoOcorrencia('');
                    setCep('');
                    setCidade('');
                    setBairro('');
                    setLogradouro('');
                    setNumeroCasa('');
                    setComplemento('');
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });
        }
    }

    const uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child(tipoRo+"/" + imageName);
        return ref.put(blob);
    }

     

    const saveUser =  (cosop,chave) => {
            
        

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
                            
                            saveFoto(chave,cosop);
                           
                    
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

     const mascaraCpf = (t) => {
        setCpf(mask(t,['999.999.999-99']))
    }

    const mascaraNascimento = (t) => {
        setNascimento(mask(t,['99/99/9999']))
    }

    const mascaraTelefone = (t) => {
        setTelefone(mask(t,['(99) 99999-9999']))
    }

    const mascaraCep = (t) => {
        setCep(mask(t,['99999-999']))
    }

    

     useEffect(() => {
      
      switch (tipoRo) {
          case 'RO':
              setTipoOcorrencia(tipoOcorrenciaRo)
              break;
        case 'RAU':
              setTipoOcorrencia(tipoOcorrenciaRau)
              break;
         case 'BO':
             setTipoOcorrencia(tipoOcorrenciaBo)
              break;      

        case 'RRM':
             setTipoOcorrencia(tipoOcorrenciaRRM)
              break;  

          default:
              break;
      }
        
   return ()=>{
      
   }
  }, [tipoRo])

   

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
                    <ImageSpace onPress = {carregarFoto} >
                    
                        <Image style={styles.formFoto} resizeMode='stretch' source={foto ? foto : require('../../../assets/adicionarimagem.png') }/> 
                    </ImageSpace> 
                </View>

                <View style={styles.viewInpustsCima}>
                
                <Inputs source = {require('../../../assets/rgicon.png')} placeholder ='RG' placeholderTextColor ='#666360' keyboardType='number-pad' value={identidade} onChangeText={(t) => setIdentidade(t)}/>
                 <Inputs source = {require('../../../assets/rgicon.png')} placeholder ='CPF' placeholderTextColor ='#666360' keyboardType='number-pad' value={cpf} onChangeText={(t) => mascaraCpf(t)}/>
                  <Inputs source = {require('../../../assets/phone.png')} placeholder ='Telefone' placeholderTextColor ='#666360' keyboardType='number-pad' value={telefone} onChangeText={(t) => mascaraTelefone(t)}/>
                </View>

            </View>

            <View style = {styles.viewInputsMeio} >
                <InputsInteiro  source = {require('../../../assets/user.png')} placeholder ='Nome Completo' placeholderTextColor ='#666360' autoCapitalize='characters' value={nome} onChangeText={(t)=>setNome(t)} />
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Mãe' placeholderTextColor ='#666360' value={mae} onChangeText={(t) => setMae(t)}/>
                    <BtnFixa>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={pai} onChangeText={(t) => setPai(t)}/>
                    <BtnFixa>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimento} onChangeText={(t) => mascaraNascimento(t)} />

                <Picker
                selectedValue={genero}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
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


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' placeholderTextColor ='#666360' keyboardType='number-pad' value={cep} onChangeText={(t) => mascaraCep(t)} />
                <Picker
                selectedValue={estado}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff' }}
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
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cidade' placeholderTextColor ='#666360' value={cidade} onChangeText={(t) => setCidade(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Bairro' placeholderTextColor ='#666360' value={bairro} onChangeText={(t) => setBairro(t)} />
            </View>

            <View style = {styles.viewLogradoro}>
             <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Logradouro' placeholderTextColor ='#666360' value={logradouro} onChangeText={(t) => setLogradouro(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Número' placeholderTextColor ='#666360' value={numeroCasa} onChangeText={(t) => setNumeroCasa(t)} />

            </View>

            <View style = {{marginLeft:30}} >
            <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Complemento' placeholderTextColor ='#666360' value={complemento} onChangeText={(t) => setComplemento(t)}/>
            </View>

            <View style = {{marginBottom:25}}>
            <TextInformações>Informações da Ocorrência</TextInformações>

            </View>
                    
            <View style = {styles.viewDataHora} >
                 <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Data' placeholderTextColor ='#666360' value = {data}  />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Hora' placeholderTextColor ='#666360' value ={hora}  />
            </View>

            <View style = {styles.viewTipoRo}>

               <Picker
                selectedValue={tipoRo}
                style={{ height: 50, width: 182,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoRo(itemValue)}
                >
                <Picker.Item label="RO" value="RO" />
                <Picker.Item label="BO" value="BO" />
                <Picker.Item label="RRM" value="RRM" />
                <Picker.Item label="RAU" value="RAU" />
                </Picker>

                <Picker
                selectedValue={local}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginRight:14}}
                onValueChange={(itemValue, itemIndex) => setLocal(itemValue)}
                >
                <Picker.Item label="UVL" value="UVL" />
                <Picker.Item label="UFL" value="UFL" />
                <Picker.Item label="UWL" value="UWL" />
                <Picker.Item label="UPM" value="UPM" />
                <Picker.Item label="USG" value="USG" />
                <Picker.Item label="UMS" value="UMS" />
                <Picker.Item label="UJC" value="UJC" />
                <Picker.Item label="USI" value="USI" />
                <Picker.Item label="UHF" value="UHF" />
                <Picker.Item label="UST" value="UST" />
                <Picker.Item label="USE" value="USE" />
                <Picker.Item label="UCT" value="UCT" />
                <Picker.Item label="ULG" value="ULG" />
                <Picker.Item label="UCP" value="UCP" />
                <Picker.Item label="UCL" value="UCL" />
                <Picker.Item label="UGM" value="UGM" />
                <Picker.Item label="UVO" value="UVO" />
                <Picker.Item label="UCI" value="UCI" />
                <Picker.Item label="UEL" value="UEL" />
                
                </Picker>
                
            </View>



                <Picker
                style={{height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff',marginLeft:30,marginTop:15}}
                mode="dropdown"
                selectedValue={tipoOcorrencia1}
                onValueChange={(itemValue, itemIndex) => setTipoOcorrencia1(itemValue)}>
                {Object.keys(tipoOcorrencia).map((key) => {
                return (<Picker.Item label={tipoOcorrencia[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
                })}
                </Picker>   

             

             <TextInput style={styles.inputHist} color ='#fff' placeholder='                      Destalhes da ocorrência' placeholderTextColor='#666360' multiline={true} textAlignVertical='top' value={historico} onChangeText={(t) => setHistorico(t)} />  
             <BtnCadastrarOcorrencia onPress={confirmar}>
                 <TextBtnOcorrencia>Cadastrar Ocorrência</TextBtnOcorrencia>
             </BtnCadastrarOcorrencia>

            
 
        </Container>
    );
}
const styles = StyleSheet.create({
     formFoto:{
        width:133.85,
        height:180,
        justifyContent:'center',
        alignItems:'center',
       backgroundColor:'#2e2e2e',
       borderRadius:5
    },
    inputHist:{
        width:350,
        height:230,
        backgroundColor:'#2e2e2e',
        borderRadius:10,
        paddingLeft:10,
        marginLeft:30,
        marginTop:15,
        padding:10
        
    },
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