import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import SearchCadastrar from "../../components/SearchCadastrar";


export default () => {

    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('HomeBoCadastro');
    };

    return (
        <Container >

            <SafeAreaView style={{ backgroundColor: '#1C1C1C', flex: 1, marginTop: 1 }}>
                <SearchCadastrar onPress={handleClick} />
            </SafeAreaView>



        </Container>
    );
}