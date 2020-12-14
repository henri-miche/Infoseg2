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
        

        //Variáveis envolvido 3
        const [cpfEnv3, setCpfEnv3] = useState();
        const [nomeEnv3, setNomeEnv3] = useState();
        const [identidadeEnv3, setIdentidadeEnv3] = useState();
        const [nascimentoEnv3, setNascimentoEnv3] = useState(); 
        const [maeEnv3, setMaeEnv3] = useState();
        const [paiEnv3, setPaiEnv3] = useState();
        const [telefoneEnv3, setTelefoneEnv3] = useState();
        const [generoEnv3, setGeneroEnv3] = useState();
        const [estadoEnv3, setEstadoEnv3] = useState();
        const [cepEnv3, setCepEnv3] = useState();
        const [cidadeEnv3, setCidadeEnv3] = useState();
        const [bairroEnv3, setBairroEnv3] = useState();
        const [logradouroEnv3, setLogradouroEnv3] = useState();
        const [numeroCasaEnv3, setNumeroCasaEnv3] = useState();
        const [complementoEnv3, setComplementoEnv3] = useState();   
        const [tipoDeEnvolvimentoEnv3, setTipoDeEnvolvimentoEnv3] = useState();
        const [nacionalidadeEnv3, setNacionalidadeEnv3] = useState();
        const [naturalidadeEnv3, setNaturalidadeEnv3] = useState();
        const [idadeAparenteEnv3, setIdadeAparenteEnv3] = useState();
        const [estadoCivilEnv3, setEstadoCivilEnv3] = useState();
        const [cutisEnv3, setCutisEnv3] = useState();
        const [ocupaçãoAtualEnv3, setOcupaçãoAtualEnv3] = useState();
        const [grauEscoarEnv3, setGrauEscolarEnv3] = useState();
        const [orgãoExpedidorEnv3, setOrgãoEpedidorEnv3] = useState();
        const [ufEnvolvidoEnv3, setUfEnvolvidoEnv3] = useState();
        const [paisMoradiaEnv3, setpaisMoradiaEnv3] = useState();

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

        const [avatar2, setAvatar2] = useState(null);
       
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
   
    const pdfScreen = () => {
        navigation.navigate('PdfDown',{key:key,local:local})
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

    return (
        <Container >

           <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair onPress = {sair}>
                    <Image source = {require('../../../assets/SetaSair.png')} />
                </TouchSair>
            
            </ViewTitullo>
            
            { avatar2 && <>
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
                 
                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Nascimento:<TextCamposmae>{nascimento}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Genero:<TextCamposmae>{genero}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Nacionalidade:<TextCamposmae>{nacionalidade}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Naturalidade:<TextCamposmae>{naturalidade}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                 <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Idade Aparente:<TextCamposmae>{idadeAparente}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Estado Civil:<TextCamposmae>{estadoCivil}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Cútis:<TextCamposmae>{cutis}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Ocupação:<TextCamposmae>{ocupaçãoAtual}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Orgão Epedidor:<TextCamposmae>{orgãoExpedidor}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Escolaridade:<TextCamposmae>{grauEscoar}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>UF.Nascimento:<TextCamposmae>{ufEnvolvido}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Envolvimento:<TextCamposmae>{tipoDeEnvolvimento}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                 
                 
                       </View>
            
            <View style={{marginLeft:30,marginTop:35}}>

                
            
                <TextDetallhesOcorr>Endereço do Envolvido</TextDetallhesOcorr>

                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextLabelcamposmae>CEP:<TextCamposmae>{cep}</TextCamposmae></TextLabelcamposmae>
                </View>

                <View style={{flex:1}}>
                    <TextLabelcamposmae>UF:<TextCamposmae>{ufEnvolvido}</TextCamposmae></TextLabelcamposmae>
                </View>

                </View>

                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextLabelcamposmae>Cidade:<TextCamposmae>{cidade}</TextCamposmae></TextLabelcamposmae>
                </View>

                <View style={{flex:1}}>
                    <TextLabelcamposmae>Bairro:<TextCamposmae>{bairro}</TextCamposmae></TextLabelcamposmae>
                </View>

                </View>
                <TextLabelcamposmae>Logradouro:<TextCamposmae>{logradouro}</TextCamposmae></TextLabelcamposmae>
                    
                <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <TextLabelcamposmae>Número:<TextCamposmae>{numeroCasa}</TextCamposmae></TextLabelcamposmae>
                </View>

                <View style={{flex:1}}>
                    <TextLabelcamposmae>País:<TextCamposmae>{paisMoradia}</TextCamposmae></TextLabelcamposmae>
                </View>

                </View>

                 <TextLabelcamposmae>Complemento:<TextCamposmae>{complemento}</TextCamposmae></TextLabelcamposmae>

            </View>



            <View style={{marginLeft:30,marginTop:35}}>
                <TextDetallhesOcorr>Detalhes da Ocorrência</TextDetallhesOcorr>
            </View>

            <View style={{marginTop:15,marginLeft:30}}>

                <View style={{flexDirection:'row'}} >
                   
                   <View style={{flex:1}}>
                    <TextLabelcamposmae>Data Relatório:<TextCamposmae>{data}</TextCamposmae></TextLabelcamposmae>
                    </View>
               
                <View style={{flex:1}}>
                    <TextLabelcamposmae>Hora Relatório:<TextCamposmae>{hora}</TextCamposmae></TextLabelcamposmae>
                </View>
                
                </View>

                 <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Data do Fato:<TextCamposmae>{dataDoFato}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Hora do Fato:<TextCamposmae>{horarioDoFato}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                 <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Data Final:<TextCamposmae>{dataFinal}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Hora Final:<TextCamposmae>{horarioFinal}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Tentado/Consumado:<TextCamposmae>{tentadoConsumado}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Alvo do Evento:<TextCamposmae>{alvoDoEvento}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>{tipoRo}:<TextCamposmae>{tipoOcorrencia1}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Local:<TextCamposmae>{local}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Relator:<TextCamposmae>{nomeAgenteRelator}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Agente Integrante:<TextCamposmae>{nomeAgente1}</TextCamposmae></TextLabelcamposmae>
                    </View>

                </View>

                <View style={{flexDirection:'row'}}>

                    <View style={{flex:1}}>
                        <TextLabelcamposmae>Responsável pela Prisão:<TextCamposmae>{nomeAgenteResponsavel}</TextCamposmae></TextLabelcamposmae>
                    </View>

                    

                </View>

                

                <View>
                    <TextLabelcamposmae>Objetos Recolhidos:<TextCamposmae>{objetosRecolhidos}</TextCamposmae></TextLabelcamposmae>
                    <TextLabelcamposmae>Histórico:<TextCamposmae>{historico}</TextCamposmae></TextLabelcamposmae>
                </View>
            </View>

            <View style = {{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <TextCodRegistro>Código de Registro: {chaveFoto}</TextCodRegistro>
            </View>

            <Button title='pdf' onPress={pdfScreen}/>
        </>}

        {!avatar2 && <>

         <ViewQualificaçao>
                <TextQuaificaçao>Qualificação do Envolvido</TextQuaificaçao>

                

                <View style = {{flexDirection:'row',marginLeft:30}}>

                

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
                        <TextLabeldetalhes>{tipoRo}:<TextDetalhes>{tipoOcorrencia1}</TextDetalhes></TextLabeldetalhes>
                    </View>

                    <View style={{flex:1}}>

                         <TextLabeldetalhes>Local:<TextDetalhes>{local}</TextDetalhes></TextLabeldetalhes>
                    </View>

                     
                   
                </View>

                <View>
                    <TextLabeldetalhes>ASO:<TextDetalhes>{nomeAgenteRelator}</TextDetalhes></TextLabeldetalhes>
                    <TextLabeldetalhes>Detalhes:<TextDetalhes>{historico}</TextDetalhes></TextLabeldetalhes>
                </View>
            </View>

            <View style = {{marginTop:30,justifyContent:'center',alignItems:'center'}}>
                <TextCodRegistro>Código de Registro: {chaveFoto}</TextCodRegistro>
            </View>

            <Button title='pdf' onPress={pdfScreen}/>
            </>}
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
  