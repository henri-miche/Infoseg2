import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import firebase from '../connection/FirebaseConection';

export default ({data}) => {

    const nome = data.Nome;
    const cpf = data.CPF;
    const key = data.key;
    const chaveFoto = data.ChaveFoto;
    const dataa = data.dataa;
    const hora = data.hora;
    const identidade = data.identidade;
    const nascimento = data.nascimento;
    const tipoRo = data.tipoRo;
    const local = data.local;
    const mae = data.mae;
    const pai = data.pai;
    const telefone = data.telefone;
    const genero = data.genero;
    const historico = data.historico;
    const cosop = data.cosop;
    const endereço = data.endereço;
    const [avatar2,setAvatar2] = useState(null);  

    const buscarFotos = () => {
        const storage = firebase.storage();
        const starsRef = storage.ref('Rdm/').child(key);
    
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


        return (
            <View style={styles.iconFlat}>
           
                <View style={{flex:1,justifyContent:'center',flexDirection:'row',marginTop:5}}>
                    <Image source={avatar2} style={styles.itemAvatar} />
                </View>
                <View style={{flexDirection:'row',marginTop:5,padding:10,height:200,paddingLeft:40}}>
                    
                    <View style={{flex:1,justifyContent:'space-between'}}> 
                        <Text style={styles.text}> Nome: {nome} </Text>
                        <Text style={styles.text}> Mae: {mae}</Text>
                        <Text style={styles.text}> Pai: {pai}</Text>
                        <Text style={styles.text}> Endereço: {endereço}</Text>
                        <Text style={styles.text}> Cosop: {cosop}</Text>
                        <Text style={styles.text}> Data: {dataa}</Text>   
                        <Text style={styles.text}> Hora: {hora}</Text>   
                    </View>
                    
                    <View style={{flex:1,justifyContent:'space-between'}}>
                        <Text style={styles.text}> CPF: {cpf}</Text>
                        <Text style={styles.text}> Identidade: {identidade}</Text>
                        <Text style={styles.text}> Nascimento: {nascimento}</Text>
                        <Text style={styles.text}> Telefone: {telefone}</Text>
                        <Text style={styles.text}> Genero: {genero}</Text>
                        <Text style={styles.text}> Local: {local}</Text>
                        <Text style={styles.text}> RO: {tipoRo}</Text>
                    </View>
                </View>
                        <View style={{margin:10}}>
                            <Text style={styles.text}> Historico: {historico}</Text>
                        </View>
            </View>
        );
    

}

const styles = StyleSheet.create({
    itemArea: {
        height: 100,
        flex: 1,
        flexDirection: 'row'
    },
    itemAvatar: {
        width: 150,
        height: 150,
        marginLeft:3
        
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
        
        
        flex:1,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor:'#000',
        margin: 5,

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