import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    background-color:#000;
`

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
  
width: 303px;
height: 21px;
margin-left:30px;
margin-top:5px;
font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;

/* White */

color: #F4EDE8;
    
`

export const FiltrosText = styled.Text`

width: 44px;
height: 18px;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
font-family: RobotoSlab;

/* Text 2 */

color: #767676;
`

export const FiltroRo = styled.TouchableOpacity`

width: 40px;
height: 20px;

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
font-family: RobotoSlab;

/* Orange */

color: #FF9000;
`
export const FiltroRau = styled.TouchableOpacity`

width: 51px;
height: 20px;

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
font-family: RobotoSlab;


/* Text */

color: #F4EDE8;
`

export const FiltroRrm = styled.TouchableOpacity`

width: 54px;
height: 20px;

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
font-family: RobotoSlab;

/* Orange */

color: #FF9000;
`

export const FiltroBo = styled.TouchableOpacity`

width: 40px;
height: 20px;

justify-content:center;
align-items:center;

/* Text */

border: 1px solid #F4EDE8;
border-radius: 20px;

`
export const BoText = styled.Text`
font-family: RobotoSlab;
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
export const ResultBuscaText = styled.Text`
width: 315px;
height: 26px;
font-family: RobotoSlab;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
margin-left:30px;
margin-top:20px;
margin-bottom:20px;

/* White */

color: #F4EDE8;
`