import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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



