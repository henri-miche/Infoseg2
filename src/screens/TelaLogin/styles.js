import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #000;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.SafeAreaView`
    padding: 20px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #D3D3D3;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomBottomText = styled.Text`
    font-size: 18px;
    color: #000;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #D3D3D3;
    font-weight: bold;
`;

