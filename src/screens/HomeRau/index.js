import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View,Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import { Container} from './styles';

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
        const [envolvido2,setEnvolvido2] = useState(false);
        const [formNotaFalsa,setFormNotaFalsa] = useState(true);
        const [historicoOcorr,sethistoricoOcorr] = useState(true);
        const [agenteIntegrante,setAgenteIntegrante] = useState(true);
          
       
    const pushDados = () =>{
     try {
     firebase.database().ref('/Ro').child(key)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().Nome;
                    const identidade = snapshot.val().Identidade;
                    const cpf = snapshot.val().CPF;
                    const chaveFoto = snapshot.val().ChaveFoto;
                    const data = snapshot.val().Data;
                    const hora = snapshot.val().Hora;
                    const nascimento = snapshot.val().Nascimento;
                    const tipoRo = snapshot.val().TipoRo;
                    const local = snapshot.val().Local;
                    const mae = snapshot.val().Mae;
                    const pai = snapshot.val().Pai;
                    const telefone = snapshot.val().Telefone;
                    const genero =snapshot.val().Genero;
                    const historico = snapshot.val().Historico;
                    const cosop = snapshot.val().Cosop;
                    const endereço = snapshot.val().Endereço;
                   
                    
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
        const starsRef = storage.ref('images/').child(key);
    
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
   
    

   const createAndSavePDF = async () => {
  try {
    const { uri } = await Print.printToFileAsync({ count });
    
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
      }
    
  } catch (error) {
    console.error(error);
  }
};

  useEffect(()=>{

    if (envolvido2 === true) {
        sethistoricoOcorr(false)
        setAgenteIntegrante(false)
    }

  },[envolvido2])

  const pagina2 = () => {
      navigation.navigate('HomeRauCadastro',{key:key})
  }

    return (
        <Container >

            <View style={{flexDirection:'row'}}>
            
            <View>
                <Image source={require('../../../assets/brasaoTransarente.png')} style={{width:60,height:60,margin:5}} />
            </View>

            <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}} >
                
            <View style={{borderWidth:1,marginTop:5,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>SUPERINTENDÊNCIA DE TRENS URBANOS-BH</Text>
            </View>
            
            <View style={{flex:1,borderWidth:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>
                
                <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}} >BOLETIM DE OCORRÊNCIA</Text>
                </View>

                 <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}} >CHAVE BO {chaveFoto}</Text>
                </View>

            </View>
            
            </View>

           </View>

            <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>
                
                <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column'}}>
                <Text style={styles.textoTitulo} >UNIDADE RESPONSAVEL PELO REGISTRO</Text>
                <Text style={styles.textoConteudo} >CIA. BRASILEIRA DE TRENS URBANOS/STU-BH</Text>
                </View>

                 <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column'}}>
                <Text style={styles.textoTitulo} >ENDEREÇO</Text>
                <Text style={styles.textoConteudo} >RUA JANUÁRIA 181-BAIRRO FLORESTA-BELO HORIZONTE</Text>
                </View>

            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>DADOS DA OCORRÊCIA</Text>
            </View>

            

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}}>
                <Text style={styles.textoTitulo}>PROVÁVEL DESCRIÇÃO DA OCORRÊNCIA PRINCIPAL</Text>
                <Text style={styles.textoConteudo} >{tipoRo}</Text>
            </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>TENTADO/CONSUMADO</Text>
                <Text style={styles.textoConteudo} >{tipoRo}</Text>
                </View>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>ALVO DO EVENTO</Text>
                <Text style={styles.textoConteudo} >{tipoRo}</Text>
                </View>

             
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>DATA DO FATO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>HORÁRIO DO FATO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>DATA FINAL</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                 <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>HORARIO FINAL</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

             
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>LOCAL</Text>
                <Text style={styles.textoConteudo} >{local}</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>NUMERO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                 <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>BAIRRO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>CEP</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             
            </View>


            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>UF</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>PAÍS</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            </View>
            
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>QUALIFICAÇÃO DOS ENVOLVIDOS</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 1</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>TIPO DE PESSOA</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>TENTADO/CONSUMADO</Text>
                <Text style={styles.textoConteudo}>{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>SEXO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                 <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nome}</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            </View>
           

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:3,width:'100%',}} >
            <Text style={styles.textoTitulo}>GRAU DA LESÃO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            </View>    

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>CÚTIS</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                <Text style={styles.textoConteudo}>{data}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{mae}</Text>
            </View>

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{pai}</Text>
            </View>

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>CPF</Text>
                <Text style={styles.textoConteudo} >{cpf}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>NÚMERO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            

            </View>  


             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>BAIRRO</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:2,width:'100%',}} >
            <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            

            </View>  


             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>PAÍS</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>CEP</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>TELEFONE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            

            </View>  

                
                {envolvido2 &&
            <View>
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 2</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>TIPO DE PESSOA</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>TENTADO/CONSUMADO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>SEXO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                 <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nome}</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            </View>
           

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:2,width:'100%',}} >
             <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:3,width:'100%',}} >
            <Text style={styles.textoTitulo}>GRAU DA LESÃO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            </View>    

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>CÚTIS</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{mae}</Text>
            </View>

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{pai}</Text>
            </View>

            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>CPF</Text>
                <Text style={styles.textoConteudo} >{cpf}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>NÚMERO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            

            </View>  


             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:3,width:'100%',}} >
             <Text style={styles.textoTitulo}>BAIRRO</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:2,width:'100%',}} >
            <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>UF</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            

            </View>  


             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>PAÍS</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>CEP</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>TELEFONE</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

                

            

            </View>  
               </View> } 

                    { historicoOcorr && 
                    <View>
                  <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>HISTÓRICO</Text>
            </View>

            <View style={{borderWidth:1,width:'100%',height:200}}>
                <Text style={styles.textoConteudo}>{historico}</Text>
            </View> 
            </View> 
            }

             { agenteIntegrante && 
             
             <View>
            <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>AGENTE INTEGRANTE</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',marginRight:5,flexDirection:'row'}}>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>MATRÍCULA</Text>
                <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

            <View style={{borderWidth:1,flex:1,width:'100%',}} >
            <Text style={styles.textoTitulo}>SIAPE</Text>
                <Text style={styles.textoConteudo} >{data}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>CARGO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',}} >
             <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{hora}</Text>
                </View>
                </View>
                 }

                   <View style={{marginTop:100}} >
                <Button title='Página 2' onPress={pagina2}  />
                </View>
            

        </Container>
    );
}

const styles = StyleSheet.create({
     viewPadrao:{
        borderWidth:1,
        flex:1,
        width:'100%',
    },
    textoConteudo:{
        fontSize:12,
    },
textoTitulo:{
        fontSize:10,
    },

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






/* <ViewTitullo>
                
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

            <Button title='Gerar PDF' onPress={createAndSavePDF}/>
            */
  