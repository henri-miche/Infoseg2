import { Container } from './styles';
import SearchCadastrar from "../../components/SearchCadastrar";
import {useNavigation, useRoute} from '@react-navigation/native'
import React,{useState,useEffect} from 'react';
import {SafeAreaView,Text,FlatList, View, StyleSheet, RefreshControl} from 'react-native';
import firebase from '../../connection/FirebaseConection';
import DownImagesRdm from '../../components/DownImagesRdm';

export default () => {
   
    const navigation = useNavigation();
    const route = useRoute();
    const [searchTexto, setSearchTexto] = useState(route.params.searchTexto);
    const [listFire, setListFire] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);
    
    const handleClick = () => {
        navigation.navigate('HomeRdmCadastro');
    };

    const pushDados = () =>{
     try {
      firebase.database().ref('/Rdm').orderByChild('Nome').equalTo(searchTexto)
      .once('value', (snapshot) => {
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
        setListFire(list);
        
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
      setSearchTexto('');
   }
  }, [])

  const handleClickSearch = () =>{
      pushDados();
      
  }

    return (
        <Container >
                
            <SafeAreaView style={{ backgroundColor: '#1C1C1C', flex: 1 ,marginTop:1}}>
               
               <SearchCadastrar  value={searchTexto} 
               autoCapitalize='characters' 
               onEndEditing={handleClickSearch} 
               onChangeText={(t) => setSearchTexto(t)} 
               onPress={handleClick}  />
                
                <SafeAreaView style={{ flex:1,backgroundColor:'#000'}}>
                    <FlatList style={styles.viewFlat} 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownImagesRdm data={item}/>
                           
                            

                        } />
                </SafeAreaView>

            </SafeAreaView>

            

        </Container>
    );
}

const styles = StyleSheet.create({
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
