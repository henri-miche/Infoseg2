import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
   width: 280px;
    height: 50px;
    background: #2E2E2E;
    flex-direction: row;
    border-radius: 10px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-left:30px;
`;

 const Input = styled.TextInput`
    
    width: 280px;
    height: 50px;
    background: #2E2E2E;
    border-radius: 10px; 
    padding-right:50px; 
    text-align:center;
`;   

export const ImagemEmail = styled.Image`
width:20px;
height:18px;
margin-left:16px;
`;

export default ({placeholder,onEndEditing, value,autoCapitalize, onChangeText, password,placeholderTextColor,color}) => {
    return(
        <InputArea>
            <ImagemEmail source = {require('../../assets/search.png')}/>
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
        </InputArea>
    );
}