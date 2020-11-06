import React,{useState,useEffect} from 'react';
import {SafeAreaView,FlatList, StyleSheet, RefreshControl,Image, Text} from 'react-native';
import {Container,
TextoBoasVindas,
TouchExit,
SubTitulo,
GerarRo,
TextoGerarRo,
GerarRau,
GerarRrm,
GerarBo,
OcorrenciasText,
FiltrosText,
FiltroRo,
RoText,
FiltroRau,
RauText,
FiltroRrm,
RrmText,
FiltroBo,
BoText,
ViewResumo,
ViewProx,
AnteriorBtn,
ProxBtn,
BtnTodasOcorrencias,

} from './styles';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../connection/FirebaseConection';
import DownFotos2 from '../../components/DownFotos2';

export default () => {

    const [listFire, setListFire] = useState(null);
    const navigation = useNavigation();
    const [isRefresh, setIsRefresh] = useState(false);
    const [searchTexto, setSearchTexto] = useState('');
    const [FirebaseUser, setFirebaseUser] = useState([]);
    const [nome, setNome] = useState('');


    const handleClick = () =>  {
        navigation.navigate('HomeRoCadastro');
    };
    const Logout  = () => {
        firebase.auth().signOut();
    }
   
    const pushUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref('usuarios').child(user.uid)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    setNome(nome);

                  


                });
        }}


    
    
const pushDados = () =>{
     try {
      firebase.database().ref('/Ro').once('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            CPF: childItem.val().CPF,
            Nome: childItem.val().Nome,
            ChaveFoto: childItem.val().ChaveFoto,
            endereço: childItem.val().Endereço,
            dataa: childItem.val().Data,
            hora: childItem.val().Hora,
            identidade: childItem.val().Identidade,
            nascimento: childItem.val().Nascimento,
            tipoRo: childItem.val().TipoRo,
            local: childItem.val().Local,
            mae: childItem.val().Mae,
            pai: childItem.val().Pai,
            telefone: childItem.val().Telefone,
            genero: childItem.val().Genero,
            historico: childItem.val().Historico,
            cosop: childItem.val().Cosop,
          });
        });
        setListFire(list.reverse());
        
      })

    } catch (error) {
      alert(error);
    }
}
    
    useEffect(()=>{
        pushUser();
    },)
   
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
      setSearchTexto('');
   }
  }, [])

     function handleClickSearch () {
        navigation.navigate('HomeRoSearch',{searchTexto:searchTexto});
        setSearchTexto('');
    };



    return(
        <Container >
                <TextoBoasVindas>Olá, {nome}!</TextoBoasVindas>
                
                <TouchExit onPress={Logout}>
                <Image source = {require('../../../assets/Sair.png')} />
                </TouchExit>

                <SubTitulo>Como o InfoSeg vai te ajudar hoje?</SubTitulo>
                
                <GerarRo>
                    <Image source = {require('../../../assets/file-plus.png')} style={{width:24,height:24,}}/>
                    <TextoGerarRo>Gerar RO</TextoGerarRo>
                </GerarRo>
                
                <GerarRau>
                    <Image source = {require('../../../assets/file-plus.png')} style={{width:24,height:24,}}/>
                    <TextoGerarRo>Gerar RAU</TextoGerarRo>
                </GerarRau>

                <GerarRrm>
                    <Image source = {require('../../../assets/file-plus.png')} style={{width:24,height:24,}}/>
                    <TextoGerarRo>Gerar RRM</TextoGerarRo>
                </GerarRrm>

                <GerarBo>
                    <Image source = {require('../../../assets/file-plus.png')} style={{width:24,height:24,}}/>
                    <TextoGerarRo>Gerar BO</TextoGerarRo>
                </GerarBo>

                <OcorrenciasText>Ocorrências Recentes</OcorrenciasText>

                <FiltrosText>Filtros</FiltrosText>

                <FiltroRo>
                    <RoText>RO</RoText>
                </FiltroRo>

                <FiltroRau>
                    <RauText>RAU</RauText>
                </FiltroRau>

                <FiltroRrm>
                    <RrmText>RRM</RrmText>
                </FiltroRrm>

                <FiltroBo>
                    <BoText>BO</BoText>
                </FiltroBo>

                <ViewResumo>
                  <SafeAreaView style={{ flex:1,backgroundColor:'#000'}}>
                    <FlatList style={styles.viewFlat} 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>
                </ViewResumo>

                <ViewProx>
                        <AnteriorBtn>
                         <Image source = {require('../../../assets/setaproxesquerda.png')} style={{marginRight:7}} />
                            <Text style = {styles.textProxAnter}>Anterior</Text>

                        </AnteriorBtn>

                        <ProxBtn>
                            <Text style = {styles.textProxAnter}>Pròximo</Text>
                            <Image source = {require('../../../assets/setaproxdireita.png')} style={{marginLeft:7}} />
                        </ProxBtn>
                </ViewProx>        
                
                <BtnTodasOcorrencias>
                    <Text style= {styles.textVerTodasOcorr}>Ver Todas as Ocorrências</Text>
                </BtnTodasOcorrencias>
                

        

        </Container>
    );
}

const styles = StyleSheet.create({
    textVerTodasOcorr:{
width: 194,
height: 21,

fontWeight: 'bold',
fontSize: 16,
lineHeight: 21,
/* Text */

color: '#F4EDE8',
    },
    textProxAnter:{   
width: 64,
height: 21,
fontSize: 16,
lineHeight: 21,
/* Orange */
color: '#FF9000',
    },
    itemArea:{
        height:100,
        flex:1,
        flexDirection:'row',
    },
    itemFoto:{
        width:150,
        height:150,
        margin:10,
    },
    itemInfo:{
        flex:1
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
    textInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    },
    btnEnviar: {
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconFlat: {
        flexDirection: 'row',
        width: 350,
        height: 50,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    btnEnviar: {
        borderWidth: 1,
        borderColor: 'red',
        width: 50,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    },
    viewFlat: {
        
    }
})
/*<SafeAreaView style={{ backgroundColor: '#1C1C1C', flex: 1 ,marginTop:1}}>
               <SearchCadastrar  autoCapitalize={'characters'} onEndEditing={handleClickSearch} value={searchTexto} onChangeText={(t) => setSearchTexto(t)} onPress={handleClick} />
                
                <SafeAreaView style={{ flex:1,backgroundColor:'#000'}}>
                    <FlatList style={styles.viewFlat} 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>

            </SafeAreaView>*/