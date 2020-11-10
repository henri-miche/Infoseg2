import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 165px;
    height: 50px;
    background: #2E2E2E;
    flex-direction: row;
    border-radius: 10px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-bottom:15px;
`;

 const Input = styled.TextInput`
    
    width: 165px;
    height: 50px;
    background: #2E2E2E;
    border-radius: 10px; 
    padding-left:10px;
    color:#fff;
`;   

export const ImagemEmail = styled.Image`
width:20px;
height:18px;
margin-left:16px;
`;

export default ({placeholder,source,styled, value, onChangeText, password,placeholderTextColor,color}) => {
    return(
        <InputArea>
            <ImagemEmail source = {source}/>
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