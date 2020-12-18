import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color:#000;
`;

export const ViewTitullo = styled.View`
    
    flex-direction:row;
    margin-top:30px;
    justify-content:space-between;

`;

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
    
`;

export const TouchSair = styled.TouchableOpacity`
    width: 24px;
    height: 24px;
    margin-right:50px;
`;

export const ViewQualificaçao = styled.View`
   
   

`;

export const TextQuaificaçao= styled.Text`
    width: 246px;
    height: 26px;
    margin-top:25px;
    margin-left:30px;
    font-family: RobotoSlab;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

/* White */

color: #F4EDE8;

    
`;

export const TextNome = styled.Text`
width: 184px;
height: 48px;
margin-top:15px;

font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;

/* Orange */

color: #FF9000;

    
`;

export const TextLabel = styled.Text`



margin-top:5px;

font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;

/* Orange */

color: #FF9000;
`;

export const TextLabelText = styled.Text`




font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;

/* Text */

color: #F4EDE8;
`;

export const TextLabelcamposmae = styled.Text`

margin-top:10px;


font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 21px;

/* Orange */

color: #FF9000;
`;

export const TextCamposmae = styled.Text`




font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 21px;
/* Text */

color: #F4EDE8;
`;

export const TextDetallhesOcorr = styled.Text`




font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;

/* White */

color: #F4EDE8;
`;


export const TextLabeldetalhes = styled.Text`



margin-bottom:10px;
font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

/* Text */

color: #FF9000;
`;

export const TextDetalhes = styled.Text`
font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

/* Text */

color: #F4EDE8;
`;

export const TextCodRegistro = styled.Text`

font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
text-align: center;

/* Text 2 */

color: #767676;
`;

export const BtnCadastrarOcorrencia = styled.TouchableOpacity` 
width: 350px;
height: 50px;
background: #FF9000;
border-radius: 10px;  
justify-content:center;
    align-items:center;
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





