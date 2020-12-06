import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View,Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import { Container} from './styles';


export default () => {

        const route = useRoute();
        const navigation = useNavigation();
        const [key, setKey] = useState(route.params.key);
        const [localparam, setlocalparam] = useState(route.params.local);
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
        const [envolvido2,setEnvolvido2] = useState(true);
       


    const [cidade, setCidade] = useState();
    const [bairro, setBairro] = useState();
    const [logradouro, setLogradouro] = useState();
    const [numeroCasa, setNumeroCasa] = useState();
    const [complemento, setComplemento] = useState();
    const [estado, setEstado] = useState();
   
    const [cep, setCep] = useState();

    const [tipoOcorrencia1, setTipoOcorrencia1] = useState();

    const [tipoDeEnvolvimento, setTipoDeEnvolvimento] = useState('');
    const [nacionalidade, setNacionalidade] = useState();
    const [naturalidade, setNaturalidade] = useState();
    const [idadeAparente, setIdadeAparente] = useState();
    const [estadoCivil, setEstadoCivil] = useState();
    const [cutis, setCutis] = useState();
    const [ocupaçãoAtual, setOcupaçãoAtual] = useState();
    const [grauEscoar, setGrauEscolar] = useState();
    const [orgãoExpedidor, setOrgãoEpedidor] = useState();
    const [ufEnvolvido, setUfEnvolvido] = useState();
    const [paisMoradia, setpaisMoradia] = useState();
    const [tentadoConsumado, setTentadoConsumado] = useState();
    const [alvoDoEvento, setAlvoDoEvento] = useState();
    const [dataDoFato, setDataDoFato] = useState();
    const [horarioDoFato, setHorarioDoFato] = useState();
    const [dataFinal, setDataFinal] = useState();
    const [horarioFinal, setHorarioFinal] = useState();
    const [objetosRecolhidos, setObjetosRecolhidos] = useState('');
      const [nomeOcorrencia,setNomeOcorrencia] = useState('');

    



       

        

        //variaveis env2
        const [cpfEnv2, setCpfEnv2] = useState();
        const [nomeEnv2, setNomeEnv2] = useState();
        const [identidadeEnv2, setIdentidadeEnv2] = useState();
        const [nascimentoEnv2, setNascimentoEnv2] = useState();
        const [maeEnv2, setMaeEnv2] = useState();
        const [paiEnv2, setPaiEnv2] = useState();
        const [telefoneEnv2, setTelefoneEnv2] = useState();
        const [generoEnv2, setGeneroEnv2] = useState();
        const [estadoEnv2, setEstadoEnv2] = useState();
        const [cepEnv2, setCepEnv2] = useState();
        const [cidadeEnv2, setCidadeEnv2] = useState();
        const [bairroEnv2, setBairroEnv2] = useState();
        const [logradouroEnv2, setLogradouroEnv2] = useState();
        const [numeroCasaEnv2, setNumeroCasaEnv2] = useState();
        const [complementoEnv2, setComplementoEnv2] = useState();
        const [tipoDeEnvolvimentoEnv2, setTipoDeEnvolvimentoEnv2] = useState();
        const [nacionalidadeEnv2, setNacionalidadeEnv2] = useState();
        const [naturalidadeEnv2, setNaturalidadeEnv2] = useState();
        const [idadeAparenteEnv2, setIdadeAparenteEnv2] = useState();
        const [estadoCivilEnv2, setEstadoCivilEnv2] = useState();
        const [cutisEnv2, setCutisEnv2] = useState();
        const [ocupaçãoAtualEnv2, setOcupaçãoAtualEnv2] = useState();
        const [grauEscoarEnv2, setGrauEscolarEnv2] = useState();
        const [orgãoExpedidorEnv2, setOrgãoEpedidorEnv2] = useState();
        const [ufEnvolvidoEnv2, setUfEnvolvidoEnv2] = useState();
        const [paisMoradiaEnv2, setpaisMoradiaEnv2] = useState();
        const [env2, setEnv2] = useState(false);

        //variaveis local
        const [nomeEstaçao,setNomeEstaçao]=useState();
        const [bairroEstaçao,setBairoEstaçao]=useState();
        const [cepEstaçao,setCepEstaçao]=useState();
        const [complementoEstaçao,setComplementoEstaçao]=useState();
        const [endereçoEstaçao,setEndereçoEstaçao]=useState();
        const [municipioEstaçao, setMunicipioEstaçao]=useState();
        const [numeroEstaçao,setNumeroEstaçao]=useState();
        const [ufEstaçao,setUfEstaçao]=useState();

        //variaveis agente
        const [matriculaAgente,setMatriculaAgente] = useState();
        const [siapeAgente,setSiapeAgente] = useState();
        const [cargoAgente,setCargoAgente] = useState();
        
    
          
       
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
                    const siapeAgente = snapshot.val().siapeAgente;
                    const matriculaAgente = snapshot.val().matriculaAgente;
                    const cargoAgente = snapshot.val().cargoAgente;
                    const estado = snapshot.val().estado;

                    const tipoOcorrencia1 = snapshot.val().tipoOcorrencia1;
                    const cep = snapshot.val().cep;
                    const bairro = snapshot.val().bairro;
                    const cidade = snapshot.val().cidade;
                    const logradouro = snapshot.val().logradouro;
                    const numeroCasa = snapshot.val().numeroCasa;
                    const complemento = snapshot.val().complemento;
                    const tipodeEnvolvimento = snapshot.val().tipodeEnvolvimento;
                    const nacionalidade = snapshot.val().nacionalidade;
                    const naturalidade = snapshot.val().naturalidade;
                    const idadeAparente = snapshot.val().idadeAparente;
                    const estadoCivil = snapshot.val().estadoCivil;
                    const cutis =snapshot.val().cutis;
                    const ocupaçãoAtual = snapshot.val().ocupaçãoAtual;
                    const grauEscolar = snapshot.val().grauEscolar;

                    


                    const orgãoExpedidor = snapshot.val().orgãoExpedidor;
                    const ufEnvolvido = snapshot.val().ufEnvolvido;
                    const paisMoradia = snapshot.val().paisMoradia;
                    const tentadoConsumado = snapshot.val().tentadoConsumado;
                    const alvoDoEvento = snapshot.val().alvoDoEvento;
                    const dataDoFato = snapshot.val().dataDoFato;
                    const horarioDoFato = snapshot.val().horarioDoFato;
                    const dataFinal = snapshot.val().dataFinal;
                    const horarioFinal = snapshot.val().horarioFinal;

                    const notaFalsa = snapshot.val().notaFalsa;

                    
                    const env2 = snapshot.val().env2;
                    const nomeEnv2 = snapshot.val().nomeEnv2;
                    const cpfEnv2 =snapshot.val().cpfEnv2;
                    const identidadeEnv2 = snapshot.val().identidadeEnv2;
                    const nascimentoEnv2 = snapshot.val().nascimentoEnv2;
                    const objetosRecolhidos = snapshot.val().objetosRecolhidos;
                    


                    const maeEnv2 = snapshot.val().maeEnv2;
                    const paiEnv2 = snapshot.val().paiEnv2;
                    const telefoneEnv2 = snapshot.val().telefoneEnv2;
                    const generoEnv2 = snapshot.val().generoEnv2;
                    const estadoEnv2 = snapshot.val().estadoEnv2;
                    const cepEnv2 = snapshot.val().cepEnv2;
                    const cidadeEnv2 = snapshot.val().cidadeEnv2;
                    const bairroEnv2 = snapshot.val().bairroEnv2;
                    const logradouroEnv2 = snapshot.val().logradouroEnv2;
                    const numeroCasaEnv2 = snapshot.val().numeroCasaEnv2;
                    const complementoEnv2 = snapshot.val().complementoEnv2;
                    const tipodeEnvolvimentoEnv2 = snapshot.val().tipodeEnvolvimentoEnv2;
                    const nacionalidadeEnv2 =snapshot.val().nacionalidadeEnv2;
                    const naturalidadeEnv2 = snapshot.val().naturalidadeEnv2;
                    const idadeAparenteEnv2 = snapshot.val().idadeAparenteEnv2;

                    


                    const estadoCivilEnv2 = snapshot.val().estadoCivilEnv2;
                    const cutisEnv2 = snapshot.val().cutisEnv2;
                    const ocupaçãoAtualEnv2 = snapshot.val().ocupaçãoAtualEnv2;
                    const grauEscolarEnv2 = snapshot.val().grauEscolarEnv2;
                    const orgãoExpedidorEnv2 = snapshot.val().orgãoExpedidorEnv2;
                    const ufEnvolvidoEnv2 = snapshot.val().ufEnvolvidoEnv2;
                    const paisMoradiaEnv2 = snapshot.val().paisMoradiaEnv2;
                   

                    

                    
                    
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
                    setEstado(estado);
                    setSiapeAgente(siapeAgente);
                    setMatriculaAgente(matriculaAgente);
                    setCargoAgente(cargoAgente);
                   
                    setTipoOcorrencia1(tipoOcorrencia1);
                    setCep(cep);
                    setBairro(bairro);
                    setCidade(cidade);
                    setLogradouro(logradouro);
                    setNumeroCasa(numeroCasa);
                    setComplemento(complemento);
                    setTipoDeEnvolvimento(tipodeEnvolvimento);
                    setNacionalidade(nacionalidade);
                    setNaturalidade(naturalidade);
                    setIdadeAparente(idadeAparente);
                    setEstadoCivil(estadoCivil);
                    setCutis(cutis);
                    setOcupaçãoAtual(ocupaçãoAtual);
                    setGrauEscolar(grauEscolar);
                    
                    setOrgãoEpedidor(orgãoExpedidor);
                    setUfEnvolvido(ufEnvolvido);
                    setpaisMoradia(paisMoradia);
                    setTentadoConsumado(tentadoConsumado);
                    setAlvoDoEvento(alvoDoEvento);
                    setDataDoFato(dataDoFato);
                    setHorarioDoFato(horarioDoFato);
                    setDataFinal(dataFinal);
                    setHorarioFinal(horarioFinal);
                   
                    setEnv2(env2);
                    setNomeEnv2(nomeEnv2);
                    setCpfEnv2(cpfEnv2);
                    setIdentidadeEnv2(identidadeEnv2);
                    setNascimentoEnv2(nascimentoEnv2);
                    setIdentidade(identidade);
                    setObjetosRecolhidos(objetosRecolhidos);


                    setMaeEnv2(maeEnv2);
                    setPaiEnv2(paiEnv2);
                    setTelefoneEnv2(telefoneEnv2);
                    setGeneroEnv2(generoEnv2);
                    setEstadoEnv2(estadoEnv2);
                    setCepEnv2(cepEnv2);
                    setCidadeEnv2(cidadeEnv2);
                    setBairroEnv2(bairroEnv2);
                    setLogradouroEnv2(logradouroEnv2);
                    setNumeroCasaEnv2(numeroCasaEnv2)
                    setComplementoEnv2(complementoEnv2);
                    setTipoDeEnvolvimentoEnv2(tipodeEnvolvimentoEnv2);
                    setNacionalidadeEnv2(nacionalidadeEnv2);
                    setNaturalidadeEnv2(naturalidadeEnv2);
                    setIdadeAparenteEnv2(idadeAparenteEnv2);

                    setEstadoCivilEnv2(estadoCivilEnv2);
                    setCutisEnv2(cutisEnv2);
                    setOcupaçãoAtualEnv2(ocupaçãoAtualEnv2);
                    setGrauEscolarEnv2(grauEscolarEnv2);
                    setOrgãoEpedidorEnv2(orgãoExpedidorEnv2);
                    setUfEnvolvidoEnv2(ufEnvolvidoEnv2);
                    setpaisMoradiaEnv2(paisMoradiaEnv2);
                    

                    

                })

    

    } catch (error) {
      alert(error);
    }
}

 

     const poolEndereçoLocal = async(local) =>{
      
      
     try {
     
            const req = await firebase.database().ref('/local/').child(local)
                .once('value');
                const json = await req.toJSON();
                setNomeEstaçao(json.nome);
                setBairoEstaçao(json.bairro);
                setCepEstaçao(json.cep);
                setComplementoEstaçao(json.complemento);
                setEndereçoEstaçao(json.endereço);
                setMunicipioEstaçao(json.municipio);
                setNumeroEstaçao(json.numero);
                
                setUfEstaçao(json.uf);

                

    } catch (error) {
      alert(error);
    }

                
              }

              

