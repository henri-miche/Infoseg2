import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import { Container,
ViewTitullo,
TextTitulo,
TouchSair,
ViewQualificaçao,
TextQuaificaçao,
TextNome,
TextLabel,
TextLabelText,
TextLabelcamposmae,
TextCamposmae,
TextDetallhesOcorr,
TextLabeldetalhes,
TextDetalhes,
TextCodRegistro,

} from './styles';

export default () => {

        const route = useRoute();
        const navigation = useNavigation();
        const [key, setKey] = useState(route.params.key);
        const [nome, setNome] = useState();
        const [identidade, setIdentidade] = useState();
        const [cpf, setCpf] = useState();
        const [chaveFoto, setChaveFoto] = useState();
        const [data, setData] = useState();
        const [hora, setHora] = useState();
        const [nascimento, setNascimento] = useState();
        const [tipoRo, setTipoRo] = useState();
        const [local, setLocal] = useState();
        const [mae, setMae] = useState();
        const [pai, setPai] = useState();
        const [telefone, setTelefone] = useState();
        const [genero, setGenero] = useState();
        const [historico, setHistorico] = useState();
        const [cosop, setCosop] = useState();
        const [endereço, setEndereço] = useState();
        const [avatar2,setAvatar2] = useState(null);  
       
    const pushDados = () =>{
     try {
     firebase.database().ref('/Ocorrencias').child(key)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    const identidade = snapshot.val().identidade;
                    const cpf = snapshot.val().cpf;
                    const chaveFoto = snapshot.val().chaveFoto;
                    const data = snapshot.val().data;
                    const hora = snapshot.val().hora;
                    const nascimento = snapshot.val().nascimento;
                    const tipoRo = snapshot.val().tipoRo;
                    const local = snapshot.val().local;
                    const mae = snapshot.val().mae;
                    const pai = snapshot.val().pai;
                    const telefone = snapshot.val().telefone;
                    const genero =snapshot.val().genero;
                    const historico = snapshot.val().historico;
                    const cosop = snapshot.val().cosop;
                    const endereço = snapshot.val().endereço;
                   
                    
                    setIdentidade(identidade);
                    setNome(nome);
                    setCpf(cpf);
                    setChaveFoto(chaveFoto);
                    setData(data);
                    setHora(hora);
                    setNascimento(nascimento);
                    setTipoRo(tipoRo);
                    setLocal(local);
                    setMae(mae);
                    setPai(pai);
                    setTelefone(telefone);
                    setGenero(genero);
                    setHistorico(historico);
                    setCosop(cosop);
                    setEndereço(endereço);

                });

    } catch (error) {
      alert(error);
    }
}

 const buscarFotos = () => {
        const storage = firebase.storage();
        const starsRef = storage.ref('ocorrencias/').child(key);
    
        starsRef.getDownloadURL().then(function (url) {
            let avatar1 = { uri: url };
            setAvatar2(avatar1);
    
        }).catch((error) => {
        if (error.code === 'storage/object-not-found'){
            
        }
        });
    }

