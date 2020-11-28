import React,{useEffect, useState} from 'react';
import { SafeAreaView,Text,ActivityIndicator, View,Switch, StyleSheet,Image,TextInput,Button,Alert, Modal,TouchableOpacity } from 'react-native';
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
ModalText,
ModalTextText,
LoadingArea,
TextEnvolvido2,
} from './styles';



export default () => {
    
    const [foto,setFoto] = useState(null);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [identidade, setIdentidade] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [tipoRo, setTipoRo] = useState("Escolha");
    const [local, setLocal] = useState("UVL");
    const [mae, setMae] = useState('');
    const [pai, setPai] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState("Masculino");
    const [historico, setHistorico] = useState('');

    const [estado, setEstado] = useState("MG");
   
    const [cep, setCep] = useState('');

    const [tipoOcorrencia1, setTipoOcorrencia1] = useState();
    
    const [tipoOcorrenciaRo, setTipoOcorrenciaRo] = useState({ "Retirada de objetos na via": "Retirada de objetos na via","Auxilio Púbico": "Auxilio Púbico","Atendimento a deficiente físico": "Atendimento a deficiente físico","Atendimento a deficiente visual": "Atendimento a deficiente visual",
     "Retirada de objetos na via": "Retirada de objetos na via","Achados e perdidos": "Achados e perdidos","Comportamento indevido": "Comportamento indevido","Atitude Suspeita": "Atitude Suspeita","Panfletagem": "Panfletagem","Pedestre na via": "Pedestre na via","Pessoa inconvenientemente trajada": "Pessoa inconvenientemente trajada",
     "Simulação de mal súbito": "Simulação de mal súbito","Recolhimento de billhete": "Recolhimento de billhete","Vendedor ambulante": "Vendedor ambulante","Aliciamento de freguesia": "Aliciamento de freguesia","Tumulto": "Tumulto","Remoção de animal": "Remoção de animal","Incêndio": "Incêndio",
    "Fogo na vegetação da faixa de domínio": "Fogo na vegetação da faixa de domínio","Retirada de objetos da rede aérea": "Retirada de objetos da rede aérea","Evacuação de trem": "Evacuação de trem","Evacuação de Estação": "Evacuação de Estação","Outros": "Outros","Pedido de Providências": "Pedido de Providências","Verificação de falhas nas instalaçôes": "Verificação de falhas nas instalaçôes",
    "Embriaguez": "Embriaguez","Mendicância": "Mendicância","Pertubação da tranquilidade": "Pertubação da tranquilidade","Pertubação do trabalho ou sossego alheio": "Pertubação do trabalho ou sossego alheio","Arremesso de Prójeteis": "Arremesso de Prójeteis","Encontro de material suspeito": "Encontro de material suspeito","Queixa de crime": "Queixa de crime","Ato Obceno": "Ato Obceno","Importunação ofensiva ao pudor": "Importunação ofensiva ao pudor",
    });
   
    const [tipoOcorrenciaRau, setTipoOcorrenciaRau] = useState({ "Acidente": "Acidente","Acidente na escada rolante": "Acidente na escada rolante","Acidente na escada fixa": "Acidente na escada fixa","Mal súbito": "Mal súbito","Pessoa com suspeita de doença mental": "Pessoa com suspeita de doença mental",
    "Acidente no espaço entre o trem e plataforma": "Acidente no espaço entre o trem e plataforma","Acidente na abertura ou fechamento do trem": "Acidente na abertura ou fechamento do trem","Atropelamento sem vítima fatal": "Atropelamento sem vítima fatal",});
    
    const [tipoOcorrenciaBo, setTipoOcorrenciaBo] = useState({ "Pessoa perdida": "Pessoa perdida","Òbito": "Òbito","Importunação ofensiva ao pudor": "Importunação ofensiva ao pudor","Ameaça": "Ameaça","Outros": "Outros","Pertubação da tranquilidade": "Pertubação da tranquilidade","Pertubação do trabalho ou do sossego alheio": "Pertubação do trabalho ou do sossego alheio","Encontro de material suspeito": "Encontro de material suspeito","Queixa de crime": "Queixa de crime","Ato Obceno": "Ato Obceno",
    "Estupro": "Estupro","Homicídio": "Homicídio","Tentativa de Homicídio": "Tentativa de Homicídio","Suicídio": "Suicídio","Tentativa de suicídio": "Tentativa de suicídio","Lesão corporal": "Lesão corporal","Porte ilegal de arma": "Porte ilegal de arma","Disparo de arma de fogo": "Disparo de arma de fogo","Rixa": "Rixa","Vias de fato": "Vias de fato","Estelionato": "Estelionato","Fraude a tarifa de transporte": "Fraude a tarifa de transporte","Dano ao patrimônio": "Dano ao patrimônio","Tentativa de dano ao patrimônio": "Tentativa de dano ao patrimônio",
    "Pixação": "Pixação","Furto": "Furto","Tentativa de furto": "Tentativa de furto","Furto de cabos eletricos": "Furto de cabos eletricos","Roubo": "Roubo","Tentativa de Roubo": "Tentativa de Roubo","Porte de entorpecente": "Porte de entorpecente","Uso de entorpecente": "Uso de entorpecente","Encontro de cadáver": "Encontro de cadáver","Encontro de feto": "Encontro de feto","Encontro de veículo furtado": "Encontro de veículo furtado","Ameaça de bomba": "Ameaça de bomba","Venda ilegal de bilhetes": "Venda ilegal de bilhetes","Apreensão de cédula falsa": "Apreensão de cédula falsa",
    "Apreensão de moeda falsa": "Apreensão de moeda falsa","Calúnia": "Calúnia","Injúria": "Injúria","Racismo": "Racismo","Difamação": "Difamação","Tentativa de furto de cabos elétricos": "Tentativa de furto de cabos elétricos",
});
    const [tipoOcorrenciaRRM, setTipoOcorrenciaRRM] = useState({ "Panfletagem": "Panfletagem","Recolhimento de mercadoria": "Recolhimento de mercadoria","Recolhimento de bilhete": "Recolhimento de bilhete",});
    
    const [tipoOcorrencia, setTipoOcorrencia] = useState('');

    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [complemento, setComplemento] = useState('');
    const [hora, setHora] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
    const [data, setData] = useState(moment().format('DD-MM-YYYY'));
    const [pickerChoice, setPickerChoice] = useState();
    const [modalVisible, setModallVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [permissaoBo, setPermissaoBo] = useState(false);


    const [tipoDeEnvolvimento, setTipoDeEnvolvimento] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [naturalidade, setNaturalidade] = useState('');
    const [idadeAparente, setIdadeAparente] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [cutis, setCutis] = useState('');
    const [ocupaçãoAtual, setOcupaçãoAtual] = useState('');
    const [grauEscoar, setGrauEscolar] = useState('');
    const [orgãoExpedidor, setOrgãoEpedidor] = useState('');
    const [ufEnvolvido, setUfEnvolvido] = useState('');
    const [ufMoradia, setUfMoradia] = useState('');
    const [paisMoradia, setpaisMoradia] = useState('');
    const [tentadoConsumado, setTentadoConsumado] = useState('');
    const [alvoDoEvento, setAlvoDoEvento] = useState('');
    const [dataDoFato, setDataDoFato] = useState('');
    const [horarioDoFato, setHorarioDoFato] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [horarioFinal, setHorarioFinal] = useState('');
    const [objetosRecolhidos, setObjetosRecolhidos] = useState('');

    const [notaFalsa, setNotaFalsa] = useState(true);

    const [marcaDagua, setMarcaDagua] = useState('');
    const [microImpressoes, setMicroImpressoes] = useState('');
    const [registroCoincidente, setRegistroCoincidente] = useState('');
    const [imagemLatente, setImagemLatente] = useState('');
    const [impressaoRelevo, setImpressaoRelevo] = useState('');
    const [numeraçaoNota, setNumeraçaoNota] = useState('');
    const [fibrasColoridas, setFibrasColoridas] = useState('');
    const [marcaTatil, setMarcaTatil] = useState('');
    const [fioDeSegurança, setFioDeSegurança] = useState('');
    const [fundosEspeciais, setFundosEspeciais] = useState('');
    const [fibrasLuzVioleta, setFibrasLuzVioleta] = useState('');
    const [faixaHoografica, setFaiaHolografica] = useState('');

    const [switchMarcaDagua, setSwitchMarcaDagua] = useState(false);
    const [switchMicroImpressoes, setSwitchMicroImpressoes] = useState(false);
    const [switchRegistroCoincidente, setSwitchRegistroCoincidente] = useState(false);
    const [switchImagemLatente, setSwitchImagemLatente] = useState(false);
    const [switchImpressaoRelevo, setSwitchImpressaoRelevo] = useState(false);
    const [switchNumeraçaoNota, setSwitchNumeraçaoNot] = useState(false);
    const [switchFibrasColoridas, setSwitchFibrasColoridas] = useState(false);
    const [switchMarcaTatil, setSwitchMarcaTatil] = useState(false);
    const [switchFioDeSegurança, setSwitchFioDeSegurança] = useState(false);
    const [switchFundosEspeciais, setSwitchFundosEspeciais] = useState(false);
    const [switchFibrasLuzVioleta, setSwitchFibrasLuzVioleta] = useState(false);
    const [switchFaixaHoografica, setSwitchFaixaHoografica] = useState(false);
    

//variáveis envolvido 2
    
    const [cpfEnv2, setCpfEnv2] = useState('');
    const [nomeEnv2, setNomeEnv2] = useState('');
    const [identidadeEnv2, setIdentidadeEnv2] = useState('');
    const [nascimentoEnv2, setNascimentoEnv2] = useState('');
    const [tipoRoEnv2, setTipoRoEnv2] = useState("Escolha Tipo Ocorrencia");
    const [localEnv2, setLocalEnv2] = useState("UVL");
    const [maeEnv2, setMaeEnv2] = useState('');
    const [paiEnv2, setPaiEnv2] = useState('');
    const [telefoneEnv2, setTelefoneEnv2] = useState('');
    const [generoEnv2, setGeneroEnv2] = useState("Masculino");
    const [historicoEnv2, setHistoricoEnv2] = useState('');

    const [estadoEnv2, setEstadoEnv2] = useState("MG");
   
    const [cepEnv2, setCepEnv2] = useState('');

   
    const [cidadeEnv2, setCidadeEnv2] = useState('');
    const [bairroEnv2, setBairroEnv2] = useState('');
    const [logradouroEnv2, setLogradouroEnv2] = useState('');
    const [numeroCasaEnv2, setNumeroCasaEnv2] = useState('');
    const [complementoEnv2, setComplementoEnv2] = useState('');
    const [horaEnv2, setHoraEnv2] = useState(moment().utcOffset('-03:00').format(' hh:mm:ss a'));
    const [dataEnv2, setDataEnv2] = useState(moment().format('DD-MM-YYYY'));
    const [pickerChoiceEnv2, setPickerChoiceEnv2] = useState();
    
    


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
   
    const [env2, setEnv2] = useState(false);
    const [switchEnv2, setSwitchEnv2] = useState(false);
    



    const navigation = useNavigation();

    


    const saveFoto = (chave,cosop) => {
        setLoading(true);
        if (foto !== null) {
 
            uploadImage(foto.uri, chave).catch((error) => {
                    alert(error);
                });
            }

            if (env2) {
                 firebase.database().ref('/Ocorrencias').child(chave).set({
                nome: nome,
                cpf: cpf,
                cosop:cosop,
                chaveFoto:chave,
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                tipoRo:tipoRo,
                local:local,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                historico:historico,
                estado:estado,

                tipoOcorrencia1:tipoOcorrencia1,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,

                tipodeEnvolvimento:tipoDeEnvolvimento,
                nacionalidade:nacionalidade,
                naturalidade:naturalidade,
                idadeAparente:idadeAparente,
                estadoCivil:estadoCivil,
                cutis:cutis,
                ocupaçãoAtual:ocupaçãoAtual,
                grauEscolar:grauEscoar,
                orgãoExpedidor:orgãoExpedidor,
                ufEnvolvido:ufEnvolvido,
                paisMoradia:paisMoradia,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,
                objetosRecolhidos:objetosRecolhidos,
                horarioFinal:horarioFinal,
                notaFalsa:notaFalsa,
                env2:env2,

                
                nomeEnv2: nomeEnv2,
                cpfEnv2: cpfEnv2,
                identidadeEnv2:identidadeEnv2,
                nascimentoEnv2:nascimentoEnv2,
                maeEnv2:maeEnv2,
                paiEnv2:paiEnv2,
                telefoneEnv2:telefoneEnv2,
                generoEnv2:generoEnv2,
                estadoEnv2:estadoEnv2,
                cepEnv2:cepEnv2,
                cidadeEnv2:cidadeEnv2,
                bairroEnv2:bairroEnv2,
                logradouroEnv2:logradouroEnv2,
                numeroCasaEnv2:numeroCasaEnv2,
                complementoEnv2:complementoEnv2,

                tipodeEnvolvimentoEnv2:tipoDeEnvolvimentoEnv2,
                nacionalidadeEnv2:nacionalidadeEnv2,
                naturalidadeEnv2:naturalidadeEnv2,
                idadeAparenteEnv2:idadeAparenteEnv2,
                estadoCivilEnv2:estadoCivilEnv2,
                cutisEnv2:cutisEnv2,
                ocupaçãoAtualEnv2:ocupaçãoAtualEnv2,
                grauEscolarEnv2:grauEscoarEnv2,
                orgãoExpedidorEnv2:orgãoExpedidorEnv2,
                ufEnvolvidoEnv2:ufEnvolvidoEnv2,
                paisMoradiaEnv2:paisMoradiaEnv2,

                marcaDagua:marcaDagua,
                microImpressoes:microImpressoes,
                regitroCoincidente:registroCoincidente,
                imagemLatente:imagemLatente,
                impressaoRelevo:impressaoRelevo,
                numeraçaoNota:numeraçaoNota,
                fibrasColoridas:fibrasColoridas,
                marcaTatil:marcaTatil,
                fioDeSegurança:fioDeSegurança,
                fundosEspeciais:fundosEspeciais,
                faixaHoografica:faixaHoografica,
                fibrasLuzVioleta:fibrasLuzVioleta,
                
                
                
                
            })

                .then(() => { 
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



                setTipoDeEnvolvimento(''),
                setNacionalidade(''),
                setNaturalidade(''),
                setIdadeAparente(''),
                setEstadoCivil(''),
                setCutis(''),
                setOcupaçãoAtual(''),
                setGrauEscolar(''),
                setOrgãoEpedidor(''),
                setUfEnvolvido(''),
                setpaisMoradia(''),
                setTentadoConsumado(''),
                setAlvoDoEvento(''),
                setDataDoFato(''),
                setHorarioDoFato(''),
                setDataFinal(''),
                setHorarioFinal(''),
                setNotaFalsa(false),
                setEnv2(false),

                
                setNomeEnv2(''),
                setCpfEnv2(''),
                setIdentidadeEnv2(''),
                setNascimentoEnv2(''),
                setMaeEnv2(''),
                setPaiEnv2(''),
                setTelefoneEnv2(''),
                setGeneroEnv2(''),
                setEstadoEnv2(''),
                setCepEnv2(''),
                setCidadeEnv2(''),
                setBairroEnv2(''),
                setLogradouroEnv2(''),
                setNumeroCasaEnv2(''),
                setComplementoEnv2(''),

                setTipoDeEnvolvimentoEnv2(''),
                setNacionalidadeEnv2(''),
                setNaturalidadeEnv2(''),
                setIdadeAparenteEnv2(''),
                setEstadoCivilEnv2(''),
                setCutisEnv2(''),
                setOcupaçãoAtualEnv2(''),
                setGrauEscolarEnv2(''),
                setOrgãoEpedidorEnv2(''),
                setUfEnvolvidoEnv2(''),
                setpaisMoradiaEnv2(''),

                setMarcaDagua(''),
                setMicroImpressoes(''),
                setRegistroCoincidente(''),
                setImagemLatente(''),
                setImpressaoRelevo(''),
                setNumeraçaoNota(''),
                setFibrasColoridas(''),
                setMarcaTatil(''),
                setFioDeSegurança(''),
                setFundosEspeciais(''),
                setFaiaHolografica(''),

                    setLoading(false);
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });
            }else{

             firebase.database().ref('/Ocorrencias').child(chave).set({
               nome: nome,
                cpf: cpf,
                cosop:cosop,
                chaveFoto:chave,
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                tipoRo:tipoRo,
                local:local,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                historico:historico,
                estado:estado,
                tipoOcorrencia1:tipoOcorrencia1,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,
                objetosRecolhidos:objetosRecolhidos,

                tipodeEnvolvimento:tipoDeEnvolvimento,
                nacionalidade:nacionalidade,
                naturalidade:naturalidade,
                idadeAparente:idadeAparente,
                estadoCivil:estadoCivil,
                cutis:cutis,
                ocupaçãoAtual:ocupaçãoAtual,
                grauEscolar:grauEscoar,
                orgãoExpedidor:orgãoExpedidor,
                ufEnvolvido:ufEnvolvido,
                paisMoradia:paisMoradia,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,
                horarioFinal:horarioFinal,
                notaFalsa:notaFalsa,
                env2:env2,


                marcaDagua:marcaDagua,
                microImpressoes:microImpressoes,
                regitroCoincidente:registroCoincidente,
                imagemLatente:imagemLatente,
                impressaoRelevo:impressaoRelevo,
                numeraçaoNota:numeraçaoNota,
                fibrasColoridas:fibrasColoridas,
                marcaTatil:marcaTatil,
                fioDeSegurança:fioDeSegurança,
                fundosEspeciais:fundosEspeciais,
                faixaHoografica:faixaHoografica,
                
                
                
                
            })

                .then(() => { 
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



                setTipoDeEnvolvimento(''),
                setNacionalidade(''),
                setNaturalidade(''),
                setIdadeAparente(''),
                setEstadoCivil(''),
                setCutis(''),
                setOcupaçãoAtual(''),
                setGrauEscolar(''),
                setOrgãoEpedidor(''),
                setUfEnvolvido(''),
                setpaisMoradia(''),
                setTentadoConsumado(''),
                setAlvoDoEvento(''),
                setDataDoFato(''),
                setHorarioDoFato(''),
                setDataFinal(''),
                setHorarioFinal(''),
                setNotaFalsa(false),
                setEnv2(false),

                
                setNomeEnv2(''),
                setCpfEnv2(''),
                setIdentidadeEnv2(''),
                setNascimentoEnv2(''),
                setMaeEnv2(''),
                setPaiEnv2(''),
                setTelefoneEnv2(''),
                setGeneroEnv2(''),
                setEstadoEnv2(''),
                setCepEnv2(''),
                setCidadeEnv2(''),
                setBairroEnv2(''),
                setLogradouroEnv2(''),
                setNumeroCasaEnv2(''),
                setComplementoEnv2(''),

                setTipoDeEnvolvimentoEnv2(''),
                setNacionalidadeEnv2(''),
                setNaturalidadeEnv2(''),
                setIdadeAparenteEnv2(''),
                setEstadoCivilEnv2(''),
                setCutisEnv2(''),
                setOcupaçãoAtualEnv2(''),
                setGrauEscolarEnv2(''),
                setOrgãoEpedidorEnv2(''),
                setUfEnvolvidoEnv2(''),
                setpaisMoradiaEnv2(''),

                setMarcaDagua(''),
                setMicroImpressoes(''),
                setRegistroCoincidente(''),
                setImagemLatente(''),
                setImpressaoRelevo(''),
                setNumeraçaoNota(''),
                setFibrasColoridas(''),
                setMarcaTatil(''),
                setFioDeSegurança(''),
                setFundosEspeciais(''),
                setFaiaHolografica(''),

                    setLoading(false);
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });}
        
    }

    const uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child("ocorrencias/" + imageName);
        return ref.put(blob);
    }

     

    

   

   
    
    
 /*if tem que ser editado para nano permitir envio vazio*/
    const confirmar = () => {
        if(nome !== '' && cpf !== ''  && tipoRo !== 'Escolha Tipo Ocorrencia' ){
           
           const user = firebase.auth().currentUser;
                if(user){
                   //seta nome do usuario pro relatorio
                    firebase.database().ref('usuarios').child(user.uid)
                        .once('value').then((snapshot) => {
                            let cosop = snapshot.val().nome;
                            //seta chave realtime para foto
                            let chavess = firebase.database().ref('/Ocorrencias');
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
        setModallVisible(false);
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
        setModallVisible(false);
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
        case 'Escolha Tipo Ocorrencia':
             setTipoOcorrencia('')
             setTipoOcorrencia1('');
              break;       

          default:
              break;
      }

      if(tipoOcorrencia1 === "Apreensão de cédula falsa" || tipoOcorrencia1 === "Apreensão de moeda falsa" ){
          setNotaFalsa(true);
      }else{
          setNotaFalsa(false);
      }
        
   return ()=>{
      
   }
  }, [tipoRo,tipoOcorrencia1])

  const poolPermissions = async () =>{
      
      const user = firebase.auth().currentUser;
       if (user) {

            const req = await firebase.database().ref('usuarios').child(user.uid)
                .once('value');
                const json = await req.toJSON();
                setPermissaoBo(json.BO);
                
                }
              }


              useEffect(()=>{
                  poolPermissions();
                  if(switchEnv2 === true){
                      setEnv2(true)
                  }else{
                      setEnv2(false)
                  }
                   if(switchMarcaDagua === true){
                      setMarcaDagua('Inexistente ou difere da cédula original')
                  }else{
                      setMarcaDagua('')
                  }
                   if(switchMicroImpressoes === true){
                      setMicroImpressoes('Inexistente ou difere da cédula original')
                  }else{
                      setMicroImpressoes('')
                  }
                   if(switchRegistroCoincidente === true){
                      setRegistroCoincidente('Difere da cédula original')
                  }else{
                      setRegistroCoincidente('')
                  }
                   if(switchImagemLatente === true){
                      setImagemLatente('Inexistente ou difere da cédula original')
                  }else{
                      setImagemLatente('')
                  }
                   if(switchImpressaoRelevo === true){
                      setImpressaoRelevo('Inexistente ou difere da cédula original')
                  }else{
                      setImpressaoRelevo('')
                  }
                   if(switchNumeraçaoNota === true){
                      setNumeraçaoNota('Inexistente ou difere da cédula original')
                  }else{
                      setNumeraçaoNota('')
                  }
                   if(switchFibrasColoridas === true){
                      setFibrasColoridas('Inexistente ou difere da cédula original')
                  }else{
                      setFibrasColoridas('')
                  }
                   if(switchMarcaTatil === true){
                      setMarcaTatil('Inexistente ou difere da cédula original')
                  }else{
                      setMarcaTatil('')
                  }
                   if(switchFioDeSegurança === true){
                      setFioDeSegurança('Inexistente ou difere da cédula original')
                  }else{
                      setFioDeSegurança('')
                  }
                   if(switchFundosEspeciais === true){
                      setFundosEspeciais('Inexistente ou difere da cédula original')
                  }else{
                      setFundosEspeciais('')
                  }
                   if(switchFibrasLuzVioleta === true){
                      setFibrasLuzVioleta('Inexistente ou difere da cédula original')
                  }else{
                      setFibrasLuzVioleta('')
                  }
                   if(switchFaixaHoografica === true){
                      setFaiaHolografica('Inexistente ou difere da cédula original')
                  }else{
                      setFaiaHolografica('')
                  }
              },[switchEnv2,switchMarcaDagua,switchMicroImpressoes,switchRegistroCoincidente,
                switchImagemLatente,switchImpressaoRelevo,switchNumeraçaoNota,switchFibrasColoridas,switchMarcaTatil,
                switchFioDeSegurança,switchFundosEspeciais,switchFibrasLuzVioleta,switchFaixaHoografica
            ]) 



              const semRegistroPai = () => {
                    setPai('Sem registro')
              }

              const semRegistroMae = () => {
                  setMae('Sem registro')
              }

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
                    <ImageSpace onPress = {()=>{setModallVisible(true)}} >
                    
                        <Image style={styles.formFoto} resizeMode='stretch' source={foto ? foto : require('../../../assets/adicionarimagem.png') }/> 
                    </ImageSpace> 
                </View>

                <Modal 
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose = {()=>setModallVisible(false)}
                >
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                <View style={{width:120,height:120,backgroundColor:'#000',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>

                    <View style={{width:75,height:75,flex:1,backgroundColor:'#000',justifyContent:'center',alignItems:'center'}}>
                    
                  <ModalText onPress={tirarFoto}>
                       <ModalTextText>foto</ModalTextText> 
                  </ModalText>

                    </View>

                    <View style={{width:75,height:75,flex:1,backgroundColor:'#000',justifyContent:'center',alignItems:'center'}}>
                  <ModalText onPress={carregarFoto}>
                      <ModalTextText>galeria</ModalTextText>  
                  </ModalText>
                  </View>
                </View>

                </View>
                </Modal>


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
                    <BtnFixa onPress={semRegistroMae}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={pai} onChangeText={(t) => setPai(t)}/>
                    <BtnFixa onPress={semRegistroPai}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimento} onChangeText={(t) => mascaraNascimento(t)} />

                <Picker
                mode="dropdown"
                selectedValue={genero}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
                >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidade} onChangeText={(t) => setNacionalidade(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidade} onChangeText={(t) => setNaturalidade(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Idade Aparente' placeholderTextColor ='#666360' value={idadeAparente} onChangeText={(t) => setIdadeAparente(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Estado Civil' placeholderTextColor ='#666360' value={estadoCivil} onChangeText={(t) => setEstadoCivil(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutis} onChangeText={(t) => setCutis(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtual} onChangeText={(t) => setOcupaçãoAtual(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Escolaridade' placeholderTextColor ='#666360' value={grauEscoar} onChangeText={(t) => setGrauEscolar(t)} />
                   <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidor} onChangeText={(t) => setOrgãoEpedidor(t)} />
                   </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvido} onChangeText={(t) => setUfEnvolvido(t)} />
                   <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Tipo de Envolvimento' placeholderTextColor ='#666360' value={tipoDeEnvolvimento} onChangeText={(t) => setTipoDeEnvolvimento(t)} />
                   </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' placeholderTextColor ='#666360' keyboardType='number-pad' value={cep} onChangeText={(t) => mascaraCep(t)} />
                <Picker
                mode="dropdown"
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

             <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='País' placeholderTextColor ='#666360' value={paisMoradia} onChangeText={(t) => setpaisMoradia(t)} />
                        
                       
                       </View>

                <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:30}}>
                        <View style={{marginRight:15}}>
                            <TextEnvolvido2>Envolvido 2</TextEnvolvido2>
                        </View>
                     <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchEnv2} onValueChange={(t)=>setSwitchEnv2(t)} />
                </View>













              { env2 && 
              <View>
              <View style={styles.viewQualiEnv}>
                <TextSubtitulo>Qualificação do Envolvido</TextSubtitulo>
            </View>

            <View style = {styles.viewFotoMais}>

                <View> 
                    <ImageSpace onPress = {()=>{setModallVisible(true)}} >
                    
                        <Image style={styles.formFoto} resizeMode='stretch' source={foto ? foto : require('../../../assets/adicionarimagem.png') }/> 
                    </ImageSpace> 
                </View>

                <Modal 
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose = {()=>setModallVisible(false)}
                >
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                
                <View style={{width:120,height:120,backgroundColor:'#000',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>

                    <View style={{width:75,height:75,flex:1,backgroundColor:'#000',justifyContent:'center',alignItems:'center'}}>
                    
                  <ModalText onPress={tirarFoto}>
                       <ModalTextText>foto</ModalTextText> 
                  </ModalText>

                    </View>

                    <View style={{width:75,height:75,flex:1,backgroundColor:'#000',justifyContent:'center',alignItems:'center'}}>
                  <ModalText onPress={carregarFoto}>
                      <ModalTextText>galeria</ModalTextText>  
                  </ModalText>
                  </View>
                </View>

                </View>
                </Modal>


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
                    <BtnFixa onPress={semRegistroMae}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={pai} onChangeText={(t) => setPai(t)}/>
                    <BtnFixa onPress={semRegistroPai}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimento} onChangeText={(t) => mascaraNascimento(t)} />

                <Picker
                mode="dropdown"
                selectedValue={genero}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
                >
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidade} onChangeText={(t) => setNacionalidade(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidade} onChangeText={(t) => setNaturalidade(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Idade Aparente' placeholderTextColor ='#666360' value={idadeAparente} onChangeText={(t) => setIdadeAparente(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Estado Civil' placeholderTextColor ='#666360' value={estadoCivil} onChangeText={(t) => setEstadoCivil(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutis} onChangeText={(t) => setCutis(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtual} onChangeText={(t) => setOcupaçãoAtual(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Escolaridade' placeholderTextColor ='#666360' value={grauEscoar} onChangeText={(t) => setGrauEscolar(t)} />
                   <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidor} onChangeText={(t) => setOrgãoEpedidor(t)} />
                   </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvido} onChangeText={(t) => setUfEnvolvido(t)} />
                   <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Tipo de Envolvimento' placeholderTextColor ='#666360' value={tipoDeEnvolvimento} onChangeText={(t) => setTipoDeEnvolvimento(t)} />
                   </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' placeholderTextColor ='#666360' keyboardType='number-pad' value={cep} onChangeText={(t) => mascaraCep(t)} />
                <Picker
                mode="dropdown"
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

             <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='País' placeholderTextColor ='#666360' value={paisMoradia} onChangeText={(t) => setpaisMoradia(t)} />
                        
                       
                       </View>
                       
              </View>
              }  

















            <View style = {{marginBottom:25}}>
            <TextInformações>Informações da Ocorrência</TextInformações>

            </View>
                    
            <View style = {styles.viewDataHora} >
                 <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Data' placeholderTextColor ='#666360' value = {data}  />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Hora' placeholderTextColor ='#666360' value ={hora}  />
            </View>

             <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Tentado/Consumado' placeholderTextColor ='#666360' value={tentadoConsumado} onChangeText={(t) => setTentadoConsumado(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Alvo do Evento' placeholderTextColor ='#666360' value={alvoDoEvento} onChangeText={(t) => setAlvoDoEvento(t)} />
                
                 </View>

                 <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Data do Fato' placeholderTextColor ='#666360' value={dataDoFato} onChangeText={(t) => setDataDoFato(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Hora do Fato' placeholderTextColor ='#666360' value={horarioDoFato} onChangeText={(t) => setHorarioDoFato(t)} />
                
                 </View>

                  <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Data Final' placeholderTextColor ='#666360' value={dataFinal} onChangeText={(t) => setDataFinal(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Hora Final' placeholderTextColor ='#666360' value={horarioFinal} onChangeText={(t) => setHorarioFinal(t)} />
                
                 </View>

                 <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Objetos recolhidos' placeholderTextColor ='#666360' value={objetosRecolhidos} onChangeText={(t) => setObjetosRecolhidos(t)} />
                        
                       
                       </View>

            <View style = {styles.viewTipoRo}>

                {permissaoBo && 
               <Picker
               mode="dropdown"
                selectedValue={tipoRo}
                style={{ height: 50, width: 182,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoRo(itemValue)}
                >
                <Picker.Item label="Escolha Tipo Ocorrencia" value="Escolha Tipo Ocorrencia" />
                <Picker.Item label="RO" value="RO" />
                <Picker.Item label="BO" value="BO" />
                <Picker.Item label="RRM" value="RRM" />
                <Picker.Item label="RAU" value="RAU" />
                </Picker>
                }

                {!permissaoBo && 
               <Picker
               mode="dropdown"
                selectedValue={tipoRo}
                style={{ height: 50, width: 182,backgroundColor: '#2E2E2E',borderRadius:10,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoRo(itemValue)}
                >
                <Picker.Item label="Escolha Tipo Ocorrencia" value="Escolha Tipo Ocorrencia" />
                <Picker.Item label="RO" value="RO" />
                
                <Picker.Item label="RRM" value="RRM" />
                <Picker.Item label="RAU" value="RAU" />
                </Picker>
                }


                <Picker
                mode="dropdown"
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

                { notaFalsa &&
                    <View>
                    
                  <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:5}}>
                        <Text style={{color:'#fff',fontSize:12,}} >MARCA D'ÁGUA</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchMarcaDagua} onValueChange={(t)=>setSwitchMarcaDagua(t)} />
                 </View>

                 <View style={{flexDirection:'row',marginRight:5}}>
                  <View style={{marginRight:10,marginTop:5}}>
                        <Text style={{color:'#fff',fontSize:12,}} >MICROIMPRESSÔES</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchMicroImpressoes} onValueChange={(t)=>setSwitchMicroImpressoes(t)} />
                 </View>
                 
                 </View>


                    <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:5,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >REGISTRO COIN.</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchRegistroCoincidente} onValueChange={(t)=>setSwitchRegistroCoincidente(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:21,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >IMAGEM LATENTE</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchImagemLatente} onValueChange={(t)=>setSwitchImagemLatente(t)} />
                 </View>
                 
                 </View>

                 <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >IMPRESSÃO ALTO RELEVO</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchImpressaoRelevo} onValueChange={(t)=>setSwitchImpressaoRelevo(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >NUMERAÇÃO</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchNumeraçaoNota} onValueChange={(t)=>setSwitchNumeraçaoNot(t)} />
                 </View>
                 
                 </View>

                 <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >FIBRAS COLORIDAS</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchFibrasColoridas} onValueChange={(t)=>setSwitchFibrasColoridas(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >MARCA TÁTIL</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchMarcaTatil} onValueChange={(t)=>setSwitchMarcaTatil(t)} />
                 </View>
                 
                 </View>

                 <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >FIO DE SEGURANÇA</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchFioDeSegurança} onValueChange={(t)=>setSwitchFioDeSegurança(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >FUNDOS ESPECIAIS</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchFundosEspeciais} onValueChange={(t)=>setSwitchFundosEspeciais(t)} />
                 </View>
                 
                 </View>

                 <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >FIBRAS ULTRAVIOL.</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchFibrasLuzVioleta} onValueChange={(t)=>setSwitchFibrasLuzVioleta(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >FAIXA HOLOGRÁFICA</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchFaixaHoografica} onValueChange={(t)=>setSwitchFaixaHoografica(t)} />
                 </View>
                 
                 </View>
                        

                 </View>

                 }

                 


             

             <TextInput style={styles.inputHist} color ='#fff' placeholder='                      Destalhes da ocorrência' placeholderTextColor='#666360' multiline={true} textAlignVertical='top' value={historico} onChangeText={(t) => setHistorico(t)} />  
             <BtnCadastrarOcorrencia disabled={loading} onPress={confirmar}>
                 <TextBtnOcorrencia>Cadastrar Ocorrência</TextBtnOcorrencia>
             </BtnCadastrarOcorrencia>

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
    viewRow:{
        marginLeft:30,
        flexDirection:'row',  
    }, 
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


/*
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
    }*/