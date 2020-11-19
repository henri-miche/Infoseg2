import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    background-color:#000;
   
`;

export const ViewTitullo = styled.View`
    
    flex-direction:row;
    margin-top:30px;
    justify-content:space-between;

`

export const TextTitulo= styled.Text`
    width: 219px;
    height: 26px;
    margin-left:30px;

    font-family: RobotoSlab;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

/* Orange */

color: #FF9000;
    
`

export const TouchSair = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-right:50px;
`

export const TextSubtitulo= styled.Text`
        width: 246px;
        height: 26px;
        font-family: RobotoSlab;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;

        /* White */

        color: #F4EDE8;
    
`
export const ImageSpace = styled.TouchableOpacity`
    width: 133.85px;
    height: 180px;
    justify-content:center;
    align-items:center;

/* Darkest */

    background: #2E2E2E;
    border-radius: 5px;
`
export const BtnFixa = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    justify-content:center;
    align-items:center;
    margin-right:15px;
    margin-bottom:15px;
/* Darkest */

   
`
export const TextEndereço= styled.Text`
        width: 217px;
        height: 26px;
        font-family: RobotoSlab;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        margin-top:15px;
        margin-left:30px;
        margin-bottom:25px;
        /* White */

        color: #F4EDE8;
    
`
export const TextInformações= styled.Text`
        width: 257px;
        height: 26px;
        font-family: RobotoSlab;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        margin-left:30px;
        margin-top:15px;

        /* White */

        color: #F4EDE8;
    
`
export const BtnCadastrarOcorrencia = styled.TouchableOpacity` 
width: 350px;
height: 50px;
background: #FF9000;
border-radius: 10px;  
justify-content:center;
    align-items:center;
    margin-left:30px;
    margin-top:30px;
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

export const ModalText = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    width:75px;
    height:75px;
    background-color:#000;
`

export const ModalTextText= styled.Text`
       
        font-family: RobotoSlab;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        

        /* White */

        color:#FF9000;
    
`
export const LoadingArea = styled.View`
       
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color: rgba(0,0,0,0.6);
        align-items:center;
        justify-content:flex-end;
        margin-bottom:100px;
    
`


