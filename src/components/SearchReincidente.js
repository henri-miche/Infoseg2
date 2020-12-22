import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
   width: 350px;
    height: 50px;
    background: #2E2E2E;
    flex-direction: row;
    border-radius: 10px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-left:30px;
`;

 const Input = styled.TextInput`
    
    width: 230px;
    height: 50px;
    background: #2E2E2E;
    border-radius: 10px; 
    padding:10px;
    
    
`;   

export const ImagemEmail = styled.Image`
width:20px;
height:18px;
`;

export const Lupa = styled.TouchableOpacity`
width:20px;
height:18px;
margin-left:15px;
`;

export const Limpar = styled.TouchableOpacity`
width:20px;
height:18px;
margin-left:25px;
`;

export default ({placeholder,onEndEditing,onPress,onPress2, value,autoCapitalize, onChangeText, password,placeholderTextColor,color}) => {
    return(
        <InputArea>
            <Lupa onPress={onPress} >
            <ImagemEmail source = {require('../../assets/search.png')}/>
            </Lupa>
            <Input 
                color={color}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                autoCapitalize ={autoCapitalize}
                onEndEditing={onEndEditing}
            />
            <Limpar onPress={onPress2} >
            <ImagemEmail source = {require('../../assets/SetaSair.png')}/>
            </Limpar>

        </InputArea>
    );
}