import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
   width: 315px;
    height: 50px;
    background: #2E2E2E;
    flex-direction: row;
    border-radius: 10px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-top:15px;
`;

 const Input = styled.TextInput`
    flex: 1;
    width: 29px;
    height: 50px;


/* Darkest */

    background:  #2E2E2E;
    border-radius: 10px;
    /*margin-left: 10px;*/
    align-items: center;
    text-align:left;
    padding:10px;
`;   

export const ImagemEmail = styled.Image`
width:20px;
height:18px;
margin-left:16px;
`;

export default ({placeholder, value, onChangeText, password,placeholderTextColor,color}) => {
    return(
        <InputArea>
            <ImagemEmail source = {require('../../assets/Senha.png')}/>
            <Input 
                color={color}
                placeholderTextColor={placeholderTextColor}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}