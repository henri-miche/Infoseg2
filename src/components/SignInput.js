import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #D3D3D3;
    flex-direction: row;
    border-radius: 30px;
    /*padding-left: 15px;*/
    align-items: center;
    margin-bottom: 15px;
`;

 const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #000;
    /*margin-left: 10px;*/
    align-items: center;
    text-align:center;
`;   

export default ({placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}