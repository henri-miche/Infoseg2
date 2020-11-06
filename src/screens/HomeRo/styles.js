import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#000;
    
`;

export const TextoBoasVindas = styled.Text`
    position: absolute;
width: 112px;
height: 26px;
left: 30px;
top: 60px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;

/* Orange */

color: #FF9000;
    
`;

export const TouchExit = styled.TouchableOpacity`
position: absolute;
width: 24px;
height: 24px;
left: 321px;
top: 60px;

`

export const SubTitulo = styled.Text`
position: absolute;
width: 260px;
height: 21px;
left: 30px;
top: 91px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

/* White */

color: #F4EDE8;
`


export const GerarRo = styled.TouchableOpacity`
position: absolute;
left: 8%;
right: 53.33%;
top: 16.87%;
bottom: 72.04%;
justify-content:center;
align-items:center;

/* Darkest */

background: #2E2E2E;
border-radius: 10px;
`
export const TextoGerarRo = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 24px;
/* identical to box height */

text-align: center;

/* Text */

color: #F4EDE8;
`

export const GerarRau = styled.TouchableOpacity`
position: absolute;
left: 53.33%;
right: 8%;
top: 16.87%;
bottom: 72.04%;
justify-content:center;
align-items:center;


/* Darkest */

background: #2E2E2E;
border-radius: 10px;
`
export const GerarRrm = styled.TouchableOpacity`
position: absolute;
left: 8%;
right: 53.33%;
top: 31.03%;
bottom: 57.88%;
justify-content:center;
align-items:center;

/* Darkest */

background: #2E2E2E;
border-radius: 10px;
`
export const GerarBo = styled.TouchableOpacity`
position: absolute;
left: 53.33%;
right: 8%;
top: 31.03%;
bottom: 57.88%;
justify-content:center;
align-items:center;


/* Darkest */

background: #2E2E2E;
border-radius: 10px;
`
export const OcorrenciasText = styled.Text`
position: absolute;
width: 205px;
height: 26px;
left: 30px;
top: 367px;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;

/* White */

color: #F4EDE8;
`
export const FiltrosText = styled.Text`
position: absolute;
width: 44px;
height: 18px;
left: 30px;
top: 404px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;

/* Text 2 */

color: #767676;
`

export const FiltroRo = styled.TouchableOpacity`
position: absolute;
width: 40px;
height: 20px;
left: 86px;
top: 403px;
justify-content:center;
align-items:center;

/* Orange */

border: 1px solid #FF9000;

border-radius: 20px;

`
export const RoText = styled.Text`

width: 20px;
height: 18px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

/* Orange */

color: #FF9000;
`
export const FiltroRau = styled.TouchableOpacity`
position: absolute;
width: 51px;
height: 20px;
left: 141px;
top: 403px;
justify-content:center;
align-items:center;

/* Text */

border: 1px solid #F4EDE8;

border-radius: 20px;

`
export const RauText = styled.Text`

width: 31px;
height: 18px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;


/* Text */

color: #F4EDE8;
`

export const FiltroRrm = styled.TouchableOpacity`
position: absolute;
width: 54px;
height: 20px;
left: 207px;
top: 403px;
justify-content:center;
align-items:center;

/* Orange */

border: 1px solid #FF9000;
border-radius: 20px;

`
export const RrmText = styled.Text`
width: 34px;
height: 18px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

/* Orange */

color: #FF9000;
`

export const FiltroBo = styled.TouchableOpacity`
position: absolute;
width: 40px;
height: 20px;
left: 276px;
top: 403px;
justify-content:center;
align-items:center;

/* Text */

border: 1px solid #F4EDE8;
border-radius: 20px;

`
export const BoText = styled.Text`

width: 19px;
height: 18px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: center;

/* Text */

color: #F4EDE8;
`

export const ViewResumo = styled.View`

position: absolute;
width: 315px;
height: 237px;
left: 30px;
top: 443px;

/* Darkest */

background: #2E2E2E;

border-radius: 10px;
`
export const ViewProx = styled.View`
    position: absolute;
    width: 315px;
    height: 21px;
    left: 30px;
    top: 695px;
    flexDirection:row;
`
export const AnteriorBtn = styled.TouchableOpacity`
    flex:1;
    flexDirection:row;
    align-items: center;
`
export const ProxBtn = styled.TouchableOpacity`
    flex:1;
    flexDirection:row;
    align-items: center;
    justify-content:flex-end;
`
export const BtnTodasOcorrencias = styled.TouchableOpacity`
    position: absolute;
    width: 315px;
    height: 50px;
    left: 30px;
    top: 731px;
    align-items: center;
    justify-content:center;
    background: #FF9000;
    border-radius: 10px;
`