useEffect(() => {
      let isUnmount = false;

      setTimeout(() => {
          
      
      if (!isUnmount) {
          pushDados();
          buscarFotos();
      }
   }, 1000);
   return ()=>{
      isUnmount = true;
    setIdentidade('');
    setNome('');
    setCpf('');
    setChaveFoto('');
    setData('');
    setHora('');
    setNascimento('');
    setTipoRo('');
    setLocal('');
    setMae('');
    setPai('');
    setTelefone('');
    setGenero('');
    setHistorico('');
    setCosop('');
    setEndereço('');

      
   }
  }, [])

     const sair = () => {
        setIdentidade('');
        setNome('');
        setCpf('');
        setChaveFoto('');
        setData('');
        setHora('');
        setNascimento('');
        setTipoRo('');
        setLocal('');
        setMae('');
        setPai('');
        setTelefone('');
        setGenero('');
        setHistorico('');
        setCosop('');
        setEndereço('');
        navigation.goBack();
    };
   
    const pdfScreen = () => {
        navigation.navigate('HomeRau',{key:key})
    }

    return (
        <Container >

           <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair onPress = {sair}>
                    <Image source = {require('../../../assets/SetaSair.png')} />
                </TouchSair>
            
            </ViewTitullo>

            <ViewQualificaçao>
                <TextQuaificaçao>Qualificação do Envolvido</TextQuaificaçao>

                <View style = {{flexDirection:'row'}}>

                 <View style={styles.viewImage}>
                    <Image source={avatar2} style={styles.itemAvatar} />
                </View>

                <View style={{}}>
                <TextNome>{nome}</TextNome>

                <View style={{marginTop:16}}>
                <TextLabel>RG:<TextLabelText>{identidade}</TextLabelText></TextLabel>
                <TextLabel>CPF:<TextLabelText>{cpf}</TextLabelText></TextLabel>
                <TextLabel>Telefone:<TextLabelText>{telefone}</TextLabelText></TextLabel>
                <TextLabel>Nascimento:<TextLabelText>{nascimento}</TextLabelText></TextLabel>
                </View>
                
                </View>
               
                </View>
            </ViewQualificaçao>

            <View style={{marginLeft:30}}>
                <TextLabelcamposmae>Mãe:<TextCamposmae>{mae}</TextCamposmae></TextLabelcamposmae>
                <TextLabelcamposmae>Pai:<TextCamposmae>{pai}</TextCamposmae></TextLabelcamposmae>
                 
                 <View style = {{flexDirection:'row'}}>
                     <View style={{flex:1}}>
                     <TextLabelcamposmae>CEP:<TextCamposmae>{}</TextCamposmae></TextLabelcamposmae>
                    </View>

                        <View style={{flex:1}}>
                      <TextLabelcamposmae>Gênero:<TextCamposmae>{genero}</TextCamposmae></TextLabelcamposmae>
                </View>
                 </View>
                 
                <TextLabelcamposmae>Endereço:<TextCamposmae>{endereço}</TextCamposmae></TextLabelcamposmae>
            </View>
            
            <View style={{marginLeft:30,marginTop:35}}>
                <TextDetallhesOcorr>Detalhes da Ocorrência</TextDetallhesOcorr>
            </View>

            <View style={{marginTop:15,marginLeft:30}}>

                <View style={{flexDirection:'row'}} >
                   
                   <View style={{flex:1}}>
                    <TextLabeldetalhes>Data:<TextDetalhes>{data}</TextDetalhes></TextLabeldetalhes>
                    </View>
               
                <View style={{flex:1}}>
                    <TextLabeldetalhes>Hora:<TextDetalhes>{hora}</TextDetalhes></TextLabeldetalhes>
                </View>
                
                </View>

                <View style={{flexDirection:'row'}}>
                    
                    <View style={{flex:1}}>
                        <TextLabeldetalhes>RO:<TextDetalhes>{tipoRo}</TextDetalhes></TextLabeldetalhes>
                    </View>

                    <View style={{flex:1}}>

                         <TextLabeldetalhes>Local:<TextDetalhes>{local}</TextDetalhes></TextLabeldetalhes>
                    </View>

                     
                   
                </View>

                <View>
                    <TextLabeldetalhes>ASO:<TextDetalhes>{cosop}</TextDetalhes></TextLabeldetalhes>
                    <TextLabeldetalhes>Detalhes:<TextDetalhes>{historico}</TextDetalhes></TextLabeldetalhes>
                </View>
            </View>

            <View style = {{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <TextCodRegistro>Código de Registro: {chaveFoto}</TextCodRegistro>
            </View>

            <Button title='pdf' onPress={pdfScreen}/>

        </Container>
    );
}

const styles = StyleSheet.create({

    viewImage:{
        
        marginTop:15,
        marginLeft:30,
        marginRight:15,
    },
    itemAvatar: {
        width: 116,
        height: 156,
        borderRadius: 5,
        
    },

})
  