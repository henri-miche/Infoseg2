import React, { useState,useEffect,memo } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import firebase from '../connection/FirebaseConection';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


function DownFotos2({data}) {

    const nome = data.nome; 
    const key = data.key;
    const dataa = data.dataa;
    const hora = data.hora;  
    const tipoRo = data.tipoRo;
    const local = data.local;
    const historico = data.historico;
    const nomeAgenteRelator = data.nomeAgenteRelator;
    const tipoOcorrencia1 = data.tipoOcorrencia1;
    const [avatar2,setAvatar2] = useState(null);  
    const navigation = useNavigation();

    const buscarFotos = () => {
        const storage = firebase.storage();
        const starsRef = storage.ref('/ocorrencias').child(key);
    
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

  const TextNome = styled.Text`
    width: 162px;
    height: 24px;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
font-family: RobotoSlab;
/* identical to box height */


/* Orange */

color: #FF9000;
`;



const TextLabel = styled.Text`

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
margin-left:15px;
font-family: RobotoSlab;
/* Orange */

color: #FF9000;
`;

const TextLabelP = styled.Text`

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
font-family: RobotoSlab;
/* Orange */

color: #FF9000;
`;

const TextPool = styled.Text`


font-weight: 500;
font-size: 14px;
line-height: 18px;
font-family: RobotoSlab;
/* Orange */

color: #F4EDE8;
`;


const BtnOcorrenciaFull = styled.TouchableOpacity`

width: 315px;
height: 50px;
alignItems:center;
justifyContent:center;
flexDirection:row;
border-bottom-left-radius:15px;
border-bottom-right-radius:15px;

/* Orange */

background: #FF9000;
`
const Flat = styled.View`


width: 315px;
height: 237px;
marginBottom:45px;

/* Darkest */

background: #2E2E2E;

border-radius: 10px;
`
const ViewHist = styled.View`
    margin-right:15px;
      margin-left:15px;
      margin-top:10px;
      height:54px;
      width:285px;
      

`
const Texthist = styled.Text`

font-family: RobotoSlab;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* Orange */

color: #F4EDE8;
`;


function handleClickVerCompleta () {
        navigation.navigate('DescricaoOcorrencia',{key:key,local:local});
        
    };
    


        return (

            
            <Flat>
            { avatar2 && <>

                <View style={styles.row} >
                <View style={styles.viewImage}>
                    <Image source={avatar2} style={styles.itemAvatar} />
                </View>

                <View style={{marginTop:15,marginLeft:14}}>
                <TextNome style={styles.textNome}>{nome}</TextNome>
                
                <View style={styles.viewRoLocal}>
                <TextLabelP numberOfLines={2} ellipsizeMode="tail">{tipoRo}:<TextPool>{tipoOcorrencia1}</TextPool></TextLabelP>
                <TextLabel>Local:<TextPool>{local}</TextPool> </TextLabel>
                </View>
                <TextLabelP>ASO:<TextPool>{nomeAgenteRelator}</TextPool></TextLabelP>
                </View>

                </View>

                <View style={styles.viewCalendario}>
                    <Image source = {require('../../assets/Calendário.png')} styles={{ width:14,height: 14,}}/>
                    <TextPool> {dataa}</TextPool>
                    <View style={{marginLeft:25,flexDirection:'row',alignItems:'center'}}>
                     <Image source = {require('../../assets/Horário.png')} styles={{ width:14,height: 14,}}/>
                      <TextPool> {hora}</TextPool>
                    </View> 
              </View>
              <ViewHist>
                  <TextLabelP  numberOfLines={3} ellipsizeMode="tail">Histórico:<Texthist>{historico}</Texthist></TextLabelP>
              </ViewHist>
              <BtnOcorrenciaFull onPress = { handleClickVerCompleta}>
                <Text style={styles.textBtnOcorr}>Ver Ocorrência Completa</Text>
                <Image source = {require('../../assets/setaocorrenciacompleta.png')} />
              </BtnOcorrenciaFull>
            </>}

            { !avatar2 && <>

                <View style={styles.row} >
               
                <View style={{marginTop:15,marginLeft:14}}>
                <TextNome style={styles.textNome}>{nome}</TextNome>
                
                <View style={styles.viewRoLocal}>
                <TextLabelP numberOfLines={2} ellipsizeMode="tail">{tipoRo}:<TextPool>{tipoOcorrencia1}</TextPool></TextLabelP>
                <TextLabel>Local:<TextPool>{local}</TextPool> </TextLabel>
                </View>
                <TextLabelP>ASO:<TextPool>{nomeAgenteRelator}</TextPool></TextLabelP>
                </View>

                </View>

                <View style={styles.viewCalendario}>
                    <Image source = {require('../../assets/Calendário.png')} styles={{ width:14,height: 14,}}/>
                    <TextPool> {dataa}</TextPool>
                    <View style={{marginLeft:25,flexDirection:'row',alignItems:'center'}}>
                     <Image source = {require('../../assets/Horário.png')} styles={{ width:14,height: 14,}}/>
                      <TextPool> {hora}</TextPool>
                    </View> 
              </View>
              <ViewHist>
                  <TextLabelP  numberOfLines={3} ellipsizeMode="tail">Histórico:<Texthist>{historico}</Texthist></TextLabelP>
              </ViewHist>
              <BtnOcorrenciaFull onPress = { handleClickVerCompleta}>
                <Text style={styles.textBtnOcorr}>Ver Ocorrência Completa</Text>
                <Image source = {require('../../assets/setaocorrenciacompleta.png')} />
              </BtnOcorrenciaFull>
            </>}
            </Flat>
            
        );
    

}

const styles = StyleSheet.create({
    textBtnOcorr:{
        width: 190,
        height: 21,
        fontFamily:'RobotoSlab',
    fontSize: 16,
    lineHeight: 21,

/* Text */

color: '#F4EDE8'
    },
   hist:{
     marginRight:15,
      marginLeft:15,
      marginTop:10,
      height:54,
      width:285,
      alignItems:'center',
      
    },
   
    viewCalendario:{
      flexDirection:'row',
      marginLeft:15,
      marginTop:12,
      alignItems:'center'
    },
  
    viewRoLocal:{
      flexDirection:'row',
      marginTop:10,
      marginBottom:10,
      width:100
    },
    row:{
        
        flexDirection: 'row'
    },
    viewImage:{
        
        marginTop:15,
        marginLeft:15,
    },
    itemArea: {
        height: 100,
        flex: 1,
        flexDirection: 'row'
    },
    itemAvatar: {
        width: 60,
        height: 100,
        borderRadius: 5,
        
    },
    itemInfo: {
        flex: 1,
        flexDirection: 'column'
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
        width: 315,
        height: 237,


/* Darkest */

backgroundColor: '#2E2E2E',

borderRadius: 10,


       
    },
    btnEnviar: {
        borderWidth: 1,
        borderColor: 'red',
        width: 50,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    },
    text: {
        color: '#fff',
        fontSize:12,
    }
});

export default memo(DownFotos2);
