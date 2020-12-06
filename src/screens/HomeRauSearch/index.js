import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View,Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import { Container} from './styles';
import moment from 'moment';

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
        const [env3,setEnv3] = useState(false);
        const [formNotaFalsa,setFormNotaFalsa] = useState(true);
        const [historicoOcorr,sethistoricoOcorr] = useState(true);
        const [agenteIntegrante,setAgenteIntegrante] = useState(true);
        const [animoUsuario,setAnimoUsuario] = useState(true);
        const [responsavelPrisão,setresponsavelPrisão] = useState(true);
        const [relatorOcorrencia, setRelatorOcorrencia] = useState(true);
        const [tipoOcorrencia,setTipoOcorrencia] = useState();
        const [nomeOcorrencia,setNomeOcorrencia] = useState('');
       
        const [marcaDagua, setMarcaDagua] = useState();
        const [microImpressoes, setMicroImpressoes] = useState();
        const [registroCoincidente, setRegistroCoincidente] = useState();
        const [imagemLatente, setImagemLatente] = useState();
        const [impressaoRelevo, setImpressaoRelevo] = useState();
        const [numeraçaoNota, setNumeraçaoNota] = useState();
        const [fibrasColoridas, setFibrasColoridas] = useState();
        const [marcaTatil, setMarcaTatil] = useState();
        const [fioDeSegurança, setFioDeSegurança] = useState();
        const [fundosEspeciais, setFundosEspeciais] = useState();
        const [fibrasLuzVioleta, setFibrasLuzVioleta] = useState();
        const [faixaHoografica, setFaiaHolografica] = useState();

        const [origemCedula, setOrigemCedula] = useState('');
        
        const [estadoAnimo, setEstadoAnimo] = useState('');
        const [tentouEvadir, setTentouEvadir] = useState('');
        const [possuiaOutrasCedulas, setPossuiaOutrascCeduas] = useState('');
        const [pagouApos, setPagouApos] = useState('');

        const [moeda, setMoeda] = useState('');
        const [janelaTransparente, setJanelaTransparente] = useState('');
        const [outrasCaracteristicas, setOutrasCaracteristicas] = useState('');
        const [tipoPapel, setTipoPapel] = useState('');
        const [recibo, setRecibo] = useState(true);

        const [nomeQuemGerou, setNomeQuemGerou] = useState('');
        
        const [horaGearacao, setHoraGeracao] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
        const [dataGeracao, setDataGeracao] = useState(moment().format('DD-MM-YYYY'));
        
          
       
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

                    const marcaDagua = snapshot.val().marcaDagua;
                    const microImpressoes = snapshot.val().microImpressoes;
                    const regitroCoincidente = snapshot.val().regitroCoincidente;
                    const imagemLatente = snapshot.val().imagemLatente;
                    const impressaoRelevo = snapshot.val().impressaoRelevo;
                    const numeraçaoNota =snapshot.val().numeraçaoNota;
                    const fibrasColoridas = snapshot.val().fibrasColoridas;
                    const marcaTatil = snapshot.val().marcaTatil;
                    const fioDeSegurança =snapshot.val().fioDeSegurança;
                    const fundosEspeciais = snapshot.val().fundosEspeciais;
                    const faixaHoografica = snapshot.val().faixaHoografica;
                    const fibrasLuzVioleta = snapshot.val().fibrasLuzVioleta;

                     const origemCedula = snapshot.val().origemCedula;
                    const estadoAnimo =snapshot.val().estadoAnimo;
                    const tentouEvadir = snapshot.val().tentouEvadir;
                    const possuiaOutrasCedulas = snapshot.val().possuiaOutrasCedulas;
                    const pagouApos = snapshot.val().pagouApos;

                    const moeda =snapshot.val().moeda;
                    const janelaTransparente = snapshot.val().janelaTransparente;
                    const outrasCaracteristicas = snapshot.val().outrasCaracteristicas;
                    const tipoPapel = snapshot.val().tipoDoPapel;
                    const env3 = snapshot.val().env3;



                   
                    
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
                     setMarcaDagua(marcaDagua);
                    setMicroImpressoes(microImpressoes);
                    setRegistroCoincidente(regitroCoincidente);
                    setImagemLatente(imagemLatente);
                    setImpressaoRelevo(impressaoRelevo);
                    setNumeraçaoNota(numeraçaoNota);
                    setFibrasColoridas(fibrasColoridas);
                    setMarcaTatil(marcaTatil);
                    setFioDeSegurança(fioDeSegurança);
                    setFundosEspeciais(fundosEspeciais);
                    setFaiaHolografica(faixaHoografica);
                    setFibrasLuzVioleta(fibrasLuzVioleta);
                    setOrigemCedula(origemCedula);
                    setEstadoAnimo(estadoAnimo);
                    setTentouEvadir(tentouEvadir);
                    setPossuiaOutrascCeduas(possuiaOutrasCedulas);
                    setPagouApos(pagouApos);

                    setJanelaTransparente(janelaTransparente);
                    setMoeda(moeda);
                    setOutrasCaracteristicas(outrasCaracteristicas);
                    setTipoPapel(tipoPapel);
                    setEnv3(env3);

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

    switch (tipoRo) {
        case "BO":
            setNomeOcorrencia('BOLETIM DE OCORRÊNCIA')
            break;
        case "RO":
            setNomeOcorrencia('RELATÓRIO DE OCORRÊNCIA')
            break;
        case "RRM":
            setNomeOcorrencia('RECOLHIMENTO DE MERCADORIA ')
            break;
        case "RAU":
            setNomeOcorrencia('ATENDIMENTO AO USUÁRIO')
            break;        
    
        default:
            break;
    }

},[tipoRo])

        const pushUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref('usuarios').child(user.uid)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    setNomeQuemGerou(nome);

                });
        }}


        useEffect(()=>{
        pushUser();
        if (env3 === true) {
            sethistoricoOcorr(true);
            setAgenteIntegrante(true);
            setresponsavelPrisão(true);
            setRelatorOcorrencia(true);
            setRecibo(true);

        }else{
            setEnv3(false)
            sethistoricoOcorr(false);
            setAgenteIntegrante(false);
            setresponsavelPrisão(false);
            setRelatorOcorrencia(false);
            setRecibo(false);
        }
       

    },[env3]);

  

  const pagina2 = () => {
      navigation.navigate('HomeRauCadastro')
  }

    return (
        <Container >

           <View style={{flexDirection:'row'}}>
            
                <View>
                    <Image source={require('../../../assets/brasaoTransarente.png')} style={{width:50,height:50,marginLeft:5,marginTop:5,marginRight:5}} />
                </View>

                <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center'}} >

                    <View style={{borderWidth:1,marginTop:5,height:25,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                        <Text style={{fontSize:15,fontWeight:'bold'}}>SUPERINTENDÊNCIA DE TRENS URBANOS-BH</Text>
                    </View>

                    <View style={{height:25,borderWidth:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>

                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}} >{nomeOcorrencia}</Text>
                        </View>

                        <View style={{flex:1,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:12,fontWeight:'bold'}} >AUTENTICAÇÃO {chaveFoto}</Text>
                        </View>

                    </View>

                </View>

           </View>

            <View style={{height:30,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,flexDirection:'row'}}>
                
                <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column',}}>
                    <Text style={styles.textoTitulo} >UNIDADE RESPONSAVEL PELO REGISTRO</Text>
                    <Text style={styles.textoConteudo} >CIA. BRASILEIRA DE TRENS URBANOS/STU-BH</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',flexDirection:'column',}}>
                    <Text style={styles.textoTitulo} >ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >RUA JANUÁRIA 181-BAIRRO FLORESTA-BELO HORIZONTE</Text>
                </View>

            </View>

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

            
            



              { responsavelPrisão && 

            <View>
                <View style={{borderWidth:1,height:32,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>RESPONSÁVEL PELA APREENSÃO/PRISÃO/CONDUÇÃO</Text>
                </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    <Text style={styles.textoConteudo} >{origemCedula}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MATRICULA</Text>
                    <Text style={styles.textoConteudo} >{tentouEvadir}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SIAPE</Text>
                    <Text style={styles.textoConteudo} >{possuiaOutrasCedulas}</Text>
                </View>

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{possuiaOutrasCedulas}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                    <Text style={styles.textoConteudo} >{tentouEvadir}</Text>
                </View>

            </View>

            

             
            </View>
                 }

            { relatorOcorrencia && 

            <View>
                <View style={{borderWidth:1,height:32,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>RELATOR DA OCORRÊNCIA</Text>
                </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    <Text style={styles.textoConteudo} >{origemCedula}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MATRICULA</Text>
                    <Text style={styles.textoConteudo} >{tentouEvadir}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SIAPE</Text>
                    <Text style={styles.textoConteudo} >{possuiaOutrasCedulas}</Text>
                </View>

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{possuiaOutrasCedulas}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                    <Text style={styles.textoConteudo} >{tentouEvadir}</Text>
                </View>

            </View>

            

             
            </View>
                 }
            
            

           
               

                
               

                    

             { agenteIntegrante && 
             
            <View>
                
                    <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>AGENTE INTEGRANTE</Text>
                    </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

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

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                    <Text style={styles.textoConteudo} >{hora}</Text>
            </View>
            
            </View>
                 }


                 { recibo && 
             
            <View>
                
                    <View style={{borderWidth:1,height:50,marginTop:10,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>RECIBO DA AUTORIDADE A QUE SE DESTINA OU SEU AGENTE/AUILIAR POICIAL</Text>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>OU RECIBO DO RESPONSÁVEL CIVIL</Text>
                    </View>

                     <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>DESTINATÁRIO/RECIBO 1</Text>
                    </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>RECEBI O "{nomeOcorrencia}" DE AUTENTICAÇÃO {chaveFoto} PARA CONHECIMENTO E PROVIDÊNCIAS, BEM COMO AS PESSOAS, MATERIAIS, OBJETOS
                        , ANIMAIS, SUBSTÂNCIAS E/ OU DOCUMENTOS QUE, EXISTINDO, ESTEJAM DESCRITOS OU ASSINALADOS NESTE DOCUMENTO.
                        </Text>
                        
                    </View>

                   

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>Data</Text>
                        
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>HORA</Text>
                        
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>MATRÍCULA</Text>
                       
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>NOME</Text>
                        
                    </View>

            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>CARGO</Text>
                   
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>ORGÃO/UF</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>UNIDADE</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>PROVIDENCIA A SER TOMADA PELA AUTORIDADE</Text>
                    
            </View>

             <View style={{borderWidth:1,width:'100%',height:32}} >
                    <Text style={styles.textoTitulo}>ASSINATURA</Text>
                    
            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>RECIBO GERADO POR</Text>
                        <Text style={styles.textoConteudo} >{nomeQuemGerou}</Text>
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>data de criação do recibo</Text>
                        <Text style={styles.textoConteudo} >{dataGeracao} {horaGearacao}</Text>
                    </View>

                   

            </View>
            
            </View>
                 }

                 { formNotaFalsa && 
             
            <View>
            <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>CARACTERÍSTICAS QUE EVIDENCIAM A POSSIBILIDADE DE FALSIFICAÇÃO</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MARCA D'ÁGUA</Text>
                    <Text style={styles.textoConteudo} > {marcaDagua} </Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MICROIMPRESSÕES</Text>
                    <Text style={styles.textoConteudo} >{microImpressoes}</Text>
                </View>



            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>REGISTRO COINCIDENTE</Text>
                    <Text style={styles.textoConteudo} >{registroCoincidente}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IMAGEM LATENTE</Text>
                    <Text style={styles.textoConteudo} >{imagemLatente}</Text>
                </View>

                

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IMPRESSÃO EM ALTO RELEVO</Text>
                    <Text style={styles.textoConteudo} >{impressaoRelevo}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NUMERAÇÃO</Text>
                    <Text style={styles.textoConteudo} >{numeraçaoNota}</Text>
                </View>

                

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>FIBRAS COLORIDAS</Text>
                    <Text style={styles.textoConteudo} >{fibrasColoridas}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MARCA TÁTIL</Text>
                    <Text style={styles.textoConteudo} >{marcaTatil}</Text>
                </View>

                

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>FIO DE SEGURANÇA</Text>
                    <Text style={styles.textoConteudo} >{fioDeSegurança}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>FUNDOS ESPECIAIS</Text>
                    <Text style={styles.textoConteudo} >{fundosEspeciais}</Text>
                </View>

                

            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>FIBRAS SENSÍVEIS Á LUZ ULTRAVIOLETA</Text>
                    <Text style={styles.textoConteudo} >{fibrasColoridas}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>FAIXA HOLOGRAFICA</Text>
                    <Text style={styles.textoConteudo} >{faixaHoografica}</Text>
                </View>

                

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                     <Text style={styles.textoTitulo}>TIPO E/OU TAMANHO DO PAPEL</Text>
                     <Text style={styles.textoConteudo} >{tipoPapel}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>JANELA TRANSPARENTE</Text>
                    <Text style={styles.textoConteudo} >{janelaTransparente}</Text>
                </View>

                

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MOEDA</Text>
                <Text style={styles.textoConteudo} >{moeda}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>OUTROS</Text>
                <Text style={styles.textoConteudo} >{outrasCaracteristicas}</Text>
            </View>




             
                </View>
                 }



                { animoUsuario && 
             
            <View>
                <View style={{borderWidth:1,height:32,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>INFORMAÇÕES PRESTADAS PELO ENVOLVIDO</Text>
                </View>

                <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>ORIGEM DA CÉDULA</Text>
                        <Text style={styles.textoConteudo} >{origemCedula}</Text>
                    </View>

                    <View style={{borderWidth:1,flex:1,width:'100%',}} >
                        <Text style={styles.textoTitulo}>ESTADO DE ANIMO DO USUARIO</Text>
                        <Text style={styles.textoConteudo} >{estadoAnimo}</Text>
                    </View>



                </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TENTOU EVADIR DO LOCAL</Text>
                    <Text style={styles.textoConteudo} >{tentouEvadir}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>POSSUIA OUTRAS CÉDULAS VÁLIDAS</Text>
                    <Text style={styles.textoConteudo} >{possuiaOutrasCedulas}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>PAGOU APÓS O FATO</Text>
                    <Text style={styles.textoConteudo} >{pagouApos}</Text>
                </View>

            </View>


            </View>
            }

                   
           <View style={{marginTop:100}} >
                      <Button title='Página 3' onPress={pagina2}  />
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
  