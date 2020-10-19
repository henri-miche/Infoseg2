import React,{ useState} from 'react';
import { SafeAreaView, View, StyleSheet,Image,TextInput,Button,Alert } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import ConfirmarCancel from '../../components/ConfirmarCancel';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as imagePicker from 'expo-image-picker';
import moment from 'moment';
import { mask } from 'remask'
import firebase from '../../connection/FirebaseConection';


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
    


    const navigation = useNavigation();

    const handleClick = () => {
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
        navigation.navigate('HomeRo');
    };


    const saveFoto = (chave) => {
        if (foto !== null) {
            
            uploadImage(foto.uri, chave)
                .then(() => {
                    Alert.alert("Imagem enviada!");
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
        if(nome !== '' && tipoRo !== '' && local !== '' && historico !== '' ){
           
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

    const mascaraCpf = (t) => {
        setCpf(mask(t,['999.999.999-99']))
    }

    const mascaraNascimento = (t) => {
        setNascimento(mask(t,['99/99/9999']))
    }

    const mascaraTelefone = (t) => {
        setTelefone(mask(t,['(99) 99999-9999']))
    }

    return (
        <Container >

            <SafeAreaView style={{ backgroundColor: '#000', flex: 1, marginBottom: 0.5,justifyContent:'flex-end' }}>
                
                    <ScrollView> 
                    
                        <View style={styles.form}>
                            <View style={{flex: 1,marginTop:5}}>
                                <TextInput style={styles.input} placeholder='Nome:*' autoCapitalize='characters' value={nome} onChangeText={(t)=>setNome(t)} />
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
                                    
                                    <TextInput style={styles.input} placeholder='CPF:' keyboardType='number-pad' value={cpf} onChangeText={(t) => mascaraCpf(t)} />
                                    <TextInput style={styles.input} placeholder='Identidade:' keyboardType='number-pad' value={identidade} onChangeText={(t) => setIdentidade(t)} />
                                    <TextInput style={styles.input} placeholder='Nascimento:' keyboardType='number-pad' value={nascimento} onChangeText={(t) => mascaraNascimento(t)} />
                                    <TextInput style={styles.input} placeholder='Tipo RO:*' value={tipoRo} onChangeText={(t) => setTipoRo(t)} />
                                    <TextInput style={styles.input} placeholder='Local:*' autoCapitalize='characters' value={local} onChangeText={(t) => setLocal(t)} />
                                
                                </View>
                            
                        </View>
                                <View style={{flex:1}}>
                                <TextInput style={styles.input} placeholder='Mãe:' value={mae} onChangeText={(t) => setMae(t)} />
                                <TextInput style={styles.input} placeholder='Pai:' value={pai} onChangeText={(t) => setPai(t)} />
                                <TextInput style={styles.input} placeholder='Endereço:' value={endereço} onChangeText={(t) => setEndereço(t)} />
                                </View>

                                <View style={{flexDirection:'row',flex:1}}>

                                      <View style={{flex:1}}>  
                                        <TextInput style={styles.input} placeholder='Telefone:' keyboardType='number-pad' value={telefone} onChangeText={(t) => mascaraTelefone(t)} />
                                     </View>

                                     <View style={{flex:1}}>
                                         <TextInput style={styles.input} placeholder='Gênero:' value={genero} onChangeText={(t) => setGenero(t)} />
                                     </View>
                                </View>
                                <TextInput style={styles.inputHist} placeholder='Histórico:*    *Obrigatório o preenchimento' multiline={true} textAlignVertical='top' value={historico} onChangeText={(t) => setHistorico(t)} />
                        </View>

                    </ScrollView>
                
                <ConfirmarCancel onPress={handleClick} onPress1={confirmar}/>
               
            </SafeAreaView>



        </Container>
    );
}
const styles = StyleSheet.create({
    form:{
        flex:1,
        
    },
    formFoto:{
        width:150,
        height:150,
        backgroundColor:'#D3D3D3',
        marginBottom:5
    },
    campos:{
        
        flexDirection:'column',
        alignItems:'center',
        padding:5,
        justifyContent:'center'
        
        
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#D3D3D3',
        borderRadius:30,
        paddingLeft:10,
        margin:5,
        
    },
    inputHist:{
        height:200,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#D3D3D3',
        
        paddingLeft:10,
        margin:5,
    }
})