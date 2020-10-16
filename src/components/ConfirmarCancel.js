import React from 'react';
import styled from 'styled-components/native';
import { Image, Text } from 'react-native';


const ContainerSearch = styled.View`
    height: 60px;
    background-color: #000;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const SearchItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;



export default ({ onPress, onPress1 }) => {



    return (
        <ContainerSearch>
            <SearchItem onPress={onPress} >
                 <Image source={require('../../assets/stop.png')}
                    style={{ width: 30, height: 30, marginLeft: 30 }}>
                </Image>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5, marginRight: 20, fontWeight: 'bold' }}>Cancelar</Text>
            </SearchItem>

            <SearchItem onPress={onPress1}>
               <Image source={require('../../assets/Accept-icon.png')}
                    style={{ width: 30, height: 30, marginLeft: 30 }}>
                </Image>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5, marginRight: 20, fontWeight: 'bold' }}>Confimar</Text>
            </SearchItem>
        </ContainerSearch>
    );
}