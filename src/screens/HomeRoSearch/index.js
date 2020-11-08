import SearchCadastrar from "../../components/SearchCadastrar";
import {useNavigation, useRoute} from '@react-navigation/native'
import React,{useState,useEffect} from 'react';
import {SafeAreaView,Text,FlatList, View, StyleSheet, RefreshControl,Image} from 'react-native';
import firebase from '../../connection/FirebaseConection';
import DownFotos2 from '../../components/DownFotos2';
import Search from '../../components/Search'
import { Container,
ViewTitullo,
TouchSair,
TextTitulo,
TextSubtitulo,
FiltrosText,
FiltroRo,
RoText,
FiltroRau,
RauText,
FiltroRrm,
RrmText,
FiltroBo,
BoText,
ResultBuscaText,

} from './styles';
export default () => {
   
    const navigation = useNavigation();
    const route = useRoute();
    const [listFire, setListFire] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);
    
    const handleClick = () => {
        navigation.navigate('HomeRoCadastro');
    };

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


  const handleClickSearch = () =>{
      pushDados();
      
  }

  const sair = () => {
        navigation.goBack();
    };

    return (
        <Container >
                
            <SafeAreaView style={{ backgroundColor: '#000', flex: 1, }}>
                <ViewTitullo>
                
                <TextTitulo>Detalhes da Ocorrência</TextTitulo>
                
                <TouchSair onPress = {sair}>
                    <Image source = {require('../../../assets/SetaSair.png')} />
                </TouchSair>
            
            </ViewTitullo>

            <View>
                <TextSubtitulo>Veja todas as ocorrências já registradas!</TextSubtitulo>
            </View>

             <View style = {styles.viewFiltros}>
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
                </View>

                <Search color='#fff'/>

                <View>
                    <ResultBuscaText>Resultados da Busca</ResultBuscaText>
                </View>
               
                
                <SafeAreaView style={{ backgroundColor:'#000',marginLeft:30}}>
                    <FlatList style={styles.viewFlat} 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>

            </SafeAreaView>

            

        </Container>
    );
}

const styles = StyleSheet.create({
    viewFiltros:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:25,
       marginLeft:30,
       paddingRight:30,
       marginRight:59,
       marginBottom:15,
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
