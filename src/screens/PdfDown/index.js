import React,{useState,useEffect} from 'react';
import { Button, Image,StyleSheet,View,Text,ActivityIndicator } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import { Container,LoadingArea,BtnCadastrarOcorrencia,
TextBtnOcorrencia,
LoadingIcon,

} from './styles';
import moment from 'moment';

export default () => {

        const route = useRoute();
        const navigation = useNavigation();
        const [key, setKey] = useState(route.params.key);
        const [localparam, setlocalparam] = useState(route.params.local);
        const [chaveFoto, setChaveFoto] = useState();

        //variáveis envolvido 1
        const [nome, setNome] = useState();
        const [identidade, setIdentidade] = useState();
        const [cpf, setCpf] = useState();  
        const [data, setData] = useState();
        const [hora, setHora] = useState();
        const [nascimento, setNascimento] = useState();
        const [local, setLocal] = useState();
        const [mae, setMae] = useState();
        const [pai, setPai] = useState();
        const [telefone, setTelefone] = useState();
        const [genero, setGenero] = useState();
        const [endereço, setEndereço] = useState();
        const [cidade, setCidade] = useState();
        const [bairro, setBairro] = useState();
        const [logradouro, setLogradouro] = useState();
        const [numeroCasa, setNumeroCasa] = useState();
        const [complemento, setComplemento] = useState();
        const [estado, setEstado] = useState();
        const [cep, setCep] = useState();
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

        //variáveis dados da ocorrência
        const [historico, setHistorico] = useState();
        const [tipoRo, setTipoRo] = useState();
        const [tipoDeEnvolvimento, setTipoDeEnvolvimento] = useState('');
        const [tipoOcorrencia1, setTipoOcorrencia1] = useState();
        const [tentadoConsumado, setTentadoConsumado] = useState();
        const [alvoDoEvento, setAlvoDoEvento] = useState();
        const [dataDoFato, setDataDoFato] = useState();
        const [horarioDoFato, setHorarioDoFato] = useState();
        const [dataFinal, setDataFinal] = useState();
        const [horarioFinal, setHorarioFinal] = useState();
        const [objetosRecolhidos, setObjetosRecolhidos] = useState('');
        const [nomeOcorrencia,setNomeOcorrencia] = useState('');

        //variaveis env2
        const [cpfEnv2, setCpfEnv2] = useState('');
        const [nomeEnv2, setNomeEnv2] = useState('');
        const [identidadeEnv2, setIdentidadeEnv2] = useState('');
        const [nascimentoEnv2, setNascimentoEnv2] = useState('');
        const [maeEnv2, setMaeEnv2] = useState('');
        const [paiEnv2, setPaiEnv2] = useState('');
        const [telefoneEnv2, setTelefoneEnv2] = useState('');
        const [generoEnv2, setGeneroEnv2] = useState('');
        const [estadoEnv2, setEstadoEnv2] = useState('');
        const [cepEnv2, setCepEnv2] = useState('');
        const [cidadeEnv2, setCidadeEnv2] = useState('');
        const [bairroEnv2, setBairroEnv2] = useState('');
        const [logradouroEnv2, setLogradouroEnv2] = useState('');
        const [numeroCasaEnv2, setNumeroCasaEnv2] = useState('');
        const [complementoEnv2, setComplementoEnv2] = useState('');
        const [tipoDeEnvolvimentoEnv2, setTipoDeEnvolvimentoEnv2] = useState('');
        const [nacionalidadeEnv2, setNacionalidadeEnv2] = useState('');
        const [naturalidadeEnv2, setNaturalidadeEnv2] = useState('');
        const [idadeAparenteEnv2, setIdadeAparenteEnv2] = useState('');
        const [estadoCivilEnv2, setEstadoCivilEnv2] = useState('');
        const [cutisEnv2, setCutisEnv2] = useState('');
        const [ocupaçãoAtualEnv2, setOcupaçãoAtualEnv2] = useState('');
        const [grauEscoarEnv2, setGrauEscolarEnv2] = useState('');
        const [orgãoExpedidorEnv2, setOrgãoEpedidorEnv2] = useState('');
        const [ufEnvolvidoEnv2, setUfEnvolvidoEnv2] = useState('');
        const [paisMoradiaEnv2, setpaisMoradiaEnv2] = useState('');
        

        //Variáveis envolvido 3
        const [cpfEnv3, setCpfEnv3] = useState('xx');
        const [nomeEnv3, setNomeEnv3] = useState('xx');
        const [identidadeEnv3, setIdentidadeEnv3] = useState('xx');
        const [nascimentoEnv3, setNascimentoEnv3] = useState('xx'); 
        const [maeEnv3, setMaeEnv3] = useState('xx');
        const [paiEnv3, setPaiEnv3] = useState('xx');
        const [telefoneEnv3, setTelefoneEnv3] = useState('xx');
        const [generoEnv3, setGeneroEnv3] = useState('xx');
        const [estadoEnv3, setEstadoEnv3] = useState('xx');
        const [cepEnv3, setCepEnv3] = useState('');
        const [cidadeEnv3, setCidadeEnv3] = useState('');
        const [bairroEnv3, setBairroEnv3] = useState('');
        const [logradouroEnv3, setLogradouroEnv3] = useState('');
        const [numeroCasaEnv3, setNumeroCasaEnv3] = useState('');
        const [complementoEnv3, setComplementoEnv3] = useState('');   
        const [tipoDeEnvolvimentoEnv3, setTipoDeEnvolvimentoEnv3] = useState('');
        const [nacionalidadeEnv3, setNacionalidadeEnv3] = useState('');
        const [naturalidadeEnv3, setNaturalidadeEnv3] = useState('');
        const [idadeAparenteEnv3, setIdadeAparenteEnv3] = useState('');
        const [estadoCivilEnv3, setEstadoCivilEnv3] = useState('');
        const [cutisEnv3, setCutisEnv3] = useState('');
        const [ocupaçãoAtualEnv3, setOcupaçãoAtualEnv3] = useState('');
        const [grauEscoarEnv3, setGrauEscolarEnv3] = useState('');
        const [orgãoExpedidorEnv3, setOrgãoEpedidorEnv3] = useState('');
        const [ufEnvolvidoEnv3, setUfEnvolvidoEnv3] = useState('');
        const [paisMoradiaEnv3, setpaisMoradiaEnv3] = useState('');

        //Variáveis envolvido 4
        const [cpfEnv4, setCpfEnv4] = useState();
        const [nomeEnv4, setNomeEnv4] = useState();
        const [identidadeEnv4, setIdentidadeEnv4] = useState();
        const [nascimentoEnv4, setNascimentoEnv4] = useState(); 
        const [maeEnv4, setMaeEnv4] = useState();
        const [paiEnv4, setPaiEnv4] = useState();
        const [telefoneEnv4, setTelefoneEnv4] = useState();
        const [generoEnv4, setGeneroEnv4] = useState();
        const [estadoEnv4, setEstadoEnv4] = useState();
        const [cepEnv4, setCepEnv4] = useState();
        const [cidadeEnv4, setCidadeEnv4] = useState();
        const [bairroEnv4, setBairroEnv4] = useState();
        const [logradouroEnv4, setLogradouroEnv4] = useState();
        const [numeroCasaEnv4, setNumeroCasaEnv4] = useState();
        const [complementoEnv4, setComplementoEnv4] = useState();   
        const [tipoDeEnvolvimentoEnv4, setTipoDeEnvolvimentoEnv4] = useState();
        const [nacionalidadeEnv4, setNacionalidadeEnv4] = useState();
        const [naturalidadeEnv4, setNaturalidadeEnv4] = useState();
        const [idadeAparenteEnv4, setIdadeAparenteEnv4] = useState();
        const [estadoCivilEnv4, setEstadoCivilEnv4] = useState();
        const [cutisEnv4, setCutisEnv4] = useState();
        const [ocupaçãoAtualEnv4, setOcupaçãoAtualEnv4] = useState();
        const [grauEscoarEnv4, setGrauEscolarEnv4] = useState();
        const [orgãoExpedidorEnv4, setOrgãoEpedidorEnv4] = useState();
        const [ufEnvolvidoEnv4, setUfEnvolvidoEnv4] = useState();
        const [paisMoradiaEnv4, setpaisMoradiaEnv4] = useState();

        //variaveis local
        const [nomeEstaçao,setNomeEstaçao]=useState();
        const [bairroEstaçao,setBairoEstaçao]=useState();
        const [cepEstaçao,setCepEstaçao]=useState();
        const [complementoEstaçao,setComplementoEstaçao]=useState();
        const [endereçoEstaçao,setEndereçoEstaçao]=useState();
        const [municipioEstaçao, setMunicipioEstaçao]=useState();
        const [numeroEstaçao,setNumeroEstaçao]=useState();
        const [ufEstaçao,setUfEstaçao]=useState();

         //variaveis agente relator
        const [matriculaAgenteRelator,setMatriculaAgenteRelator] = useState();
        const [siapeAgenteRelator,setSiapeAgenteRelator] = useState();
        const [cargoAgenteRelator,setCargoAgenteRelator] = useState();
        const [nomeAgenteRelator, setnomeAgenteRelator] = useState();

        //agente integrante 1
        const [nomeAgente1,setNomeAgente1] = useState();
        const [siapeAgente1,setSiapeAgente1] = useState();
        const [matriculaAgente1,setMatriculaAgente1] = useState();
        const [cargoAgente1, setCargoAgente1] = useState();
        const [tipoEnvolvimentoAgente1, setTipoEnvolvimentoAgente1] = useState();

         //agente integrante 2
        const [nomeAgente2,setNomeAgente2] = useState();
        const [siapeAgente2,setSiapeAgente2] = useState();
        const [matriculaAgente2,setMatriculaAgente2] = useState();
        const [cargoAgente2, setCargoAgente2] = useState();
        const [tipoEnvolvimentoAgente2, setTipoEnvolvimentoAgente2] = useState();

        //variaveis agente responsavel prisao
        const [nomeAgenteResponsavel,setNomeAgenteResponsavel] = useState();
        const [siapeAgenteResponsavel,setSiapeAgenteResponsavel] = useState();
        const [matriculaAgenteResponsavel,setMatriculaAgenteResponsavel] = useState();
        const [cargoAgenteResponsavel, setCargoAgenteResponsavel] = useState();
        



                   


        
        const [tipoOcorrencia,setTipoOcorrencia] = useState();
        
       
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
        

        const [nomeQuemGerou, setNomeQuemGerou] = useState('');
        const [horaGearacao, setHoraGeracao] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
        const [dataGeracao, setDataGeracao] = useState(moment().format('DD-MM-YYYY'));


        const [env2, setEnv2] = useState(true);
        const [envolvido2,setEnvolvido2] = useState(true);
        const [env3,setEnv3] = useState(true);
        const [env4,setEnv4] = useState(true);
        const [formNotaFalsa,setFormNotaFalsa] = useState(true);
        const [historicoOcorr,sethistoricoOcorr] = useState(true);
        const [agenteIntegrante,setAgenteIntegrante] = useState(true);
        const [animoUsuario,setAnimoUsuario] = useState(true);
        const [responsavelPrisão,setresponsavelPrisão] = useState(true);
        const [relatorOcorrencia, setRelatorOcorrencia] = useState(true);
        const [recibo, setRecibo] = useState(true);
        const [freedown, setFreeDown] = useState(false);
        const [loading, setLoading] = useState(false);
        

       
    const pushDados = () =>{
     try {
     firebase.database().ref('/Ocorrencias').child(key)
                .once('value').then((snapshot) => {
                    //env1
                    const nome = snapshot.val().nome;
                    const identidade = snapshot.val().identidade;
                    const cpf = snapshot.val().cpf;
                    const chaveFoto = snapshot.val().chaveFoto;
                    const data = snapshot.val().data;
                    const hora = snapshot.val().hora;
                    const nascimento = snapshot.val().nascimento;
                    const local = snapshot.val().local;
                    const mae = snapshot.val().mae;
                    const pai = snapshot.val().pai;
                    const telefone = snapshot.val().telefone;
                    const genero =snapshot.val().genero;
                    const endereço = snapshot.val().endereço;

                    const cidade = snapshot.val().cidade;
                    const bairro = snapshot.val().bairro;
                    const logradouro = snapshot.val().logradouro;
                    const numeroCasa = snapshot.val().numeroCasa;
                    const complemento = snapshot.val().complemento;
                    const estado = snapshot.val().estado;//observar pq não esta usando
                    const cep = snapshot.val().cep;
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

                    //dados ocorrencia
                    const tipoRo = snapshot.val().tipoRo;
                    const historico = snapshot.val().historico;
                    const tipodeEnvolvimento = snapshot.val().tipodeEnvolvimento;
                    const tentadoConsumado = snapshot.val().tentadoConsumado;
                    const alvoDoEvento = snapshot.val().alvoDoEvento;
                    const dataDoFato = snapshot.val().dataDoFato;
                    const horarioDoFato = snapshot.val().horarioDoFato;
                    const dataFinal = snapshot.val().dataFinal;
                    const horarioFinal = snapshot.val().horarioFinal;
                    const tipoOcorrencia1 = snapshot.val().tipoOcorrencia1;
                    const objetosRecolhidos = snapshot.val().objetosRecolhidos;
                    const nomeOcorrencia = snapshot.val().nomeOcorrencia;//observar pq não esta usando
                    
                    
                    
                    //agente relator
                    const matriculaAgenteRelator = snapshot.val().matriculaAgenteRelator;
                    const siapeAgenteRelator = snapshot.val().siapeAgenteRelator;
                    const cargoAgenteRelator = snapshot.val().cargoAgenteRelator;
                    const nomeAgenteRelator = snapshot.val().nomeAgenteRelator;

                    //agente envolvido 1
                    const nomeAgente1 = snapshot.val().nomeAgente1;
                    const siapeAgente1 = snapshot.val().siapeAgente1;
                    const matriculaAgente1 = snapshot.val().matriculaAgente1;
                    const cargoAgente1 = snapshot.val().cargoAgente1;
                    const tipoEnvolvimentoAgente1 = snapshot.val().tipoEnvolvimentoAgente1;
               
                
               

                    //agente envolvido 2
                    const nomeAgente2 = snapshot.val().nomeAgente2;
                    const siapeAgente2 = snapshot.val().siapeAgente2;
                    const matriculaAgente2 = snapshot.val().matriculaAgente2;
                    const cargoAgente2 = snapshot.val().cargoAgente2;
                    const tipoEnvolvimentoAgente2 = snapshot.val().tipoEnvolvimentoAgente2;
                

                    //env2
                    const env2 = snapshot.val().env2;
                    const nomeEnv2 = snapshot.val().nomeEnv2;
                    const cpfEnv2 =snapshot.val().cpfEnv2;
                    const identidadeEnv2 = snapshot.val().identidadeEnv2;
                    const nascimentoEnv2 = snapshot.val().nascimentoEnv2;
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
                    
                    //env3
                    const env3 = snapshot.val().env3;
                    const nomeEnv3 = snapshot.val().nomeEnv3;
                    const cpfEnv3 =snapshot.val().cpfEnv3;
                    const identidadeEnv3 = snapshot.val().identidadeEnv3;
                    const nascimentoEnv3 = snapshot.val().nascimentoEnv3;
                    const maeEnv3 = snapshot.val().maeEnv3;
                    const paiEnv3 = snapshot.val().paiEnv3;
                    const telefoneEnv3 = snapshot.val().telefoneEnv3;
                    const generoEnv3 = snapshot.val().generoEnv3;
                    const estadoEnv3 = snapshot.val().estadoEnv3;
                    const cepEnv3 = snapshot.val().cepEnv3;
                    const cidadeEnv3 = snapshot.val().cidadeEnv3;
                    const bairroEnv3 = snapshot.val().bairroEnv3;
                    const logradouroEnv3 = snapshot.val().logradouroEnv3;
                    const numeroCasaEnv3 = snapshot.val().numeroCasaEnv3;
                    const complementoEnv3 = snapshot.val().complementoEnv3;
                    const tipodeEnvolvimentoEnv3 = snapshot.val().tipodeEnvolvimentoEnv3;
                    const nacionalidadeEnv3 =snapshot.val().nacionalidadeEnv3;
                    const naturalidadeEnv3 = snapshot.val().naturalidadeEnv3;
                    const idadeAparenteEnv3 = snapshot.val().idadeAparenteEnv3;
                    const estadoCivilEnv3 = snapshot.val().estadoCivilEnv3;
                    const cutisEnv3 = snapshot.val().cutisEnv3;
                    const ocupaçãoAtualEnv3 = snapshot.val().ocupaçãoAtualEnv3;
                    const grauEscolarEnv3 = snapshot.val().grauEscolarEnv3;
                    const orgãoExpedidorEnv3 = snapshot.val().orgãoExpedidorEnv3;
                    const ufEnvolvidoEnv3 = snapshot.val().ufEnvolvidoEnv3;
                    const paisMoradiaEnv3 = snapshot.val().paisMoradiaEnv3;

                    //env4
                    const env4 = snapshot.val().env4;//observar pq não esta usando
                    const nomeEnv4 = snapshot.val().nomeEnv4;
                    const cpfEnv4 =snapshot.val().cpfEnv4;
                    const identidadeEnv4 = snapshot.val().identidadeEnv4;
                    const nascimentoEnv4 = snapshot.val().nascimentoEnv4;
                    const maeEnv4 = snapshot.val().maeEnv4;
                    const paiEnv4 = snapshot.val().paiEnv4;
                    const telefoneEnv4 = snapshot.val().telefoneEnv4;
                    const generoEnv4= snapshot.val().generoEnv4;
                    const estadoEnv4 = snapshot.val().estadoEnv4;
                    const cepEnv4 = snapshot.val().cepEnv4;
                    const cidadeEnv4 = snapshot.val().cidadeEnv4;
                    const bairroEnv4 = snapshot.val().bairroEnv4;
                    const logradouroEnv4 = snapshot.val().logradouroEnv4;
                    const numeroCasaEnv4 = snapshot.val().numeroCasaEnv4;
                    const complementoEnv4 = snapshot.val().complementoEnv4;
                    const tipodeEnvolvimentoEnv4 = snapshot.val().tipodeEnvolvimentoEnv4;
                    const nacionalidadeEnv4 =snapshot.val().nacionalidadeEnv4;
                    const naturalidadeEnv4 = snapshot.val().naturalidadeEnv4;
                    const idadeAparenteEnv4 = snapshot.val().idadeAparenteEnv4;
                    const estadoCivilEnv4 = snapshot.val().estadoCivilEnv4;
                    const cutisEnv4 = snapshot.val().cutisEnv4;
                    const ocupaçãoAtualEnv4 = snapshot.val().ocupaçãoAtualEnv4;
                    const grauEscolarEnv4 = snapshot.val().grauEscolarEnv4;
                    const orgãoExpedidorEnv4 = snapshot.val().orgãoExpedidorEnv4;
                    const ufEnvolvidoEnv4 = snapshot.val().ufEnvolvidoEnv4;
                    const paisMoradiaEnv4 = snapshot.val().paisMoradiaEnv4;

                   
                    
                    const notaFalsa = snapshot.val().notaFalsa;
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
                    setEndereço(endereço);
                    setEstado(estado);

                    
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


                   //adicionar setenv3
                    setNomeEnv3(nomeEnv3);
                    setCpfEnv3(cpfEnv3);
                    setIdentidadeEnv3(identidadeEnv3);
                    setNascimentoEnv3(nascimentoEnv3);
                    setMaeEnv3(maeEnv3);
                    setPaiEnv3(paiEnv3);
                    setTelefoneEnv3(telefoneEnv3);
                    setGeneroEnv3(generoEnv3);
                    setEstadoEnv3(estadoEnv3);
                    setCepEnv3(cepEnv3);
                    setCidadeEnv3(cidadeEnv3);
                    setBairroEnv3(bairroEnv3);
                    setLogradouroEnv3(logradouroEnv3);
                    setNumeroCasaEnv3(numeroCasaEnv3)
                    setComplementoEnv3(complementoEnv3);
                    setTipoDeEnvolvimentoEnv3(tipodeEnvolvimentoEnv3);
                    setNacionalidadeEnv3(nacionalidadeEnv3);
                    setNaturalidadeEnv3(naturalidadeEnv3);
                    setIdadeAparenteEnv3(idadeAparenteEnv3);
                    setEstadoCivilEnv3(estadoCivilEnv3);
                    setCutisEnv3(cutisEnv3);
                    setOcupaçãoAtualEnv3(ocupaçãoAtualEnv3);
                    setGrauEscolarEnv3(grauEscolarEnv3);
                    setOrgãoEpedidorEnv3(orgãoExpedidorEnv3);
                    setUfEnvolvidoEnv3(ufEnvolvidoEnv3);
                    setpaisMoradiaEnv3(paisMoradiaEnv3);

                    //adicionar setenv4
                    setNomeEnv4(nomeEnv4);
                    setCpfEnv4(cpfEnv4);
                    setIdentidadeEnv4(identidadeEnv4);
                    setNascimentoEnv4(nascimentoEnv4);
                    setMaeEnv4(maeEnv4);
                    setPaiEnv4(paiEnv4);
                    setTelefoneEnv4(telefoneEnv4);
                    setGeneroEnv4(generoEnv4);
                    setEstadoEnv4(estadoEnv4);
                    setCepEnv4(cepEnv4);
                    setCidadeEnv4(cidadeEnv4);
                    setBairroEnv4(bairroEnv4);
                    setLogradouroEnv4(logradouroEnv4);
                    setNumeroCasaEnv4(numeroCasaEnv4)
                    setComplementoEnv4(complementoEnv4);
                    setTipoDeEnvolvimentoEnv4(tipodeEnvolvimentoEnv4);
                    setNacionalidadeEnv4(nacionalidadeEnv4);
                    setNaturalidadeEnv4(naturalidadeEnv4);
                    setIdadeAparenteEnv4(idadeAparenteEnv4);
                    setEstadoCivilEnv4(estadoCivilEnv4);
                    setCutisEnv4(cutisEnv4);
                    setOcupaçãoAtualEnv4(ocupaçãoAtualEnv4);
                    setGrauEscolarEnv4(grauEscolarEnv4);
                    setOrgãoEpedidorEnv4(orgãoExpedidorEnv4);
                    setUfEnvolvidoEnv4(ufEnvolvidoEnv4);
                    setpaisMoradiaEnv4(paisMoradiaEnv4);



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

                    //variaveis agente relator
                    setMatriculaAgenteRelator(matriculaAgenteRelator);
                    setSiapeAgenteRelator(siapeAgenteRelator);
                    setCargoAgenteRelator(cargoAgenteRelator);
                    setnomeAgenteRelator(nomeAgenteRelator);

                    //agente integrante 1
                    setNomeAgente1(nomeAgente1);
                    setSiapeAgente1(siapeAgente1);
                    setMatriculaAgente1(matriculaAgente1);
                    setCargoAgente1(cargoAgente1);
                    setTipoEnvolvimentoAgente1(tipoEnvolvimentoAgente1);

                    //agente integrante 2
                    setNomeAgente2(nomeAgente2);
                    setSiapeAgente2(siapeAgente2);
                    setMatriculaAgente2(matriculaAgente2);
                    setCargoAgente2(cargoAgente2);
                    setTipoEnvolvimentoAgente2(tipoEnvolvimentoAgente2);
                    
         


                    

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
        
        setEndereço('');
        navigation.goBack();
    };
   

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
    

  const createAndSavePDF = async (html) => {
  try {
      setLoading(true);
    const { uri } = await Print.printToFileAsync({ html });
    
      const permission = await MediaLibrary.requestPermissionsAsync();
      if (permission.granted) {
        await MediaLibrary.createAssetAsync(uri);
        console.log(uri.split('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540h-michel%252FInfoseg/Print/'))
        setLoading(false);
        alert('PDF: '+uri.split('file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540h-michel%252FInfoseg/Print/')+' \nbaixado com sucesso!');
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
       
       

    });

  

  const pagina2 = () => {
      navigation.navigate('HomeRauCadastro')
  }

  useEffect(()=>{
      if (tipoEnvolvimentoAgente1==='Responsável pela Apreensão/Prisão/Condução') {
          setNomeAgenteResponsavel(nomeAgente1);
          setMatriculaAgenteResponsavel(matriculaAgente1);
          setSiapeAgenteResponsavel(siapeAgente1);
          setCargoAgenteResponsavel(cargoAgente1);
          setNomeAgente1('');
          setMatriculaAgente1('');
          setSiapeAgente1('');
          setCargoAgente1('');
          

      }
      if (tipoEnvolvimentoAgente2==='Responsável pela Apreensão/Prisão/Condução') {
          setNomeAgenteResponsavel(nomeAgente2);
          setMatriculaAgenteResponsavel(matriculaAgente2);
          setSiapeAgenteResponsavel(siapeAgente2);
          setCargoAgenteResponsavel(cargoAgente2);
          setNomeAgente2('');
          setMatriculaAgente2('');
          setSiapeAgente2('');
          setCargoAgente2('');
          

      }
  },[tipoEnvolvimentoAgente1,tipoEnvolvimentoAgente2])

  useEffect(()=>{
    if (nomeOcorrencia) {
        setFreeDown(true)
    }
  },[nomeOcorrencia])

  const htmlContent1 = `
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pdf Content</title>
    <link rel="stylesheet" href="estilo.css" />
    
</head>

<style>
*{
    box-sizing: border-box;
}

body{
    margin: 0px;
}

img {
    width: 70px;
    height: 70px;
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 5px;
}
.ContainerCima{
    display: flex;
    flex-direction: row;
}
.Inteira{
    border:1px solid black;
    width: 790px;
    line-height: 35px;
    background-color: #bebebe;
    margin-top: 5px;
    text-align: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    
}
.Meia{
    border:1px solid black;
    width: 395px;
    height: 35px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    align-content: center;
    line-height: 35px;
    font-weight: bold; 
    text-align: center;
}
.InteiraReal{
    border:1px solid black;
    width: 870px;
    height: 35px;
    text-align: center;
    font-size: 16px;
    background-color: #bebebe;
    line-height: 35px;
    font-weight: bold;
}
.MeiaBaixo{
    border:1px solid black;
    width: 435px;
    height: 35px;
    font-size: 12px;
    
}
.Envolve{
    border:1px solid black;
    width: 870px;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
}
.Dentro1{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 1;
    
}
.Dentro2{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 2;
}
.Dentro3{
    border:1px solid black;
    height: 35px;
    font-size: 12px;
    display: flex;
    flex: 3;
}
.InteiraDentro{
    border:1px solid black;
    width: 870px;
    height: 35px;
    font-size: 12px;
    display: flex;
    
}
.Historico{
    border:1px solid black;
    width: 870px;
    height: 200px;
    font-size: 12px;
}
.ObjetosRecolhidos{
    border:1px solid black;
    width: 870px;
    height: 100px;
    font-size: 12px;
}
.InteiraReal2{
    border:1px solid black;
    width: 870px;
    height: 60px;
    text-align: center;
    font-size: 16px;
    background-color: #bebebe;
    line-height: 30px;
    font-weight: bold;
}
.InteiraDentro2{
    border:1px solid black;
    width: 870px;
    height: 45px;
    font-size: 12px;
    display: flex;
    
}
</style>

<body>
    
    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia"> ${nomeOcorrencia} </div>
            <div class="Meia"> AUTENTICAÇÃO ${chaveFoto} </div>
            
        </div>
    
    </div>

    </div>

    <div class=ContainerCima>
        <div class="MeiaBaixo">Unidade responsável pelo registro<br/>CIA BRASILEIRA DE TRENS URBANOS</div>
        <div class="MeiaBaixo">Endereço<br/>RUA JANUÁRIA 181-BAIRRO FLORESTA-BELO HORIZONTE</div>
    </div>

    <div class="InteiraReal">DADOS DA OCORRÊNCIA</div>
    
    <div class="Envolve">

        <div class="Dentro2">Provável descrição da ocorrência principal <br/>${tipoOcorrencia1} </div>

        <div class="Dentro1">Tentado/Consumado <br/>${tentadoConsumado}</div>

        <div class="Dentro1">Alvo do evento  <br/>${alvoDoEvento}</div>

    </div>

    <div class="Envolve">

        
        <div class="Dentro1">Data do Fato<br/>${dataDoFato}</div>

        <div class="Dentro1">Horario do Fato<br/>${horarioDoFato}</div>

         <div class="Dentro1">Data Final<br/>${dataFinal}</div>

        <div class="Dentro1">Horario Final<br/>${horarioFinal}</div>

    </div>

    <div class="Envolve">

        
        <div class="Dentro3">Local<br/>${nomeEstaçao}: ${endereçoEstaçao}</div>

        <div class="Dentro1">Município<br/>${municipioEstaçao}</div>

         <div class="Dentro1">UF<br/>${ufEstaçao}</div>


    </div>

     <div class="Envolve">

        
        <div class="Dentro1">Número<br/>${numeroEstaçao}</div>

        <div class="Dentro2">Complemento<br/>${complementoEstaçao}</div>

         <div class="Dentro2">Bairro<br/>${bairroEstaçao}</div>

         <div class="Dentro1">Cep<br/>${cepEstaçao}</div>


    </div>

    <div class="InteiraReal">QUALIFICAÇÃO DOS ENVOLVIDOS</div>
    <div class="InteiraReal">ENVOLVIDO 1</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>${genero}</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>${tipoDeEnvolvimento}</div>

         <div class="Dentro1">Data de Nascimento<br/>${nascimento}</div>

         <div class="Dentro1">Naturalidade<br/>${naturalidade}</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>${nome}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>${idadeAparente}</div>

        <div class="Dentro1">Estado Civil<br/>${estadoCivil}</div>

         <div class="Dentro1">Nacionalidade<br/>${nacionalidade}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>${cutis}</div>

        <div class="Dentro1">Ocupação Atual<br/>${ocupaçãoAtual}</div>

         <div class="Dentro1">Grau de Escolaridade<br/>${grauEscoar}</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>${mae}</div>
    <div class="InteiraDentro" >Pai<br/>${pai}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>${identidade}</div>

        <div class="Dentro1">Orgão Epedidor<br/>${orgãoExpedidor}</div>

         <div class="Dentro1">UF<br/>${ufEnvolvido}</div>
         
         <div class="Dentro1">CPF<br/>${cpf}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>${logradouro}</div>

        <div class="Dentro1">Número<br/>${numeroCasa}</div>

         <div class="Dentro1">Complemento<br/>${complemento}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>${bairro}</div>

        <div class="Dentro2">Município<br/>${cidade}</div>

         <div class="Dentro1">UF<br/>${estado}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>${paisMoradia}</div>

        <div class="Dentro1">CEP<br/>${cep}</div>

         <div class="Dentro1">Telefone<br/>${telefone}</div>
         
    </div>

    <div class="InteiraReal">ENVOLVIDO 2</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>${generoEnv2}</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>${tipoDeEnvolvimentoEnv2}</div>

         <div class="Dentro1">Data de Nascimento<br/>${nascimentoEnv2}</div>

         <div class="Dentro1">Naturalidade<br/>${naturalidadeEnv2}</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>${nomeEnv2}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>${idadeAparenteEnv2}</div>

        <div class="Dentro1">Estado Civil<br/>${estadoCivilEnv2}</div>

         <div class="Dentro1">Nacionalidade<br/>${nacionalidadeEnv2}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>${cutisEnv2}</div>

        <div class="Dentro1">Ocupação Atual<br/>${ocupaçãoAtualEnv2}</div>

         <div class="Dentro1">Grau de Escolaridade<br/>${grauEscoarEnv2}</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>${maeEnv2}</div>
    <div class="InteiraDentro" >Pai<br/>${paiEnv2}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>${identidadeEnv2}</div>

        <div class="Dentro1">Orgão Epedidor<br/>${orgãoExpedidorEnv2}</div>

         <div class="Dentro1">UF<br/>${ufEnvolvidoEnv2}</div>
         
         <div class="Dentro1">CPF<br/>${cpfEnv2}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>${logradouroEnv2}</div>

        <div class="Dentro1">Número<br/>${numeroCasaEnv2}</div>

         <div class="Dentro1">Complemento<br/>${complementoEnv2}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>${bairroEnv2}</div>

        <div class="Dentro2">Município<br/>${cidade}</div>

         <div class="Dentro1">UF<br/>${estadoEnv2}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>${paisMoradiaEnv2}</div>

        <div class="Dentro1">CEP<br/>${cepEnv2}</div>

         <div class="Dentro1">Telefone<br/>${telefoneEnv2}</div>
         
    </div>

    <div style="height: 55px;"></div>

    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia">${nomeOcorrencia}</div>
            <div class="Meia"> AUTENTICAÇÃO ${chaveFoto} </div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">ENVOLVIDO 3</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>${generoEnv3}</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>${tipoDeEnvolvimentoEnv3}</div>

         <div class="Dentro1">Data de Nascimento<br/>${nascimentoEnv3}</div>

         <div class="Dentro1">Naturalidade<br/>${naturalidadeEnv3}</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>${nomeEnv3}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>${idadeAparenteEnv3}</div>

        <div class="Dentro1">Estado Civil<br/>${estadoCivilEnv3}</div>

         <div class="Dentro1">Nacionalidade<br/>${nacionalidadeEnv3}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>${cutisEnv3}</div>

        <div class="Dentro1">Ocupação Atual<br/>${ocupaçãoAtualEnv3}</div>

         <div class="Dentro1">Grau de Escolaridade<br/>${grauEscoarEnv3}</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>${maeEnv3}</div>
    <div class="InteiraDentro" >Pai<br/>${paiEnv3}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>${identidadeEnv3}</div>

        <div class="Dentro1">Orgão Epedidor<br/>${orgãoExpedidorEnv3}</div>

         <div class="Dentro1">UF<br/>${ufEnvolvidoEnv3}</div>
         
         <div class="Dentro1">CPF<br/>${cpfEnv3}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>${logradouroEnv3}</div>

        <div class="Dentro1">Número<br/>${numeroCasaEnv3}</div>

         <div class="Dentro1">Complemento<br/>${complementoEnv3}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>${bairroEnv3}</div>

        <div class="Dentro2">Município<br/>${cidadeEnv3}</div>

         <div class="Dentro1">UF<br/>${estadoEnv3}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>${paisMoradiaEnv3}</div>

        <div class="Dentro1">CEP<br/>${cepEnv3}</div>

         <div class="Dentro1">Telefone<br/>${telefoneEnv3}</div>
         
    </div>

    <div class="InteiraReal">ENVOLVIDO 4</div>

    <div class="Envolve">

        
        <div class="Dentro1">Sexo<br/>${generoEnv4}</div>

        <div class="Dentro1">Tipo de Envolvimento<br/>${tipoDeEnvolvimentoEnv4}</div>

         <div class="Dentro1">Data de Nascimento<br/>${nascimentoEnv4}</div>

         <div class="Dentro1">Naturalidade<br/>${naturalidadeEnv4}</div>


    </div>

    <div class="InteiraDentro" >Nome Completo <br/>${nomeEnv4}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Idade Aparente<br/>${idadeAparenteEnv4}</div>

        <div class="Dentro1">Estado Civil<br/>${estadoCivilEnv4}</div>

         <div class="Dentro1">Nacionalidade<br/>${nacionalidadeEnv4}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Cútis<br/>${cutisEnv4}</div>

        <div class="Dentro1">Ocupação Atual<br/>${ocupaçãoAtualEnv4}</div>

         <div class="Dentro1">Grau de Escolaridade<br/>${grauEscoarEnv4}</div>

    </div>

    <div class="InteiraDentro" >Mae<br/>${maeEnv4}</div>
    <div class="InteiraDentro" >Pai<br/>${paiEnv4}</div>

    <div class="Envolve">
        
        <div class="Dentro1">Número da Identidade<br/>${identidadeEnv4}</div>

        <div class="Dentro1">Orgão Epedidor<br/>${orgãoExpedidorEnv4}</div>

         <div class="Dentro1">UF<br/>${ufEnvolvidoEnv4}</div>
         
         <div class="Dentro1">CPF<br/>${cpfEnv4}</div>

    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Endereço<br/>${logradouroEnv4}</div>

        <div class="Dentro1">Número<br/>${numeroCasaEnv4}</div>

         <div class="Dentro1">Complemento<br/>${complementoEnv4}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro3">Bairro<br/>${bairroEnv4}</div>

        <div class="Dentro2">Município<br/>${cidadeEnv4}</div>

         <div class="Dentro1">UF<br/>${estadoEnv4}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">País<br/>${paisMoradiaEnv4}</div>

        <div class="Dentro1">CEP<br/>${cepEnv4}</div>

         <div class="Dentro1">Telefone<br/>${telefoneEnv4}</div>
         
    </div>

    <div class="InteiraReal">HISTÓRICO</div>

    <div class="Historico" >${historico}</div>

     <div style="height: 75px;"></div>

    <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia">${nomeOcorrencia}</div>
            <div class="Meia"> AUTENTICAÇÃO ${chaveFoto} </div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">OBJETOS RECOLHIDOS</div>

    <div class="ObjetosRecolhidos">${objetosRecolhidos}</div>

    <div class="InteiraReal">RESPONSÁVEL PELA APREENSÃO/PRISÃO/CONDUÇÃO</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>${matriculaAgenteResponsavel}</div>

        <div class="Dentro1">Siape<br/>${siapeAgenteResponsavel}</div>

         <div class="Dentro1">Cargo<br/>${cargoAgenteResponsavel}</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>${nomeAgenteResponsavel}</div>

    <div class="InteiraReal">RELATOR DA OCORRÊNCIA</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>${matriculaAgenteRelator}</div>

        <div class="Dentro1">Siape<br/>${siapeAgenteRelator}</div>

         <div class="Dentro1">Cargo<br/>${cargoAgenteRelator}</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>${nomeAgenteRelator}</div>

     <div class="InteiraReal">AGENTE INTEGRANTE</div>

     <div class="Envolve">
        
        <div class="Dentro1">Matrícula<br/>${matriculaAgente1}</div>

        <div class="Dentro1">Siape<br/>${siapeAgente1}</div>

         <div class="Dentro1">Cargo<br/>${cargoAgente1}</div>
         
    </div>

    <div class="InteiraDentro">Nome Completo<br/>${nomeAgente1}</div>

    <div style="height: 30px;"></div>

    <div class="InteiraReal2">RECIBO DA AUTORIDADE A QUE SE DESTINA OU SEU AGENTE/AUXILIAR POLICIAL OU RECIBO DO RESPONSÁVEL CIVIL</div>
    
    <div class="InteiraReal">DESTINATÁRIO/RECIBO 1</div>

    <div class="InteiraDentro2">RECEBI O "${nomeOcorrencia}" DE AUTENTICAÇÃO ${chaveFoto} PARA CONHECIMENTO E PROVIDÊNCIAS, BEM COMO AS PESSOAS,
    MATERIAIS, OBJETOS , ANIMAIS, SUBSTÂNCIAS E/ OU DOCUMENTOS QUE, EXISTINDO, ESTEJAM DESCRITOS OU ASSINALADOS NESTE DOCUMENTO.
    
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Data</div>

        <div class="Dentro1">Hora</div>

         <div class="Dentro1">Matrícula</div>
         
         <div class="Dentro3">Nome</div>
         
    </div>

    <div class="InteiraDentro">Cargo</div>
    <div class="InteiraDentro">Orgão/UF</div>
    <div class="InteiraDentro">Unidade</div>
    <div class="InteiraDentro">Providência a ser tomada pela autoridade</div>
    <div class="InteiraDentro">Assinatura</div>

    <div class="Envolve">
        
        <div class="Dentro1">Recibo gerado por<br/>${nomeQuemGerou}</div>

        <div class="Dentro1">Data de criação do recibo<br/>${dataGeracao} ${horaGearacao}</div>
         
    </div>

    <div style="height: 210px;"></div>

     <div class=ContainerCima>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Coat_of_arms_of_Brazil.svg/1200px-Coat_of_arms_of_Brazil.svg.png" />
    
    <div>

        <div class="Inteira">SUPERINTENDÊNCIA DE TRENS URBANOS-BH</div>
        
        <div class=ContainerCima>
            <div class="Meia">${nomeOcorrencia}</div>
            <div class="Meia"> AUTENTICAÇÃO ${chaveFoto}</div>
            
        </div>
    
    </div>

    </div>

    <div class="InteiraReal">CARACTERÍSTICAS QUE EVIDENCIAM A POSSIBILIDADE DE FALSIFICAÇÃO</div>

    <div class="Envolve">
        
        <div class="Dentro1">Marca D'água<br/>${marcaDagua}</div>

        <div class="Dentro1">Microimpressões<br/>${microImpressoes}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Registro Coincidente<br/>${registroCoincidente}</div>

        <div class="Dentro1">Imagem Latente<br/>${imagemLatente}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Impressão em Alto Relevo<br/>${impressaoRelevo}</div>

        <div class="Dentro1">Numeração<br/>${numeraçaoNota}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fibras Coloridas<br/>${fibrasColoridas}</div>

        <div class="Dentro1">Marca Tátil<br/>${marcaTatil}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fio de Segurança<br/>${fioDeSegurança}</div>

        <div class="Dentro1">Fundos Especiais<br/>${fundosEspeciais}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Fibras Sensíveis a Ultravioleta<br/>${fibrasLuzVioleta}</div>

        <div class="Dentro1">Faixa Holográfica<br/>${faixaHoografica}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Tipo e/ou Tamanho do Papel<br/>${tipoPapel}</div>

        <div class="Dentro1">Janela Transparente<br/>${janelaTransparente}</div>
         
    </div>

    <div class="InteiraDentro">Moeda<br/>${moeda}</div>
    <div class="InteiraDentro">Outros<br/>${outrasCaracteristicas}</div>

    <div class="InteiraReal">Informações Prestadas pelo Envolvido</div>

    <div class="Envolve">
        
        <div class="Dentro1">Origem da Cédula<br/>${origemCedula}</div>

        <div class="Dentro1">Estado de Animo do Usuário<br/>${estadoAnimo}</div>
         
    </div>

    <div class="Envolve">
        
        <div class="Dentro1">Tentou Evadir do Local<br/>${tentouEvadir}</div>

        <div class="Dentro1">Possuía Outras Cédulas Válidas<br/>${possuiaOutrasCedulas}</div>

        <div class="Dentro1">Pagou Após o Fato<br/>${pagouApos}</div>
         
    </div>

    </body>

    </html>
`;

    return (
        

        <Container >

        { freedown &&
        <>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >

        

             <BtnCadastrarOcorrencia disabled={loading} onPress={() => createAndSavePDF(htmlContent1)} >
                 <TextBtnOcorrencia>Baixar Pdf</TextBtnOcorrencia>
             </BtnCadastrarOcorrencia>

           </View>
           </>
            }

            { !freedown &&
        <>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >

                <Text style={styles.textLoading}>...Loading</Text>

           </View>
           </>
            }

            {loading &&
            <LoadingArea>
                <ActivityIndicator
                       size='large'
                       color='#fff' 

                />
            </LoadingArea>
             }

           
        </Container>
    );
}

const styles = StyleSheet.create({
     viewPadrao:{
        borderWidth:1,
        flex:1,
        width:'100%',
    },
    textLoading:{
        color:'#FF9000',

    }
  

})
