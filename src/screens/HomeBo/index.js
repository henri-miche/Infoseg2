import React,{useState,useEffect} from 'react';
import { Image,StyleSheet,View,Text } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import DownFotos2 from '../../components/DownFotos2';
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

} from './styles';

export default () => {

        const route = useRoute();
        const navigation = useNavigation();
        const [key, setKey] = useState(route.params.key);
        const [listFire, setListFire] = useState(null);
        const [isRefresh, setIsRefresh] = useState(false);
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
     firebase.database().ref('/Ro').child(key)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().Nome;
                    const identidade = snapshot.val().Identidade;
                    const cpf = snapshot.val().CPF;
                    const chaveFoto = snapshot.val().ChaveFoto;
                    const dataa = snapshot.val().Data;
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
          buscarFotos();
      }
   }, 1000);
   return ()=>{
      isUnmount = true;
      setAvatar2(null);
   }
  }, [])

useEffect(() => {
      let isUnmount = false;

      setTimeout(() => {
          
      
      if (!isUnmount) {
          pushDados();
      }
   }, 1000);
   return ()=>{
      isUnmount = true;
      setListFire([]);
      
   }
  }, [])

    const handleClick = () => {
        navigation.navigate('HomeBoCadastro');
    };

    return (
        <Container >

           <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair>
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

            <View style={{marginTop:10,marginLeft:30}}>
                <TextLabelcamposmae>Mãe:<TextCamposmae>{mae}</TextCamposmae></TextLabelcamposmae>
            </View>

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
  /*<SafeAreaView style={{ flex:1,backgroundColor:'#000'}}>
                    <FlatList 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>*/
