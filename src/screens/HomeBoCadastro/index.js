import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import ConfirmarCancel from '../../components/ConfirmarCancel';


export default () => {

    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('HomeBo');
    };

    return (
        <Container >

            <SafeAreaView style={{ backgroundColor: '#1C1C1C', flex: 1, marginBottom: 0.5, justifyContent: 'flex-end' }}>
                <ConfirmarCancel onPress={handleClick} />
            </SafeAreaView>



        </Container>
    );
}