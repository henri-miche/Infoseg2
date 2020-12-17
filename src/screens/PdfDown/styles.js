import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color:#000;
`;

export const BtnCadastrarOcorrencia = styled.TouchableOpacity` 
width: 350px;
height: 50px;
background: #FF9000;
border-radius: 10px;  
justify-content:center;
    align-items:center;
   
`

export const TextBtnOcorrencia= styled.Text`      
width: 162px;
height: 21px;
font-family: RobotoSlab;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

/* Text */

color: #F4EDE8;
    
`
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30px;
`;

export const LoadingArea = styled.View`
       
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,0.6);
        align-items:center;
        justify-content:center;
        
    
`