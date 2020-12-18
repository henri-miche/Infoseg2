import React,{useEffect, useState} from 'react';
import {Text,ActivityIndicator, View,Switch, StyleSheet,Image,TextInput, Modal, } from 'react-native';
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
    const [genero, setGenero] = useState("");
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

    const [outrasCaracteristicas, setOutrasCaracteristicas] = useState('');
    const [moeda, setMoeda] = useState('');
     const [tipoDoPapel, setTipoDoPapel] = useState('');
    const [janelaTransparente, setJanelaTransparente] = useState('');


    const [origemCedula, setOrigemCedula] = useState('');
    const [estadoAnimo, setEstadoAnimo] = useState('');
    const [tentouEvadir, setTentouEvadir] = useState('');
    const [possuiaOutrasCedulas, setPossuiaOutrascCeduas] = useState('');
    const [pagouApos, setPagouApos] = useState('');


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
     const [switchTipoDoPapel, setSwitchTipoDoPapel] = useState(false);
    const [switchJanelaTransparente, setSwitchJaneaTransparete] = useState(false);
    

//variáveis envolvido 2
    
    const [cpfEnv2, setCpfEnv2] = useState('');
    const [nomeEnv2, setNomeEnv2] = useState('');
    const [identidadeEnv2, setIdentidadeEnv2] = useState('');
    const [nascimentoEnv2, setNascimentoEnv2] = useState('');
    const [maeEnv2, setMaeEnv2] = useState('');
    const [paiEnv2, setPaiEnv2] = useState('');
    const [telefoneEnv2, setTelefoneEnv2] = useState('');
    const [generoEnv2, setGeneroEnv2] = useState("Masculino");
   

    const [estadoEnv2, setEstadoEnv2] = useState("MG");
   
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
   
    const [env2, setEnv2] = useState(false);
    const [switchEnv2, setSwitchEnv2] = useState(false);
    
    const [env3,setEnv3] = useState(false);
    const [switchEnv3, setSwitchEnv3] = useState(false);

    const [env4,setEnv4] = useState(false);
    const [switchEnv4, setSwitchEnv4] = useState(false);

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

    const [switchAgenteParticipante1, setSwitchAgenteParticipante1] = useState(false);
    const [AgenteParticipante1, setAgenteParticipante1] = useState(false);
    const [nomeAgente1, setNomeAgente1] = useState(''); 
    const [matriculaAgente1, setMatriculaAgente1] = useState('');
    const [siapeAgente1, setSiapeAgente1] = useState('');
    const [cargoAgente1, setCargoAgente1] = useState('');
    const [searchAgente1, setSearchAgente1] = useState('');
    const [tipoEnvolvimentoAgente1, setTipoEnvolvimentoAgente1] = useState('Agente Integrante');

    //Agente participante 2
    const [switchAgenteParticipante2, setSwitchAgenteParticipante2] = useState(false);
    const [AgenteParticipante2, setAgenteParticipante2] = useState(false);
    const [nomeAgente2, setNomeAgente2] = useState(''); 
    const [matriculaAgente2, setMatriculaAgente2] = useState('');
    const [siapeAgente2, setSiapeAgente2] = useState('');
    const [cargoAgente2, setCargoAgente2] = useState('');
    const [searchAgente2, setSearchAgente2] = useState('');
    const [tipoEnvolvimentoAgente2, setTipoEnvolvimentoAgente2] = useState('Agente Integrante');

    



    const navigation = useNavigation();

    


    const saveFoto = (chave,nomeAgenteRelator,matriculaAgenteRelator,siapeAgenteRelator,cargoAgenteRelator) => {
        setLoading(true);
        if (foto !== null) {
 
            uploadImage(foto.uri, chave).catch((error) => {
                    alert(error);
                });
            }

            if (env4) {
                 firebase.database().ref('/Ocorrencias').child(chave).set({
                nome: nome,
                cpf: cpf,                
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                estado:estado,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,
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

                
                tipoOcorrencia1:tipoOcorrencia1,
                tipodeEnvolvimento:tipoDeEnvolvimento,
                tipoRo:tipoRo,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,              
                horarioFinal:horarioFinal,
                historico:historico,
                objetosRecolhidos:objetosRecolhidos,
                local:local,

                //env2
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

                //env3
                env3:env3,
                nomeEnv3: nomeEnv3,
                cpfEnv3: cpfEnv3,
                identidadeEnv3:identidadeEnv3,
                nascimentoEnv3:nascimentoEnv3,
                maeEnv3:maeEnv3,
                paiEnv3:paiEnv3,
                telefoneEnv3:telefoneEnv3,
                generoEnv3:generoEnv3,
                estadoEnv3:estadoEnv3,
                cepEnv3:cepEnv3,
                cidadeEnv3:cidadeEnv3,
                bairroEnv3:bairroEnv3,
                logradouroEnv3:logradouroEnv3,
                numeroCasaEnv3:numeroCasaEnv3,
                complementoEnv3:complementoEnv3,
                tipodeEnvolvimentoEnv3:tipoDeEnvolvimentoEnv3,
                nacionalidadeEnv3:nacionalidadeEnv3,
                naturalidadeEnv3:naturalidadeEnv3,
                idadeAparenteEnv3:idadeAparenteEnv3,
                estadoCivilEnv3:estadoCivilEnv3,
                cutisEnv3:cutisEnv3,
                ocupaçãoAtualEnv3:ocupaçãoAtualEnv3,
                grauEscolarEnv3:grauEscoarEnv3,
                orgãoExpedidorEnv3:orgãoExpedidorEnv3,
                ufEnvolvidoEnv3:ufEnvolvidoEnv3,
                paisMoradiaEnv3:paisMoradiaEnv3,

                //env3
                env4:env4,
                nomeEnv4: nomeEnv4,
                cpfEnv4: cpfEnv4,
                identidadeEnv4:identidadeEnv4,
                nascimentoEnv4:nascimentoEnv4,
                maeEnv4:maeEnv4,
                paiEnv4:paiEnv4,
                telefoneEnv4:telefoneEnv4,
                generoEnv4:generoEnv4,
                estadoEnv4:estadoEnv4,
                cepEnv4:cepEnv4,
                cidadeEnv4:cidadeEnv4,
                bairroEnv4:bairroEnv4,
                logradouroEnv4:logradouroEnv4,
                numeroCasaEnv4:numeroCasaEnv4,
                complementoEnv4:complementoEnv4,
                tipodeEnvolvimentoEnv4:tipoDeEnvolvimentoEnv4,
                nacionalidadeEnv4:nacionalidadeEnv4,
                naturalidadeEnv4:naturalidadeEnv4,
                idadeAparenteEnv4:idadeAparenteEnv4,
                estadoCivilEnv4:estadoCivilEnv4,
                cutisEnv4:cutisEnv4,
                ocupaçãoAtualEnv4:ocupaçãoAtualEnv4,
                grauEscolarEnv4:grauEscoarEnv4,
                orgãoExpedidorEnv4:orgãoExpedidorEnv4,
                ufEnvolvidoEnv4:ufEnvolvidoEnv4,
                paisMoradiaEnv4:paisMoradiaEnv4,

                //nota falsa estado cidadão
                notaFalsa:notaFalsa,

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
                origemCedula:origemCedula,
                estadoAnimo:estadoAnimo,
                tentouEvadir:tentouEvadir,
                possuiaOutrasCedulas:possuiaOutrasCedulas,
                pagouApos:pagouApos,
                moeda:moeda,
                janelaTransparente:janelaTransparente,
                outrasCaracteristicas:outrasCaracteristicas,
                tipoDoPapel:tipoDoPapel,

                //agente envolvido 1
                nomeAgente1:nomeAgente1,
                siapeAgente1:siapeAgente1,
                matriculaAgente1:matriculaAgente1,
                cargoAgente1:cargoAgente1,
                tipoEnvolvimentoAgente1:tipoEnvolvimentoAgente1,
                
                //agente relator
                matriculaAgenteRelator:matriculaAgenteRelator,
                siapeAgenteRelator:siapeAgenteRelator,
                cargoAgenteRelator:cargoAgenteRelator,
                nomeAgenteRelator:nomeAgenteRelator,
                chaveFoto:chave,

                //agente envolvido 2
                nomeAgente2:nomeAgente2,
                siapeAgente2:siapeAgente2,
                matriculaAgente2:matriculaAgente2,
                cargoAgente2:cargoAgente2,
                tipoEnvolvimentoAgente2:tipoEnvolvimentoAgente2,

                
                
                
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
                setEnv3(false),
                setEnv4(false),
                
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

                //adicionar setenv3
                    setNomeEnv3('');
                    setCpfEnv3('');
                    setIdentidadeEnv3('');
                    setNascimentoEnv3('');
                    setMaeEnv3('');
                    setPaiEnv3('');
                    setTelefoneEnv3('');
                    setGeneroEnv3('');
                    setEstadoEnv3('');
                    setCepEnv3('');
                    setCidadeEnv3('');
                    setBairroEnv3('');
                    setLogradouroEnv3('');
                    setNumeroCasaEnv3('')
                    setComplementoEnv3('');
                    setTipoDeEnvolvimentoEnv3('');
                    setNacionalidadeEnv3('');
                    setNaturalidadeEnv3('');
                    setIdadeAparenteEnv3('');
                    setEstadoCivilEnv3('');
                    setCutisEnv3('');
                    setOcupaçãoAtualEnv3('');
                    setGrauEscolarEnv3('');
                    setOrgãoEpedidorEnv3('');
                    setUfEnvolvidoEnv3('');
                    setpaisMoradiaEnv3('');

                    //adicionar setenv4
                    setNomeEnv4('');
                    setCpfEnv4('');
                    setIdentidadeEnv4('');
                    setNascimentoEnv4('');
                    setMaeEnv4('');
                    setPaiEnv4('');
                    setTelefoneEnv4('');
                    setGeneroEnv4('');
                    setEstadoEnv4('');
                    setCepEnv4('');
                    setCidadeEnv4('');
                    setBairroEnv4('');
                    setLogradouroEnv4('');
                    setNumeroCasaEnv4('')
                    setComplementoEnv4('');
                    setTipoDeEnvolvimentoEnv4('');
                    setNacionalidadeEnv4('');
                    setNaturalidadeEnv4('');
                    setIdadeAparenteEnv4('');
                    setEstadoCivilEnv4('');
                    setCutisEnv4('');
                    setOcupaçãoAtualEnv4('');
                    setGrauEscolarEnv4('');
                    setOrgãoEpedidorEnv4('');
                    setUfEnvolvidoEnv4('');
                    setpaisMoradiaEnv4('');

                    setMarcaDagua('');
                    setMicroImpressoes('');
                    setRegistroCoincidente('');
                    setImagemLatente('');
                    setImpressaoRelevo('');
                    setNumeraçaoNota('');
                    setFibrasColoridas('');
                    setMarcaTatil('');
                    setFioDeSegurança('');
                    setFundosEspeciais('');
                    setFaiaHolografica('');
                    setFibrasLuzVioleta('');
                    setOrigemCedula('');
                    setEstadoAnimo('');
                    setTentouEvadir('');
                    setPossuiaOutrascCeduas('');
                    setPagouApos('');

                    setJanelaTransparente('');
                    setMoeda('');
                    setOutrasCaracteristicas('');
                    setTipoDoPapel('');

                   

                    //agente integrante 1
                    setNomeAgente1('');
                    setSiapeAgente1('');
                    setMatriculaAgente1('');
                    setCargoAgente1('');
                    setTipoEnvolvimentoAgente1('');

                    //agente integrante 2
                    setNomeAgente2('');
                    setSiapeAgente2('');
                    setMatriculaAgente2('');
                    setCargoAgente2('');
                    setTipoEnvolvimentoAgente2('');

                    setLoading(false);
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });
            }
            if(env2 == true && env3 == true && env4 == false){

                 firebase.database().ref('/Ocorrencias').child(chave).set({
                nome: nome,
                cpf: cpf,                
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                estado:estado,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,
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

                
                tipoOcorrencia1:tipoOcorrencia1,
                tipodeEnvolvimento:tipoDeEnvolvimento,
                tipoRo:tipoRo,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,              
                horarioFinal:horarioFinal,
                historico:historico,
                objetosRecolhidos:objetosRecolhidos,
                local:local,

                //env2
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

                //env3
                env3:env3,
                nomeEnv3: nomeEnv3,
                cpfEnv3: cpfEnv3,
                identidadeEnv3:identidadeEnv3,
                nascimentoEnv3:nascimentoEnv3,
                maeEnv3:maeEnv3,
                paiEnv3:paiEnv3,
                telefoneEnv3:telefoneEnv3,
                generoEnv3:generoEnv3,
                estadoEnv3:estadoEnv3,
                cepEnv3:cepEnv3,
                cidadeEnv3:cidadeEnv3,
                bairroEnv3:bairroEnv3,
                logradouroEnv3:logradouroEnv3,
                numeroCasaEnv3:numeroCasaEnv3,
                complementoEnv3:complementoEnv3,
                tipodeEnvolvimentoEnv3:tipoDeEnvolvimentoEnv3,
                nacionalidadeEnv3:nacionalidadeEnv3,
                naturalidadeEnv3:naturalidadeEnv3,
                idadeAparenteEnv3:idadeAparenteEnv3,
                estadoCivilEnv3:estadoCivilEnv3,
                cutisEnv3:cutisEnv3,
                ocupaçãoAtualEnv3:ocupaçãoAtualEnv3,
                grauEscolarEnv3:grauEscoarEnv3,
                orgãoExpedidorEnv3:orgãoExpedidorEnv3,
                ufEnvolvidoEnv3:ufEnvolvidoEnv3,
                paisMoradiaEnv3:paisMoradiaEnv3,

               
                env4:env4,

                //nota falsa estado cidadão
                notaFalsa:notaFalsa,

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
                origemCedula:origemCedula,
                estadoAnimo:estadoAnimo,
                tentouEvadir:tentouEvadir,
                possuiaOutrasCedulas:possuiaOutrasCedulas,
                pagouApos:pagouApos,
                moeda:moeda,
                janelaTransparente:janelaTransparente,
                outrasCaracteristicas:outrasCaracteristicas,
                tipoDoPapel:tipoDoPapel,

                //agente envolvido 1
                nomeAgente1:nomeAgente1,
                siapeAgente1:siapeAgente1,
                matriculaAgente1:matriculaAgente1,
                cargoAgente1:cargoAgente1,
                tipoEnvolvimentoAgente1:tipoEnvolvimentoAgente1,
                
                //agente relator
                matriculaAgenteRelator:matriculaAgenteRelator,
                siapeAgenteRelator:siapeAgenteRelator,
                cargoAgenteRelator:cargoAgenteRelator,
                nomeAgenteRelator:nomeAgenteRelator,
                chaveFoto:chave,

                //agente envolvido 2
                nomeAgente2:nomeAgente2,
                siapeAgente2:siapeAgente2,
                matriculaAgente2:matriculaAgente2,
                cargoAgente2:cargoAgente2,
                tipoEnvolvimentoAgente2:tipoEnvolvimentoAgente2,

                
                
                
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

                 //adicionar setenv3
                    setNomeEnv3('');
                    setCpfEnv3('');
                    setIdentidadeEnv3('');
                    setNascimentoEnv3('');
                    setMaeEnv3('');
                    setPaiEnv3('');
                    setTelefoneEnv3('');
                    setGeneroEnv3('');
                    setEstadoEnv3('');
                    setCepEnv3('');
                    setCidadeEnv3('');
                    setBairroEnv3('');
                    setLogradouroEnv3('');
                    setNumeroCasaEnv3('')
                    setComplementoEnv3('');
                    setTipoDeEnvolvimentoEnv3('');
                    setNacionalidadeEnv3('');
                    setNaturalidadeEnv3('');
                    setIdadeAparenteEnv3('');
                    setEstadoCivilEnv3('');
                    setCutisEnv3('');
                    setOcupaçãoAtualEnv3('');
                    setGrauEscolarEnv3('');
                    setOrgãoEpedidorEnv3('');
                    setUfEnvolvidoEnv3('');
                    setpaisMoradiaEnv3('');
                    setEnv3(false);

                    
                    setEnv4(false),

                   

                    setMarcaDagua('');
                    setMicroImpressoes('');
                    setRegistroCoincidente('');
                    setImagemLatente('');
                    setImpressaoRelevo('');
                    setNumeraçaoNota('');
                    setFibrasColoridas('');
                    setMarcaTatil('');
                    setFioDeSegurança('');
                    setFundosEspeciais('');
                    setFaiaHolografica('');
                    setFibrasLuzVioleta('');
                    setOrigemCedula('');
                    setEstadoAnimo('');
                    setTentouEvadir('');
                    setPossuiaOutrascCeduas('');
                    setPagouApos('');

                    setJanelaTransparente('');
                    setMoeda('');
                    setOutrasCaracteristicas('');
                    setTipoDoPapel('');

                  
                    //agente integrante 1
                    setNomeAgente1('');
                    setSiapeAgente1('');
                    setMatriculaAgente1('');
                    setCargoAgente1('');
                    setTipoEnvolvimentoAgente1('');

                    //agente integrante 2
                    setNomeAgente2('');
                    setSiapeAgente2('');
                    setMatriculaAgente2('');
                    setCargoAgente2('');
                    setTipoEnvolvimentoAgente2('');

                    setLoading(false);
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });
            


            }

            if(env2 == true && env3 == false && env4 == false){

                 firebase.database().ref('/Ocorrencias').child(chave).set({
                nome: nome,
                cpf: cpf,                
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                estado:estado,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,
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

                
                tipoOcorrencia1:tipoOcorrencia1,
                tipodeEnvolvimento:tipoDeEnvolvimento,
                tipoRo:tipoRo,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,              
                horarioFinal:horarioFinal,
                historico:historico,
                objetosRecolhidos:objetosRecolhidos,
                local:local,

                //env2
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

                env3:env3,
                env4:env4,

               
                //nota falsa estado cidadão
                notaFalsa:notaFalsa,

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
                origemCedula:origemCedula,
                estadoAnimo:estadoAnimo,
                tentouEvadir:tentouEvadir,
                possuiaOutrasCedulas:possuiaOutrasCedulas,
                pagouApos:pagouApos,
                moeda:moeda,
                janelaTransparente:janelaTransparente,
                outrasCaracteristicas:outrasCaracteristicas,
                tipoDoPapel:tipoDoPapel,

                //agente envolvido 1
                nomeAgente1:nomeAgente1,
                siapeAgente1:siapeAgente1,
                matriculaAgente1:matriculaAgente1,
                cargoAgente1:cargoAgente1,
                tipoEnvolvimentoAgente1:tipoEnvolvimentoAgente1,
                
                //agente relator
                matriculaAgenteRelator:matriculaAgenteRelator,
                siapeAgenteRelator:siapeAgenteRelator,
                cargoAgenteRelator:cargoAgenteRelator,
                nomeAgenteRelator:nomeAgenteRelator,
                chaveFoto:chave,

                //agente envolvido 2
                nomeAgente2:nomeAgente2,
                siapeAgente2:siapeAgente2,
                matriculaAgente2:matriculaAgente2,
                cargoAgente2:cargoAgente2,
                tipoEnvolvimentoAgente2:tipoEnvolvimentoAgente2,

                
                
                
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
                    setEnv3(false),
                    setEnv4(false),
                    
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

                 
                   

                    setMarcaDagua('');
                    setMicroImpressoes('');
                    setRegistroCoincidente('');
                    setImagemLatente('');
                    setImpressaoRelevo('');
                    setNumeraçaoNota('');
                    setFibrasColoridas('');
                    setMarcaTatil('');
                    setFioDeSegurança('');
                    setFundosEspeciais('');
                    setFaiaHolografica('');
                    setFibrasLuzVioleta('');
                    setOrigemCedula('');
                    setEstadoAnimo('');
                    setTentouEvadir('');
                    setPossuiaOutrascCeduas('');
                    setPagouApos('');

                    setJanelaTransparente('');
                    setMoeda('');
                    setOutrasCaracteristicas('');
                    setTipoDoPapel('');

                    //variaveis agente relator
                  

                    //agente integrante 1
                    setNomeAgente1('');
                    setSiapeAgente1('');
                    setMatriculaAgente1('');
                    setCargoAgente1('');
                    setTipoEnvolvimentoAgente1('');

                    //agente integrante 2
                    setNomeAgente2('');
                    setSiapeAgente2('');
                    setMatriculaAgente2('');
                    setCargoAgente2('');
                    setTipoEnvolvimentoAgente2('');

                    setLoading(false);
                    alert('Dados enviados!');
                    navigation.navigate('HomeRo');

                })
                .catch((error) => {
                    alert(error);
                });
            


            

            }
            
            if(env2 == false && env3 == false && env4 == false){

             firebase.database().ref('/Ocorrencias').child(chave).set({
               nome: nome,
                cpf: cpf,                
                data:data,
                hora:hora,
                identidade:identidade,
                nascimento:nascimento,
                mae:mae,
                pai:pai,
                telefone:telefone,
                genero:genero,
                estado:estado,
                cep:cep,
                cidade:cidade,
                bairro:bairro,
                logradouro:logradouro,
                numeroCasa:numeroCasa,
                complemento:complemento,
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

                
                tipoOcorrencia1:tipoOcorrencia1,
                tipodeEnvolvimento:tipoDeEnvolvimento,
                tipoRo:tipoRo,
                tentadoConsumado:tentadoConsumado,
                alvoDoEvento:alvoDoEvento,
                dataDoFato:dataDoFato,
                horarioDoFato:horarioDoFato,
                dataFinal:dataFinal,              
                horarioFinal:horarioFinal,
                historico:historico,
                objetosRecolhidos:objetosRecolhidos,
                local:local,

                env2:env2,
                env3:env3,
                env4:env4,


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

                origemCedula:origemCedula,
                estadoAnimo:estadoAnimo,
                tentouEvadir:tentouEvadir,
                possuiaOutrasCedulas:possuiaOutrasCedulas,
                pagouApos:pagouApos,

                moeda:moeda,
                janelaTransparente:janelaTransparente,
                outrasCaracteristicas:outrasCaracteristicas,
                tipoDoPapel:tipoDoPapel,

                //agente relator
                matriculaAgenteRelator:matriculaAgenteRelator,
                siapeAgenteRelator:siapeAgenteRelator,
                cargoAgenteRelator:cargoAgenteRelator,
                nomeAgenteRelator:nomeAgenteRelator,
                chaveFoto:chave,

                //agente envolvido 1
                nomeAgente1:nomeAgente1,
                siapeAgente1:siapeAgente1,
                matriculaAgente1:matriculaAgente1,
                cargoAgente1:cargoAgente1,
                tipoEnvolvimentoAgente1:tipoEnvolvimentoAgente1,

                //agente envolvido 2
                nomeAgente2:nomeAgente2,
                siapeAgente2:siapeAgente2,
                matriculaAgente2:matriculaAgente2,
                cargoAgente2:cargoAgente2,
                tipoEnvolvimentoAgente2:tipoEnvolvimentoAgente2,
                
                
                
                
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

    //carrega imagem
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
                            let nomeAgenteRelator = snapshot.val().nome;
                            let matriculaAgenteRelator = snapshot.val().matriculaAgente;
                            let siapeAgenteRelator = snapshot.val().siapeAgente;
                            let cargoAgenteRelator = snapshot.val().cargoAgente;
                            //seta chave realtime para foto
                            let chavess = firebase.database().ref('/Ocorrencias');
                            let chave = chavess.push().key;
                            
                            saveFoto(chave,nomeAgenteRelator,matriculaAgenteRelator,siapeAgenteRelator,cargoAgenteRelator);
                           
                    
                        });       
                    
                } 
           
                    
        }else {alert("Preencha os campos corretamente");}
     };

     //Galeria
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

    //foto camera
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

    //sair

    const sair = () => {
        navigation.goBack();
    };

    //mascaras env 2

     const mascaraCpf = (t) => {
        setCpf(mask(t,['999.999.999-99']))
    }

    const mascaraNascimento = (t) => {
        setNascimento(mask(t,['99/99/9999']))
    }

    const mascaraTelefone = (t) => {
        setTelefone(mask(t,['(99) 9999-9999','(99) 99999-9999' ]))
    }

    /*const mascaraCep = (t) => {
        setCep(mask(t,['99999-999']))
    }*/

    //Mascaras env 2

    const mascaraCpfEnv2 = (t) => {
        setCpfEnv2(mask(t,['999.999.999-99']))
    }

    const mascaraTelefoneEnv2 = (t) => {
        setTelefoneEnv2(mask(t,['(99) 99999-9999']))
    }

    const mascaraNascimentoEnv2 = (t) => {
        setNascimentoEnv2(mask(t,['99/99/9999']))
    }

    //Mascaras env 3

    const mascaraCpfEnv3 = (t) => {
        setCpfEnv3(mask(t,['999.999.999-99']))
    }

    const mascaraTelefoneEnv3 = (t) => {
        setTelefoneEnv3(mask(t,['(99) 99999-9999']))
    }

    const mascaraNascimentoEnv3 = (t) => {
        setNascimentoEnv3(mask(t,['99/99/9999']))
    }

    //Mascaras env 4

    const mascaraCpfEnv4 = (t) => {
        setCpfEnv4(mask(t,['999.999.999-99']))
    }

    const mascaraTelefoneEnv4 = (t) => {
        setTelefoneEnv4(mask(t,['(99) 99999-9999']))
    }

    const mascaraNascimentoEnv4 = (t) => {
        setNascimentoEnv4(mask(t,['99/99/9999']))
    }

    //mascaras informações da ocorrência
    const mascaraDataFato = (t) => {
        setDataDoFato(mask(t,['99/99/9999']))
    }

    const mascaraDataFinal = (t) => {
        setDataFinal(mask(t,['99/99/9999']))
    }

    const mascaraHoraDoFato = (t) => {
        setHorarioDoFato(mask(t,['99:99']))
    }

    const mascaraHoraFinal = (t) => {
        setHorarioFinal(mask(t,['99:99']))
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
                    setSwitchEnv2(false)
                    setSwitchEnv3(false)
                    setSwitchEnv4(false)
                    setEnv2(false)
                    setEnv3(false)
                    setEnv4(false)
                    setNomeEnv2('')
                    setCpfEnv2('')
                    setIdentidadeEnv2('')
                    setNascimentoEnv2('')
                    setMaeEnv2('')
                    setPaiEnv2('')
                    setTelefoneEnv2('')
                    setGeneroEnv2('')
                    setEstadoEnv2('')
                    setCepEnv2('')
                    setCidadeEnv2('')
                    setBairroEnv2('')
                    setLogradouroEnv2('')
                    setNumeroCasaEnv2('')
                    setComplementoEnv2('')

                    setTipoDeEnvolvimentoEnv2('')
                    setNacionalidadeEnv2('')
                    setNaturalidadeEnv2('')
                    setIdadeAparenteEnv2('')
                    setEstadoCivilEnv2('')
                    setCutisEnv2('')
                    setOcupaçãoAtualEnv2('')
                    setGrauEscolarEnv2('')
                    setOrgãoEpedidorEnv2('')
                    setUfEnvolvidoEnv2('')
                    setpaisMoradiaEnv2('')  

                    setNomeEnv3('')
                    setCpfEnv3('')
                    setIdentidadeEnv3('')
                    setNascimentoEnv3('')
                    setMaeEnv3('')
                    setPaiEnv3('')
                    setTelefoneEnv3('')
                    setGeneroEnv3('')
                    setEstadoEnv3('')
                    setCepEnv3('')
                    setCidadeEnv3('')
                    setBairroEnv3('')
                    setLogradouroEnv3('')
                    setNumeroCasaEnv3('')
                    setComplementoEnv3('')

                    setTipoDeEnvolvimentoEnv3('')
                    setNacionalidadeEnv3('')
                    setNaturalidadeEnv3('')
                    setIdadeAparenteEnv3('')
                    setEstadoCivilEnv3('')
                    setCutisEnv3('')
                    setOcupaçãoAtualEnv3('')
                    setGrauEscolarEnv3('')
                    setOrgãoEpedidorEnv3('')
                    setUfEnvolvidoEnv3('')
                    setpaisMoradiaEnv3('')  

                    setNomeEnv4('')
                    setCpfEnv4('')
                    setIdentidadeEnv4('')
                    setNascimentoEnv4('')
                    setMaeEnv4('')
                    setPaiEnv4('')
                    setTelefoneEnv4('')
                    setGeneroEnv4('')
                    setEstadoEnv4('')
                    setCepEnv4('')
                    setCidadeEnv4('')
                    setBairroEnv4('')
                    setLogradouroEnv4('')
                    setNumeroCasaEnv4('')
                    setComplementoEnv4('')

                    setTipoDeEnvolvimentoEnv4('')
                    setNacionalidadeEnv4('')
                    setNaturalidadeEnv4('')
                    setIdadeAparenteEnv4('')
                    setEstadoCivilEnv4('')
                    setCutisEnv4('')
                    setOcupaçãoAtualEnv4('')
                    setGrauEscolarEnv4('')
                    setOrgãoEpedidorEnv4('')
                    setUfEnvolvidoEnv4('')
                    setpaisMoradiaEnv4('')

                  }
                  if(switchEnv3 === true){
                      setEnv3(true)
                  }else{
                    setEnv4(false)
                    setEnv3(false)
                    setSwitchEnv4(false)
                    setSwitchEnv3(false)
                    
                    
                    setNomeEnv3('')
                    setCpfEnv3('')
                    setIdentidadeEnv3('')
                    setNascimentoEnv3('')
                    setMaeEnv3('')
                    setPaiEnv3('')
                    setTelefoneEnv3('')
                    setGeneroEnv3('')
                    setEstadoEnv3('')
                    setCepEnv3('')
                    setCidadeEnv3('')
                    setBairroEnv3('')
                    setLogradouroEnv3('')
                    setNumeroCasaEnv3('')
                    setComplementoEnv3('')

                    setTipoDeEnvolvimentoEnv3('')
                    setNacionalidadeEnv3('')
                    setNaturalidadeEnv3('')
                    setIdadeAparenteEnv3('')
                    setEstadoCivilEnv3('')
                    setCutisEnv3('')
                    setOcupaçãoAtualEnv3('')
                    setGrauEscolarEnv3('')
                    setOrgãoEpedidorEnv3('')
                    setUfEnvolvidoEnv3('')
                    setpaisMoradiaEnv3('')  

                    setNomeEnv4('')
                    setCpfEnv4('')
                    setIdentidadeEnv4('')
                    setNascimentoEnv4('')
                    setMaeEnv4('')
                    setPaiEnv4('')
                    setTelefoneEnv4('')
                    setGeneroEnv4('')
                    setEstadoEnv4('')
                    setCepEnv4('')
                    setCidadeEnv4('')
                    setBairroEnv4('')
                    setLogradouroEnv4('')
                    setNumeroCasaEnv4('')
                    setComplementoEnv4('')

                    setTipoDeEnvolvimentoEnv4('')
                    setNacionalidadeEnv4('')
                    setNaturalidadeEnv4('')
                    setIdadeAparenteEnv4('')
                    setEstadoCivilEnv4('')
                    setCutisEnv4('')
                    setOcupaçãoAtualEnv4('')
                    setGrauEscolarEnv4('')
                    setOrgãoEpedidorEnv4('')
                    setUfEnvolvidoEnv4('')
                    setpaisMoradiaEnv4('')  

                  }
                  if(switchEnv4 === true){
                      setEnv4(true)
                  }else{
                    setEnv4(false)
                    setNomeEnv4('')
                    setCpfEnv4('')
                    setIdentidadeEnv4('')
                    setNascimentoEnv4('')
                    setMaeEnv4('')
                    setPaiEnv4('')
                    setTelefoneEnv4('')
                    setGeneroEnv4('')
                    setEstadoEnv4('')
                    setCepEnv4('')
                    setCidadeEnv4('')
                    setBairroEnv4('')
                    setLogradouroEnv4('')
                    setNumeroCasaEnv4('')
                    setComplementoEnv4('')

                    setTipoDeEnvolvimentoEnv4('')
                    setNacionalidadeEnv4('')
                    setNaturalidadeEnv4('')
                    setIdadeAparenteEnv4('')
                    setEstadoCivilEnv4('')
                    setCutisEnv4('')
                    setOcupaçãoAtualEnv4('')
                    setGrauEscolarEnv4('')
                    setOrgãoEpedidorEnv4('')
                    setUfEnvolvidoEnv4('')
                    setpaisMoradiaEnv4('')  

                  }
                  if(switchAgenteParticipante1 === true){
                      setAgenteParticipante1(true)
                  }else{
                      setAgenteParticipante1(false);
                      setSwitchAgenteParticipante2(false);
                      setSearchAgente1('');
                      setNomeAgente1('');
                      setMatriculaAgente1('');
                      setSiapeAgente1('');
                      setCargoAgente1('');
                      setTipoEnvolvimentoAgente1('');
                      setNomeAgente2('');
                      setMatriculaAgente2('');
                      setSiapeAgente2('');
                      setCargoAgente2('');
                      setTipoEnvolvimentoAgente2('');
                      setSearchAgente2('');
                  }
                   if(switchAgenteParticipante2 === true){
                      setAgenteParticipante2(true);
                  }else{
                      setAgenteParticipante2(false);
                      setNomeAgente2('');
                      setMatriculaAgente2('');
                      setSiapeAgente2('');
                      setCargoAgente2('');
                      setTipoEnvolvimentoAgente2('');
                      setSearchAgente2('');
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
                  if(switchJanelaTransparente === true){
                      setJanelaTransparente('Inexistente ou difere da cédula original')
                  }else{
                      setJanelaTransparente('')
                  }
                  if(switchTipoDoPapel === true){
                      setTipoDoPapel('Inexistente ou difere da cédula original')
                  }else{
                      setTipoDoPapel('')
                  }
              },[switchEnv2,switchEnv3,switchEnv4,switchAgenteParticipante1,switchAgenteParticipante2,switchMarcaDagua,switchMicroImpressoes,switchRegistroCoincidente,
                switchImagemLatente,switchImpressaoRelevo,switchNumeraçaoNota,switchFibrasColoridas,switchMarcaTatil,
                switchFioDeSegurança,switchFundosEspeciais,switchFibrasLuzVioleta,switchFaixaHoografica,switchTipoDoPapel,switchJanelaTransparente,
            ]) 



              const semRegistroPai = () => {
                    setPai('Sem registro')
              }

              const semRegistroMae = () => {
                  setMae('Sem registro')
              }

              const semRegistroPai2 = () => {
                    setPaiEnv2('Sem registro')
              }

              const semRegistroMae2 = () => {
                  setMaeEnv2('Sem registro')
              }

              const semRegistroPai3 = () => {
                    setPaiEnv3('Sem registro')
              }

              const semRegistroMae3 = () => {
                  setMaeEnv3('Sem registro')
              }

              const semRegistroPai4 = () => {
                    setPaiEnv4('Sem registro')
              }

              const semRegistroMae4 = () => {
                  setMaeEnv4('Sem registro')
              }


            
                    //fetch('https://viacep.com.br/ws/30570000/json/')por cep em baio por uf cidade
                const buscarCep = (cep) =>{
                            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                                   if(data.localidade){
                                        console.log(data);
                                    setCidade(data.localidade);
                                    setBairro(data.bairro);
                                    setLogradouro(data.logradouro);
                                    setEstado(data.uf)
                                   }else{
                                       alert('CEP não encontrado');
                                   }
                                   
                                    
                            })
                                
                            
                }

                 const buscarCepenv2 = (cep) =>{
                            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                                   if(data.localidade){
                                        console.log(data);
                                    setCidadeEnv2(data.localidade);
                                    setBairroEnv2(data.bairro);
                                    setLogradouroEnv2(data.logradouro);
                                    setEstadoEnv2(data.uf)
                                   }else{
                                       alert('CEP não encontrado');
                                   }
                                   
                            })
                }

                 const buscarCepenv3 = (cep) =>{
                            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                                   if(data.localidade){
                                        console.log(data);
                                    setCidadeEnv3(data.localidade);
                                    setBairroEnv3(data.bairro);
                                    setLogradouroEnv3(data.logradouro);
                                    setEstadoEnv3(data.uf)
                                   }else{
                                       alert('CEP não encontrado');
                                   }
                                    
                            })
                }

                 const buscarCepenv4 = (cep) =>{
                            fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
                                    if(data.localidade){
                                        console.log(data);
                                    setCidadeEnv4(data.localidade);
                                    setBairroEnv4(data.bairro);
                                    setLogradouroEnv4(data.logradouro);
                                    setEstadoEnv4(data.uf)
                                   }else{
                                       alert('CEP não encontrado');
                                   }
                                    
                            })
                }


                const buscarAgente = (nomeAgente) =>{
                                try {
                    firebase.database().ref('/usuarios').orderByChild('nome').startAt(nomeAgente)
                    .once('value', (snapshot) => {
                        const list = [];
                        
                        snapshot.forEach((childItem) => {
                        list.push({
                        
                            cargoAgente:childItem.val().cargoAgente,
                            nome: childItem.val().nome,
                            matriculaAgente: childItem.val().matriculaAgente,
                            siapeAgente: childItem.val().siapeAgente,
                        
                        });
                        });
                        
                        const nome = list[0].nome;
                        const cargoAgente = list[0].cargoAgente;
                        const matriculaAgente = list[0].matriculaAgente;
                        const siapeAgente = list[0].siapeAgente;
                        
                        setNomeAgente1(nome);
                        setCargoAgente1(cargoAgente);
                        setMatriculaAgente1(matriculaAgente);
                        console.log(matriculaAgente1)
                        setSiapeAgente1(siapeAgente);

                        
                        
                        
                        
                        
                        
                    })

                    } catch (error) {
                    alert(error);
                    }
                }

                 const buscarAgente2 = (nomeAgente) =>{
                                try {
                    firebase.database().ref('/usuarios').orderByChild('nome').startAt(nomeAgente)
                    .once('value', (snapshot) => {
                        const list = [];
                        
                        snapshot.forEach((childItem) => {
                        list.push({
                        
                            cargoAgente:childItem.val().cargoAgente,
                            nome: childItem.val().nome,
                            matriculaAgente: childItem.val().matriculaAgente,
                            siapeAgente: childItem.val().siapeAgente,
                        
                        });
                        });
                        
                        const nome = list[0].nome;
                        const cargoAgente = list[0].cargoAgente;
                        const matriculaAgente = list[0].matriculaAgente;
                        const siapeAgente = list[0].siapeAgente;
                        
                        setNomeAgente2(nome);
                        setCargoAgente2(cargoAgente);
                        setMatriculaAgente2(matriculaAgente);
                        console.log(matriculaAgente1)
                        setSiapeAgente2(siapeAgente);

                        
                        
                        
                        
                        
                        
                    })

                    } catch (error) {
                    alert(error);
                    }
                }

            useEffect(()=>{
               
                if (searchAgente1==='') {
                    setNomeAgente1('');
                    setCargoAgente1('');
                    setMatriculaAgente1('');
                    setSiapeAgente1('');
                }
                
            
            
            },[searchAgente1])

            useEffect(()=>{
               
                if (searchAgente2==='') {
                    setNomeAgente2('');
                    setCargoAgente2('');
                    setMatriculaAgente2('');
                    setSiapeAgente2('');
                }
                
            
            
            },[searchAgente2])

            const handleClickSearch = () =>{
           if (searchAgente1) {
                buscarAgente(searchAgente1);
           }   
           
  }
  const handleClickSearchAgente2 = () =>{
           if (searchAgente2) {
                buscarAgente2(searchAgente2);
           }   
           
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
                <Picker.Item label="Gênero" value="Gênero" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidade} onChangeText={(t) => setNacionalidade(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidade} onChangeText={(t) => setNaturalidade(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/user.png')} placeholder ='Idade Aparente'  keyboardType='number-pad' placeholderTextColor ='#666360' value={idadeAparente} onChangeText={(t) => setIdadeAparente(t)} />
                 <Picker
                mode="dropdown"
                selectedValue={estadoCivil}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setEstadoCivil(itemValue)}
                >
                <Picker.Item label="Estado Civil" value="Estado Civil" />
                <Picker.Item label="Solteiro(a)" value="Solteiro(a)" />
                <Picker.Item label="Casado(a)" value="Casado(a)" />
                <Picker.Item label="Divorciado(a)" value="Divorciado(a)" />
                </Picker>
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/user.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutis} onChangeText={(t) => setCutis(t)} />
                <InputMenorAinda source = {require('../../../assets/user.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtual} onChangeText={(t) => setOcupaçãoAtual(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
               <InputMenor source = {require('../../../assets/rgicon.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidor} onChangeText={(t) => setOrgãoEpedidor(t)} />
               <Picker
                mode="dropdown"
                selectedValue={grauEscoar}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGrauEscolar(itemValue)}
                >
                <Picker.Item label="Grau de Escolaridade" value="Grau de Escolaridade" />
                <Picker.Item label="Fundamental Incompleto" value="Fundamental Incompleto" />
                <Picker.Item label="Fundamental Completo" value="Fundamental Completo" />
                <Picker.Item label="Médio Incompleto" value="Médio Incompleto" />
                <Picker.Item label="Médio Completo" value="Médio Completo" />
                <Picker.Item label="Superior Incompleto" value="Superior Incompleto" />
                <Picker.Item label="Superior Completo" value="Superior Completo" />
                </Picker>
                   
                   </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvido} onChangeText={(t) => setUfEnvolvido(t)} />
                   <Picker
                mode="dropdown"
                selectedValue={tipoDeEnvolvimento}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoDeEnvolvimento(itemValue)}
                >
                <Picker.Item label="Tipo de Envolvimento" value="Tipo de Envolvimento" />
                <Picker.Item label="Autor" value="Autor" />
                <Picker.Item label="Vítima" value="Vítima" />
                <Picker.Item label="Testemunha" value="Testemunha" />
                </Picker>
                   </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' maxLength={8} placeholderTextColor ='#666360' onEndEditing={()=>buscarCep(cep)} keyboardType='number-pad' value={cep} onChangeText={(t) => setCep(t)} />
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
                        <Picker.Item label="Mato Grosso" value="MT" />
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
                <TextSubtitulo>Qualificação do Envolvido 2</TextSubtitulo>
            </View>

           

               

                


                <View style={{marginLeft:30,marginTop:15}}>
                
                <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='RG' placeholderTextColor ='#666360' keyboardType='number-pad' value={identidadeEnv2} onChangeText={(t) => setIdentidadeEnv2(t)}/>
                 <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='CPF' placeholderTextColor ='#666360' keyboardType='number-pad' value={cpfEnv2} onChangeText={(t) => mascaraCpfEnv2(t)}/>
                  <InputsInteiro source = {require('../../../assets/phone.png')} placeholder ='Telefone' placeholderTextColor ='#666360' keyboardType='number-pad' value={telefoneEnv2} onChangeText={(t) => mascaraTelefoneEnv2(t)}/>
                </View>

           

            <View style = {styles.viewInputsMeio} >
                <InputsInteiro  source = {require('../../../assets/user.png')} placeholder ='Nome Completo' placeholderTextColor ='#666360' autoCapitalize='characters' value={nomeEnv2} onChangeText={(t)=>setNomeEnv2(t)} />
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Mãe' placeholderTextColor ='#666360' value={maeEnv2} onChangeText={(t) => setMaeEnv2(t)}/>
                    <BtnFixa onPress={semRegistroMae2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={paiEnv2} onChangeText={(t) => setPaiEnv2(t)}/>
                    <BtnFixa onPress={semRegistroPai2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimentoEnv2} onChangeText={(t) => mascaraNascimentoEnv2(t)} />

                <Picker
                mode="dropdown"
                selectedValue={generoEnv2}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGeneroEnv2(itemValue)}
                >
                <Picker.Item label="Gênero" value="Gênero" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidadeEnv2} onChangeText={(t) => setNacionalidadeEnv2(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidadeEnv2} onChangeText={(t) => setNaturalidadeEnv2(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Idade Aparente' placeholderTextColor ='#666360' value={idadeAparenteEnv2} onChangeText={(t) => setIdadeAparenteEnv2(t)} />
                       
                       <Picker
                mode="dropdown"
                selectedValue={estadoCivilEnv2}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setEstadoCivilEnv2(itemValue)}
                >
                <Picker.Item label="Estado Civil" value="Estado Civil" />
                <Picker.Item label="Solteiro(a)" value="Solteiro(a)" />
                <Picker.Item label="Casado(a)" value="Casado(a)" />
                <Picker.Item label="Divorciado(a)" value="Divorciado(a)" />
                </Picker>
                       </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutisEnv2} onChangeText={(t) => setCutisEnv2(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtualEnv2} onChangeText={(t) => setOcupaçãoAtualEnv2(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidorEnv2} onChangeText={(t) => setOrgãoEpedidorEnv2(t)} />
               
               <Picker
                mode="dropdown"
                selectedValue={grauEscoarEnv2}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGrauEscolarEnv2(itemValue)}
                >
                <Picker.Item label="Grau de Escolaridade" value="Grau de Escolaridade" />
                <Picker.Item label="Fundamental Incompleto" value="Fundamental Incompleto" />
                <Picker.Item label="Fundamental Completo" value="Fundamental Completo" />
                <Picker.Item label="Médio Incompleto" value="Médio Incompleto" />
                <Picker.Item label="Médio Completo" value="Médio Completo" />
                <Picker.Item label="Superior Incompleto" value="Superior Incompleto" />
                <Picker.Item label="Superior Completo" value="Superior Completo" />
                </Picker>
                          </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvidoEnv2} onChangeText={(t) => setUfEnvolvidoEnv2(t)} />
                     
                     <Picker
                mode="dropdown"
                selectedValue={tipoDeEnvolvimentoEnv2}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoDeEnvolvimentoEnv2(itemValue)}
                >
                <Picker.Item label="Tipo de Envolvimento" value="Tipo de Envolvimento" />
                <Picker.Item label="Autor" value="Autor" />
                <Picker.Item label="Vítima" value="Vítima" />
                <Picker.Item label="Testemunha" value="Testemunha" />
                </Picker>
                      </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido 2</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' maxLength={8} placeholderTextColor ='#666360' onEndEditing={()=>buscarCepenv2(cepEnv2)} keyboardType='number-pad' value={cepEnv2} onChangeText={(t) => setCepEnv2(t)} />
                <Picker
                mode="dropdown"
                selectedValue={estadoEnv2}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff' }}
                onValueChange={(itemValue, itemIndex) => setEstadoEnv2(itemValue)}
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
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cidade' placeholderTextColor ='#666360' value={cidadeEnv2} onChangeText={(t) => setCidadeEnv2(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Bairro' placeholderTextColor ='#666360' value={bairroEnv2} onChangeText={(t) => setBairroEnv2(t)} />
            </View>

            <View style = {styles.viewLogradoro}>
             <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Logradouro' placeholderTextColor ='#666360' value={logradouroEnv2} onChangeText={(t) => setLogradouroEnv2(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Número' placeholderTextColor ='#666360' value={numeroCasaEnv2} onChangeText={(t) => setNumeroCasaEnv2(t)} />

            </View>

            <View style = {{marginLeft:30}} >
            <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Complemento' placeholderTextColor ='#666360' value={complementoEnv2} onChangeText={(t) => setComplementoEnv2(t)}/>
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='País' placeholderTextColor ='#666360' value={paisMoradiaEnv2} onChangeText={(t) => setpaisMoradiaEnv2(t)} />
                        
                       
                       </View>

                       <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:30}}>
                        <View style={{marginRight:15}}>
                            <TextEnvolvido2>Envolvido 3</TextEnvolvido2>
                        </View>
                     <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchEnv3} onValueChange={(t)=>setSwitchEnv3(t)} />
                </View>
                       
              </View>
              }  



              { env3 && 
              <View>
              <View style={styles.viewQualiEnv}>
                <TextSubtitulo>Qualificação do Envolvido 3</TextSubtitulo>
            </View>

           

               

                


                <View style={{marginLeft:30,marginTop:15}}>
                
                <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='RG' placeholderTextColor ='#666360' keyboardType='number-pad' value={identidadeEnv3} onChangeText={(t) => setIdentidadeEnv3(t)}/>
                 <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='CPF' placeholderTextColor ='#666360' keyboardType='number-pad' value={cpfEnv3} onChangeText={(t) => mascaraCpfEnv3(t)}/>
                  <InputsInteiro source = {require('../../../assets/phone.png')} placeholder ='Telefone' placeholderTextColor ='#666360' keyboardType='number-pad' value={telefoneEnv3} onChangeText={(t) => mascaraTelefoneEnv3(t)}/>
                </View>

           

            <View style = {styles.viewInputsMeio} >
                <InputsInteiro  source = {require('../../../assets/user.png')} placeholder ='Nome Completo' placeholderTextColor ='#666360' autoCapitalize='characters' value={nomeEnv3} onChangeText={(t)=>setNomeEnv3(t)} />
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Mãe' placeholderTextColor ='#666360' value={maeEnv3} onChangeText={(t) => setMaeEnv3(t)}/>
                    <BtnFixa onPress={semRegistroMae2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={paiEnv3} onChangeText={(t) => setPaiEnv3(t)}/>
                    <BtnFixa onPress={semRegistroPai2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimentoEnv3} onChangeText={(t) => mascaraNascimentoEnv3(t)} />

                <Picker
                mode="dropdown"
                selectedValue={generoEnv3}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGeneroEnv3(itemValue)}
                >
                <Picker.Item label="Gênero" value="Gênero" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidadeEnv3} onChangeText={(t) => setNacionalidadeEnv3(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidadeEnv3} onChangeText={(t) => setNaturalidadeEnv3(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Idade Aparente' placeholderTextColor ='#666360' value={idadeAparenteEnv3} onChangeText={(t) => setIdadeAparenteEnv3(t)} />
                       
                       <Picker
                mode="dropdown"
                selectedValue={estadoCivilEnv3}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setEstadoCivilEnv3(itemValue)}
                >
                <Picker.Item label="Estado Civil" value="Estado Civil" />
                <Picker.Item label="Solteiro(a)" value="Solteiro(a)" />
                <Picker.Item label="Casado(a)" value="Casado(a)" />
                <Picker.Item label="Divorciado(a)" value="Divorciado(a)" />
                </Picker>
                       </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutisEnv3} onChangeText={(t) => setCutisEnv3(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtualEnv3} onChangeText={(t) => setOcupaçãoAtualEnv3(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidorEnv3} onChangeText={(t) => setOrgãoEpedidorEnv3(t)} />
               
               <Picker
                mode="dropdown"
                selectedValue={grauEscoarEnv3}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGrauEscolarEnv3(itemValue)}
                >
                <Picker.Item label="Grau de Escolaridade" value="Grau de Escolaridade" />
                <Picker.Item label="Fundamental Incompleto" value="Fundamental Incompleto" />
                <Picker.Item label="Fundamental Completo" value="Fundamental Completo" />
                <Picker.Item label="Médio Incompleto" value="Médio Incompleto" />
                <Picker.Item label="Médio Completo" value="Médio Completo" />
                <Picker.Item label="Superior Incompleto" value="Superior Incompleto" />
                <Picker.Item label="Superior Completo" value="Superior Completo" />
                </Picker>
                          </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvidoEnv3} onChangeText={(t) => setUfEnvolvidoEnv3(t)} />
                     
                     <Picker
                mode="dropdown"
                selectedValue={tipoDeEnvolvimentoEnv3}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoDeEnvolvimentoEnv3(itemValue)}
                >
                <Picker.Item label="Tipo de Envolvimento" value="Tipo de Envolvimento" />
                <Picker.Item label="Autor" value="Autor" />
                <Picker.Item label="Vítima" value="Vítima" />
                <Picker.Item label="Testemunha" value="Testemunha" />
                </Picker>
                      </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido 3</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' maxLength={8} placeholderTextColor ='#666360' onEndEditing={()=>buscarCepenv3(cepEnv3)} keyboardType='number-pad' value={cepEnv3} onChangeText={(t) => setCepEnv3(t)} />
                <Picker
                mode="dropdown"
                selectedValue={estadoEnv3}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff' }}
                onValueChange={(itemValue, itemIndex) => setEstadoEnv3(itemValue)}
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
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cidade' placeholderTextColor ='#666360' value={cidadeEnv3} onChangeText={(t) => setCidadeEnv3(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Bairro' placeholderTextColor ='#666360' value={bairroEnv3} onChangeText={(t) => setBairroEnv3(t)} />
            </View>

            <View style = {styles.viewLogradoro}>
             <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Logradouro' placeholderTextColor ='#666360' value={logradouroEnv3} onChangeText={(t) => setLogradouroEnv3(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Número' placeholderTextColor ='#666360' value={numeroCasaEnv3} onChangeText={(t) => setNumeroCasaEnv3(t)} />

            </View>

            <View style = {{marginLeft:30}} >
            <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Complemento' placeholderTextColor ='#666360' value={complementoEnv3} onChangeText={(t) => setComplementoEnv3(t)}/>
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='País' placeholderTextColor ='#666360' value={paisMoradiaEnv3} onChangeText={(t) => setpaisMoradiaEnv3(t)} />
                        
                       
                       </View>

                       <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:30}}>
                        <View style={{marginRight:15}}>
                            <TextEnvolvido2>Envolvido 4</TextEnvolvido2>
                        </View>
                     <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchEnv4} onValueChange={(t)=>setSwitchEnv4(t)} />
                </View>
                       
              </View>
              }



              { env4 && 
              <View>
              <View style={styles.viewQualiEnv}>
                <TextSubtitulo>Qualificação do Envolvido 4</TextSubtitulo>
            </View>

           

               

                


                <View style={{marginLeft:30,marginTop:15}}>
                
                <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='RG' placeholderTextColor ='#666360' keyboardType='number-pad' value={identidadeEnv4} onChangeText={(t) => setIdentidadeEnv4(t)}/>
                 <InputsInteiro source = {require('../../../assets/rgicon.png')} placeholder ='CPF' placeholderTextColor ='#666360' keyboardType='number-pad' value={cpfEnv4} onChangeText={(t) => mascaraCpfEnv4(t)}/>
                  <InputsInteiro source = {require('../../../assets/phone.png')} placeholder ='Telefone' placeholderTextColor ='#666360' keyboardType='number-pad' value={telefoneEnv4} onChangeText={(t) => mascaraTelefoneEnv4(t)}/>
                </View>

           

            <View style = {styles.viewInputsMeio} >
                <InputsInteiro  source = {require('../../../assets/user.png')} placeholder ='Nome Completo' placeholderTextColor ='#666360' autoCapitalize='characters' value={nomeEnv4} onChangeText={(t)=>setNomeEnv4(t)} />
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Mãe' placeholderTextColor ='#666360' value={maeEnv4} onChangeText={(t) => setMaeEnv4(t)}/>
                    <BtnFixa onPress={semRegistroMae2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                </View>
                
                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <InputMaePai  source = {require('../../../assets/user.png')} placeholder ='Pai' placeholderTextColor ='#666360' value={paiEnv4} onChangeText={(t) => setPaiEnv4(t)}/>
                    <BtnFixa onPress={semRegistroPai2}>
                        <Image  source = {require('../../../assets/Btnfixa.png')}/>
                    </BtnFixa>
                 </View>

            </View>
            
            <View style = {styles.viewNascimento}>

                <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Nascimento' placeholderTextColor ='#666360' keyboardType='number-pad' value={nascimentoEnv4} onChangeText={(t) => mascaraNascimentoEnv4(t)} />

                <Picker
                mode="dropdown"
                selectedValue={generoEnv4}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGeneroEnv4(itemValue)}
                >
                <Picker.Item label="Gênero" value="Gênero" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Feminino" value="Feminino" />
                </Picker>
                
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nacionalidade' placeholderTextColor ='#666360' value={nacionalidadeEnv4} onChangeText={(t) => setNacionalidadeEnv4(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Naturalidade' placeholderTextColor ='#666360' value={naturalidadeEnv4} onChangeText={(t) => setNaturalidadeEnv4(t)} />
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Idade Aparente' placeholderTextColor ='#666360' value={idadeAparenteEnv4} onChangeText={(t) => setIdadeAparenteEnv4(t)} />
                       
                       <Picker
                mode="dropdown"
                selectedValue={estadoCivilEnv4}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setEstadoCivilEnv4(itemValue)}
                >
                <Picker.Item label="Estado Civil" value="Estado Civil" />
                <Picker.Item label="Solteiro(a)" value="Solteiro(a)" />
                <Picker.Item label="Casado(a)" value="Casado(a)" />
                <Picker.Item label="Divorciado(a)" value="Divorciado(a)" />
                </Picker>
                       </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cútis' placeholderTextColor ='#666360' value={cutisEnv4} onChangeText={(t) => setCutisEnv4(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Ocupação Atual' placeholderTextColor ='#666360' value={ocupaçãoAtualEnv4} onChangeText={(t) => setOcupaçãoAtualEnv4(t)} />
            </View>

            <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Orgão Expedidor' placeholderTextColor ='#666360' value={orgãoExpedidorEnv4} onChangeText={(t) => setOrgãoEpedidorEnv4(t)} />
               
               <Picker
                mode="dropdown"
                selectedValue={grauEscoarEnv4}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setGrauEscolarEnv4(itemValue)}
                >
                <Picker.Item label="Grau de Escolaridade" value="Grau de Escolaridade" />
                <Picker.Item label="Fundamental Incompleto" value="Fundamental Incompleto" />
                <Picker.Item label="Fundamental Completo" value="Fundamental Completo" />
                <Picker.Item label="Médio Incompleto" value="Médio Incompleto" />
                <Picker.Item label="Médio Completo" value="Médio Completo" />
                <Picker.Item label="Superior Incompleto" value="Superior Incompleto" />
                <Picker.Item label="Superior Completo" value="Superior Completo" />
                </Picker>
                          </View>

                   <View style = {styles.viewCidadeBairro}>
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='UF Nascimento' placeholderTextColor ='#666360' value={ufEnvolvidoEnv4} onChangeText={(t) => setUfEnvolvidoEnv4(t)} />
                     
                     <Picker
                mode="dropdown"
                selectedValue={tipoDeEnvolvimentoEnv4}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoDeEnvolvimentoEnv4(itemValue)}
                >
                <Picker.Item label="Tipo de Envolvimento" value="Tipo de Envolvimento" />
                <Picker.Item label="Autor" value="Autor" />
                <Picker.Item label="Vítima" value="Vítima" />
                <Picker.Item label="Testemunha" value="Testemunha" />
                </Picker>
                      </View>

                   
            

                   


            <>
                <TextEndereço>Endereço do Envolvido 4</TextEndereço>

            </>

            <View style= {styles.viewEstado}>


                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='CEP' maxLength={8} placeholderTextColor ='#666360' onEndEditing={()=>buscarCepenv4(cepEnv4)} keyboardType='number-pad' value={cepEnv4} onChangeText={(t) => setCepEnv4(t)} />
                <Picker
                mode="dropdown"
                selectedValue={estadoEnv4}
                style={{ height: 50, width: 150,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:50,color:'#fff' }}
                onValueChange={(itemValue, itemIndex) => setEstadoEnv4(itemValue)}
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
                <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cidade' placeholderTextColor ='#666360' value={cidadeEnv4} onChangeText={(t) => setCidadeEnv4(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Bairro' placeholderTextColor ='#666360' value={bairroEnv4} onChangeText={(t) => setBairroEnv4(t)} />
            </View>

            <View style = {styles.viewLogradoro}>
             <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Logradouro' placeholderTextColor ='#666360' value={logradouroEnv4} onChangeText={(t) => setLogradouroEnv4(t)} />
                <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Número' placeholderTextColor ='#666360' value={numeroCasaEnv4} onChangeText={(t) => setNumeroCasaEnv4(t)} />

            </View>

            <View style = {{marginLeft:30}} >
            <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Complemento' placeholderTextColor ='#666360' value={complementoEnv4} onChangeText={(t) => setComplementoEnv4(t)}/>
            </View>

             <View style = {styles.viewCidadeBairro}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='País' placeholderTextColor ='#666360' value={paisMoradiaEnv4} onChangeText={(t) => setpaisMoradiaEnv4(t)} />
                        
                       
                       </View>

                       
                       
              </View>
              }


                <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:30,marginTop:15}}>
                        <View style={{marginRight:15}}>
                            <TextEnvolvido2>Agente Participante</TextEnvolvido2>
                        </View>
                     <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchAgenteParticipante1} onValueChange={(t)=>setSwitchAgenteParticipante1(t)} />
                </View>


                {AgenteParticipante1 &&
                <View>

                    <View style = {{marginLeft:30,marginTop:15}} >
                        <InputsInteiro source = {require('../../../assets/search.png')} placeholder ='Pesquisar Nome' placeholderTextColor ='#666360' onEndEditing={handleClickSearch} value={searchAgente1} onChangeText={(t) => setSearchAgente1(t)}/>
                    </View>

                    <View style = {styles.viewLogradoro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nome' placeholderTextColor ='#666360' value={nomeAgente1}  />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Siape' placeholderTextColor ='#666360' value={siapeAgente1} onChangeText={(t) => setSiapeAgente1(t)} />
                    </View>

                    <View style = {styles.viewLogradoro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cargo' placeholderTextColor ='#666360' value={cargoAgente1} onChangeText={(t) => setCargoAgente1(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Matrícula' placeholderTextColor ='#666360' value={matriculaAgente1} onChangeText={(t) => setMatriculaAgente1(t)} />
                    </View>

                    <Picker
                mode="dropdown"
                selectedValue={tipoEnvolvimentoAgente1}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:30,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoEnvolvimentoAgente1(itemValue)}
                >
                <Picker.Item label="Agente Integrante" value="Agente Integrante" />
                <Picker.Item label="Responsável pela Apreensão/Prisão/Condução" value="Responsável pela Apreensão/Prisão/Condução" />
                </Picker>

                <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:30,marginTop:15}}>
                        <View style={{marginRight:15}}>
                            <TextEnvolvido2>Agente Participante 2</TextEnvolvido2>
                        </View>
                     <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchAgenteParticipante2} onValueChange={(t)=>setSwitchAgenteParticipante2(t)} />
                </View>

                </View>
                }

                {AgenteParticipante2 &&
                <View>

                    <View style = {{marginLeft:30,marginTop:15}} >
                        <InputsInteiro source = {require('../../../assets/search.png')} placeholder ='Pesquisar Nome' placeholderTextColor ='#666360' onEndEditing={handleClickSearchAgente2} value={searchAgente2} onChangeText={(t) => setSearchAgente2(t)}/>
                    </View>

                    <View style = {styles.viewLogradoro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Nome' placeholderTextColor ='#666360' value={nomeAgente2}  />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Siape' placeholderTextColor ='#666360' value={siapeAgente2} onChangeText={(t) => setSiapeAgente2(t)} />
                    </View>

                    <View style = {styles.viewLogradoro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Cargo' placeholderTextColor ='#666360' value={cargoAgente2} onChangeText={(t) => setCargoAgente2(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Matrícula' placeholderTextColor ='#666360' value={matriculaAgente2} onChangeText={(t) => setMatriculaAgente2(t)} />
                    </View>

                    <Picker
                mode="dropdown"
                selectedValue={tipoEnvolvimentoAgente2}
                style={{ height: 50, width: 350,backgroundColor: '#2E2E2E',borderRadius:10,marginLeft:30,color:'#fff'}}
                onValueChange={(itemValue, itemIndex) => setTipoEnvolvimentoAgente2(itemValue)}
                >
                <Picker.Item label="Agente Integrante" value="Agente Integrante" />
                <Picker.Item label="Responsável pela Apreensão/Prisão/Condução" value="Responsável pela Apreensão/Prisão/Condução" />
                </Picker>

                

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
                        <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Data do Fato' keyboardType='number-pad' placeholderTextColor ='#666360' value={dataDoFato} onChangeText={(t) => mascaraDataFato(t)} />
                        <InputMenorAinda source = {require('../../../assets/calendar.png')} placeholder ='Hora do Fato' keyboardType='number-pad' placeholderTextColor ='#666360' value={horarioDoFato} onChangeText={(t) => mascaraHoraDoFato(t)} />
                
                 </View>

                  <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/calendar.png')} placeholder ='Data Final' keyboardType='number-pad'  placeholderTextColor ='#666360'  value={dataFinal} onChangeText={(t) => mascaraDataFinal(t)} />
                        <InputMenorAinda source = {require('../../../assets/calendar.png')} placeholder ='Hora Final' keyboardType='number-pad' placeholderTextColor ='#666360'  value={horarioFinal} onChangeText={(t) => mascaraHoraFinal(t)} />
                
                 </View>

                 
                
                        <TextInput style={styles.inputObjRec} color ='#fff' placeholder='                             Objetos Recolhidos' placeholderTextColor='#666360' multiline={true} textAlignVertical='top' value={objetosRecolhidos} onChangeText={(t) => setObjetosRecolhidos(t)} />
                       
                      

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

                <View style={{marginLeft:15}}>
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

                  <View style = {{ marginLeft:30,flexDirection:'row',marginTop:15,justifyContent:'space-between',marginRight:5}}>
                  
                  <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >TIPO DO PAPEL</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchTipoDoPapel} onValueChange={(t)=>setSwitchTipoDoPapel(t)} />
                 </View>

                 <View style={{flexDirection:'row',}}>
                  <View style={{marginRight:10,marginTop:3}}>
                        <Text style={{color:'#fff',fontSize:12,}} >JANELA TRANSPARENTE</Text>
                  </View>
                         <Switch thumbColor='#FF9000' trackColor={{true: '#FF9000', false: '#2E2E2E'}} value={switchJanelaTransparente} onValueChange={(t)=>setSwitchJaneaTransparete(t)} />
                 </View>
                 
                 </View>
                        
                
                
                
                <View style = {{marginTop:15,marginLeft:30}}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Moeda' placeholderTextColor ='#666360' value={moeda} onChangeText={(t) => setMoeda(t)} />
                 </View>  

                 <View style = {{marginLeft:30}}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Outras características' placeholderTextColor ='#666360' value={outrasCaracteristicas} onChangeText={(t) => setOutrasCaracteristicas(t)} />
                 </View>  
                
                <View style = {{marginLeft:30}}>
                <InputsInteiro source = {require('../../../assets/map-pin.png')} placeholder ='Origem da cédula' placeholderTextColor ='#666360' value={origemCedula} onChangeText={(t) => setOrigemCedula(t)} />
                 </View>



                  <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Estado de animo' placeholderTextColor ='#666360' value={estadoAnimo} onChangeText={(t) => setEstadoAnimo(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Tentou evadir' placeholderTextColor ='#666360' value={tentouEvadir} onChangeText={(t) => setTentouEvadir(t)} />
                
                 </View>      

                 <View style = {styles.viewCidadeBairro}>
                        <InputMenor source = {require('../../../assets/map-pin.png')} placeholder ='Possuía outras cédulas válidas' placeholderTextColor ='#666360' value={possuiaOutrasCedulas} onChangeText={(t) => setPossuiaOutrascCeduas(t)} />
                        <InputMenorAinda source = {require('../../../assets/map-pin.png')} placeholder ='Pagou após o fato' placeholderTextColor ='#666360' value={pagouApos} onChangeText={(t) => setPagouApos(t)} />
                
                 </View>    
                       
                      

                 </View>

                  
                 }

                 


             

             <TextInput style={styles.inputHist} color ='#fff' placeholder='                         Histórico da ocorrência' placeholderTextColor='#666360' multiline={true} textAlignVertical='top' value={historico} onChangeText={(t) => setHistorico(t)} />  
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
    inputObjRec:{
        width:350,
        height:150,
        backgroundColor:'#2e2e2e',
        borderRadius:10,
        paddingLeft:10,
        marginLeft:30,
        marginBottom:15,
        padding:10
        
    },
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
