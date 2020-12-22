import React,{useState,useEffect} from 'react';
import {SafeAreaView,FlatList, StyleSheet,View, RefreshControl,Image} from 'react-native';
import {Container,
TextoBoasVindas,
TouchExit,
SubTitulo,
GerarRo,
TextoGerarRo,
GerarRrm,
OcorrenciasText,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../connection/FirebaseConection';
import DownFotos2 from '../../components/DownFotos2';
import Search from '../../components/Search'


export default () => {

    const [listFire, setListFire] = useState(null);
    const navigation = useNavigation();
    const [isRefresh, setIsRefresh] = useState(false);
    const [searchTexto, setSearchTexto] = useState('');
    const [nome, setNome] = useState('');
    
    
    
   
    

    
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


    
    
const pushDados = async () =>{
    

   try {
      firebase.database().ref('/Ocorrencias').once('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            nome: childItem.val().nome,
            chaveFoto: childItem.val().chaveFoto,
            dataa: childItem.val().data,
            hora: childItem.val().hora,
            tipoRo: childItem.val().tipoRo,
            local: childItem.val().local,
            historico: childItem.val().historico,
            nomeAgenteRelator: childItem.val().nomeAgenteRelator,
            tipoOcorrencia1:childItem.val().tipoOcorrencia1, 
          });
        });
        setListFire(list.reverse());
        
      })

    } catch (error) {
      alert(error);
    }
        
}


    const pushDadosSearch = () =>{
     try {
      firebase.database().ref('/Ocorrencias').orderByChild('nome').startAt(searchTexto)
      .once('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            nome: childItem.val().nome,
            chaveFoto: childItem.val().chaveFoto,
            dataa: childItem.val().data,
            hora: childItem.val().hora,
            tipoRo: childItem.val().tipoRo,
            local: childItem.val().local,
            historico: childItem.val().historico,
            nomeAgenteRelator: childItem.val().nomeAgenteRelator,
            tipoOcorrencia1:childItem.val().tipoOcorrencia1, 
          });
        });
        setListFire(list);
        
      })

    } catch (error) {
      alert(error);
    }
}
    
  


    useEffect(()=>{
        pushUser();
    },)

    useEffect(()=>{
        if (searchTexto === '') {
            pushDados();
        }
       
    },[searchTexto])
   
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

     


    const cadastroRo = () =>  {
        navigation.navigate('HomeRoCadastro');
    };


     
       const handleClickSearch = () =>{
           if (searchTexto) {
               pushDadosSearch();
           }   
  }

   const handleClickSearchLimpar = () =>{
          setSearchTexto('');
  }

   const handleClickAreaAgente = () =>{
              navigation.navigate('AreaAgente');
  }




    return(
        <Container >
                <View style = {styles.ViewTitulo}>
                    <TextoBoasVindas>Olá, {nome}!</TextoBoasVindas>
            
                    <TouchExit onPress={Logout}>
                    <Image source = {require('../../../assets/Sair.png')} />
                    </TouchExit>
                </View>

                <View style = {styles.ViewSubTitulo}>
                <SubTitulo>Como o InfoSeg vai te ajudar hoje?</SubTitulo>
                </View>

                <View style = {styles.ViewRoRau} >
                    <GerarRo onPress = {cadastroRo}>
                        <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                        <Image source = {require('../../../assets/file-plus.png')} style={{width:30,height:30,marginLeft:60}}/>
                        </View>

                        <View style={{flex:2,justifyContent:'flex-start',alignItems:'flex-start'}}>
                        <TextoGerarRo>Gerar Ocorrência</TextoGerarRo>
                    </View>

                    </GerarRo>
                </View>
                
                <View style = {styles.ViewRrmBo}>
                <GerarRrm onPress={handleClickAreaAgente}>

                <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                    <Image source = {require('../../../assets/file-plus.png')} style={{width:30,height:30,marginLeft:60}}/>
                </View>

                    <View style={{flex:2,justifyContent:'flex-start',alignItems:'flex-start'}}>
                         <TextoGerarRo>Área do Agente</TextoGerarRo>
                    </View>
                   
                </GerarRrm>

               
                </View>

                <OcorrenciasText>Ocorrências Recentes</OcorrenciasText>
                
                 <Search color='#fff'
                 value={searchTexto} 
               
               onEndEditing={handleClickSearch} 
               onPress={handleClickSearch}
               onPress2={handleClickSearchLimpar}
               onChangeText={(t) => setSearchTexto(t)}
                     
                 />


                
                  

                <SafeAreaView style={{ flex:1,backgroundColor:'#000',marginLeft:30,marginTop:15}}>
                    <FlatList  
                    data={listFire}
                        
                        keyExtractor={(item) => item.key}
                         refreshControl={<RefreshControl refreshing={isRefresh} onRefresh={pushDados} />}
                        
                        renderItem={({ item }) =>
                           <DownFotos2 data={item}/>
                           
                            

                        } />
                </SafeAreaView>

                

                    
                
                
                

        

        </Container>
    );
}

const styles = StyleSheet.create({
    ViewRrmBo:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:10,
       marginLeft:30,
       paddingRight:30,
    },
    ViewRoRau:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:25,
       marginLeft:30,
       paddingRight:30,
    },
    ViewSubTitulo:{
        marginLeft:30,
        marginTop:5,
    },
    ViewTitulo:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginLeft:30,
        paddingRight:35,
    },
   
})
