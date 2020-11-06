import React,{useState,useEffect} from 'react';
import { SafeAreaView,FlatList,RefreshControl,Text } from 'react-native';
import { Container } from './styles';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from '../../connection/FirebaseConection';
import DownFotos2 from '../../components/DownFotos2';


export default () => {

    const route = useRoute();
    const navigation = useNavigation();
    const [key, setKey] = useState(route.params.key);
    const [listFire, setListFire] = useState(null);
    const [isRefresh, setIsRefresh] = useState(false);
    const [nome, setNome] = useState();
    const [identidade, setIdentidade] = useState();

    const pushDados = () =>{
     try {
     firebase.database().ref('/Ro').child(key)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().Nome;
                    setNome(nome);
                    const identidade = snapshot.val().Identidade;
                    setIdentidade(identidade);

                  


                });

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

    const handleClick = () => {
        navigation.navigate('HomeBoCadastro');
    };

    return (
        <Container >

           
        <Text>Nome: {nome} Identidade: {identidade}</Text>

        </Container>
    );
}
  /*<SafeAreaView style={{ flex:1,backgroundColor:'#000'}}>
                    <FlatList 
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>*/