useEffect(() => {
      let isUnmount = false;

      setTimeout(() => {
          
      
      if (!isUnmount) {
          pushDados();
          
          
         
      }
   }, 1000);
    if(localparam !== undefined){
          poolEndereçoLocal(localparam);
          }
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

  const pagina2 = () => {
      navigation.navigate('HomeRauCadastro',{key:key})
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

            <View style={{borderWidth:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold',}}>DADOS DA OCORRÊCIA</Text>
            </View>

            

            <View style={{borderWidth:1,width:'100%',marginRight:5,flexDirection:'row',height:32}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}}>
                    <Text style={styles.textoTitulo}>PROVÁVEL DESCRIÇÃO DA OCORRÊNCIA PRINCIPAL</Text>
                    <Text style={styles.textoConteudo} >{tipoOcorrencia1}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TENTADO/CONSUMADO</Text>
                    <Text style={styles.textoConteudo} >{tentadoConsumado}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ALVO DO EVENTO</Text>
                    <Text style={styles.textoConteudo} >{alvoDoEvento}</Text>
                </View>


            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA DO FATO</Text>
                    <Text style={styles.textoConteudo} >{dataDoFato}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>HORÁRIO DO FATO</Text>
                    <Text style={styles.textoConteudo} >{horarioDoFato}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA FINAL</Text>
                    <Text style={styles.textoConteudo} >{dataFinal}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>HORARIO FINAL</Text>
                    <Text style={styles.textoConteudo} >{horarioFinal}</Text>
                </View>

             
            </View>

            <View style={{borderWidth:1,width:'100%',marginRight:5,height:32}}>
                <Text style={styles.textoTitulo}>OBJETOS RECOLHIDOS</Text>
                <Text style={styles.textoConteudo} >{objetosRecolhidos}</Text>
            </View>

             <View style={{borderWidth:1,height:32,width:'100%',flexDirection:'row'}}>
                
                <View style={{borderWidth:1,flex:3,width:'100%',}}>
                    <Text style={styles.textoTitulo}>LOCAL</Text>
                    <Text style={styles.textoConteudo} >{nomeEstaçao}: {endereçoEstaçao}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                    <Text style={styles.textoConteudo} >{municipioEstaçao}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{ufEstaçao}</Text>
                </View>

                

            </View>

             

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NUMERO</Text>
                    <Text style={styles.textoConteudo} >{numeroEstaçao}</Text>
                </View>



                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                    <Text style={styles.textoConteudo} >{complementoEstaçao}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>BAIRRO</Text>
                    <Text style={styles.textoConteudo} >{bairroEstaçao}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CEP</Text>
                    <Text style={styles.textoConteudo} >{cepEstaçao}</Text>
                </View>


            </View>


           
            
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>QUALIFICAÇÃO DOS ENVOLVIDOS</Text>
            </View>

             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 1</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SEXO</Text>
                    <Text style={styles.textoConteudo} >{genero}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                    <Text style={styles.textoConteudo} >{tipoDeEnvolvimento}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                    <Text style={styles.textoConteudo} >{nascimento}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                    <Text style={styles.textoConteudo} >{naturalidade}</Text>
                </View>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nome}</Text>
            </View>

            
           

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                    <Text style={styles.textoConteudo} >{idadeAparente}</Text>
                </View>



                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                    <Text style={styles.textoConteudo} >{estadoCivil}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                    <Text style={styles.textoConteudo} >{nacionalidade}</Text>
                </View>

            </View>    

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CÚTIS</Text>
                    <Text style={styles.textoConteudo} >{cutis}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                    <Text style={styles.textoConteudo} >{ocupaçãoAtual}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                    <Text style={styles.textoConteudo}>{grauEscoar}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{mae}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{pai}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                    <Text style={styles.textoConteudo} >{identidade}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                    <Text style={styles.textoConteudo} >{orgãoExpedidor}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{ufEnvolvido}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CPF</Text>
                    <Text style={styles.textoConteudo} >{cpf}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >{logradouro}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO</Text>
                    <Text style={styles.textoConteudo} >{numeroCasa}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                    <Text style={styles.textoConteudo} >{complemento}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>BAIRRO</Text>
                    <Text style={styles.textoConteudo} >{bairro}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                    <Text style={styles.textoConteudo} >{cidade}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{estado}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>PAÍS</Text>
                    <Text style={styles.textoConteudo} >{paisMoradia}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CEP</Text>
                    <Text style={styles.textoConteudo} >{cep}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TELEFONE</Text>
                    <Text style={styles.textoConteudo} >{telefone}</Text>
                </View>





            </View>  

                
                {envolvido2 &&
            <View>
             <View style={{borderWidth:1,flex:1,width:'100%',justifyContent:'center',alignItems:'center',marginRight:5,backgroundColor:'#BEBEBE'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>ENVOLVIDO 2</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>




                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>SEXO</Text>
                    <Text style={styles.textoConteudo} >{generoEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TIPO DE ENVOLVIMENTO</Text>
                    <Text style={styles.textoConteudo} >{tipoDeEnvolvimentoEnv2}</Text>
                </View>
               
                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>DATA DE NASCIMENTO</Text>
                    <Text style={styles.textoConteudo} >{nascimentoEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NATURALIDADE/UF</Text>
                    <Text style={styles.textoConteudo} >{naturalidadeEnv2}</Text>
                </View>

            </View>

             <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>NOME COMPLETO</Text>
                <Text style={styles.textoConteudo} >{nomeEnv2}</Text>
            </View>

           
            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>IDADE APARENTE</Text>
                    <Text style={styles.textoConteudo} >{idadeAparenteEnv2}</Text>
                </View>



                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ESTADO CIVIL</Text>
                    <Text style={styles.textoConteudo} >{estadoCivilEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NACIONALIDADE</Text>
                    <Text style={styles.textoConteudo} >{nacionalidadeEnv2}</Text>
                </View>

            </View>    

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CÚTIS</Text>
                    <Text style={styles.textoConteudo} >{cutisEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>OCUPAÇÃO ATUAL</Text>
                    <Text style={styles.textoConteudo} >{ocupaçãoAtualEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>GRAU DE ESCOLARIDADE</Text>
                    <Text style={styles.textoConteudo} >{grauEscoarEnv2}</Text>
                </View>

            </View>   

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>MÃE</Text>
                <Text style={styles.textoConteudo} >{maeEnv2}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5}}>
                <Text style={styles.textoTitulo}>PAI</Text>
                <Text style={styles.textoConteudo} >{paiEnv2}</Text>
            </View>

            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO DA IDENTIDADE</Text>
                    <Text style={styles.textoConteudo} >{identidadeEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ORGÃO EXPEDIDOR</Text>
                    <Text style={styles.textoConteudo} >{orgãoExpedidorEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{ufEnvolvidoEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CPF</Text>
                    <Text style={styles.textoConteudo} >{cpfEnv2}</Text>
                </View>

            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>ENDEREÇO</Text>
                    <Text style={styles.textoConteudo} >{logradouroEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>NÚMERO</Text>
                    <Text style={styles.textoConteudo} >{numeroCasaEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>COMPLEMENTO</Text>
                    <Text style={styles.textoConteudo} >{complementoEnv2}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:3,width:'100%',}} >
                    <Text style={styles.textoTitulo}>BAIRRO</Text>
                    <Text style={styles.textoConteudo} >{bairroEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:2,width:'100%',}} >
                    <Text style={styles.textoTitulo}>MUNICÍPIO</Text>
                    <Text style={styles.textoConteudo} >{cidade}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>UF</Text>
                    <Text style={styles.textoConteudo} >{estadoEnv2}</Text>
                </View>



            </View>  


            <View style={{borderWidth:1,height:32,width:'100%',marginRight:5,flexDirection:'row'}}>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>PAÍS</Text>
                    <Text style={styles.textoConteudo} >{paisMoradiaEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>CEP</Text>
                    <Text style={styles.textoConteudo} >{cepEnv2}</Text>
                </View>

                <View style={{borderWidth:1,flex:1,width:'100%',}} >
                    <Text style={styles.textoTitulo}>TELEFONE</Text>
                    <Text style={styles.textoConteudo} >{telefoneEnv2}</Text>
                </View>





            </View>  
               </View> } 

                   

            

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
        paddingLeft:2,
        
    },
textoTitulo:{
        fontSize:10,
        paddingLeft:2,
        
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
  