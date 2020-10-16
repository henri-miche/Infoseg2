import React from 'react';
import styled from 'styled-components/native';
import { Image, Text, View } from 'react-native';


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

const TextInputSearch = styled.TextInput`
    width: 90%;
    height:20px;
    background-color: #D3D3D3 ;
`;

const SearchBtn = styled.View`
    width: 80%;
    height: 30px;
    background-color: #D3D3D3;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 5px;
    align-items: center;
    marginLeft: 10px;
`;

export default ({onPress,onPress1,onChangeText,value,onEndEditing,autoCapitalize}) => {

    

    return(
        <ContainerSearch>
            <SearchItem onPress={onPress1} >
                <Image  source={require('../../assets/search-3-32.png')}
                    style={{ width: 20, height: 20, marginLeft: 30 }}>
                </Image>
                <SearchBtn>
                    <TextInputSearch placeholder='Search' autoCapitalize={autoCapitalize} onEndEditing={onEndEditing} value={value} onChangeText={onChangeText} />
                </SearchBtn>
            </SearchItem>

            <SearchItem onPress={onPress}>
                <Image source={require('../../assets/plus-32.png')}
                    style={{ width: 15, height: 15, marginLeft: 30 }}>
                </Image>
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 5, marginRight: 20, fontWeight: 'bold' }}>Cadastrar</Text>
            </SearchItem>
        </ContainerSearch>
    );
}