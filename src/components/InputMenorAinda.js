import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`
    width: 118px;
    height: 50px;
    background: #2E2E2E;
    flex-direction: row;
    border-radius: 10px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-bottom:15px;
    margin-left:50px;
    
`;

 const Input = styled.TextInput`
    
    width: 118px;
    height: 50px;
    background: #2E2E2E;
    border-radius: 10px; 
    padding-left:10px;
    color:#fff;
    
`;   

export const ImagemEmail = styled.Image`
width:16px;
height:16px;
margin-left:16px;
`;

export default ({placeholder,source,styled,keyboardType, value, onChangeText, password,placeholderTextColor,color}) => {
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
                keyboardType = {keyboardType}
            />
        </InputArea>
    );
}