import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Image, Text, View} from 'react-native';
import firebase from '../connection/FirebaseConection';


const TabArea = styled.View`
    height: 70px;
    background-color: #000;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const BtnLogout = styled.TouchableOpacity`

`;





export default ({state, navigation}) => {


    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

     

    const Logout  = () => {
        firebase.auth().signOut();
    }

    const pushUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref('usuarios').child(user.uid)
                .once('value').then((snapshot) => {
                    const nome = snapshot.val().nome;
                    

                    navigation.setOptions({
                        headerRight: () => 
                        <View style={{marginTop:70,marginRight:5}}>
                             <BtnLogout>
                                    <Text onPress={Logout} style={{ color: '#fff', fontSize: 18 }}>Sair</Text>
                                </BtnLogout>
                        </View>,
                        headerLeft: () => 
                            <View style={{ flexDirection: 'column',marginTop:70,marginLeft:5}}> 
                                <Text style={{ color: '#fff', fontSize: 18 }}>{nome}</Text>
                            </View>
                        
                    });


                });
        }}

    
       useEffect(() => {
      let isUnmount = false;

      setTimeout(() => {
          
      
      if (!isUnmount) {
          pushUser();
      }
   }, 3000);
   return ()=>{
      isUnmount = true;
   }
  }, [])
   
            
            
     
    

    return(
        <>
        
        
        <TabArea>
            <TabItem onPress= { ()=>goTo('HomeRoStack')} >
                <Image source={require('../../assets/docAmarelo.png')}
                    style={{ width: 30, height: 30, opacity: state.index === 0 ? 1 : 0.5}} 
                />
                <Text style={{color:'#fff',fontSize: 18}}>RO</Text>
           </TabItem>

                <TabItem onPress={() => goTo('HomeRauStack')}>
                <Image source={require('../../assets/docVerde.png')}
                    style={{ width: 30, height: 30,opacity: state.index === 1 ? 1 : 0.5 }}

                />
                    <Text style={{ color: '#fff', fontSize: 18 }}>RAU</Text>
            </TabItem>

                <TabItem onPress={() => goTo('HomeRdmStack')}>
                <Image source={require('../../assets/docAzul.png')}
                    style={{ width: 30, height: 30, opacity: state.index === 2 ? 1 : 0.5 }}
                />
                    <Text style={{ color: '#fff', fontSize: 18 }}>RDM</Text>
            </TabItem> 

            <TabItem onPress={() => goTo('HomeBoStack')}>
                <Image source={require('../../assets/docLaranja.png')}
                    style={{ width: 30, height: 30, opacity: state.index === 3 ? 1 : 0.5 }}
                />
                    <Text style={{ color: '#fff', fontSize: 18 }}>BO</Text>
            </TabItem>

        </TabArea>
    
        </>
    );

}