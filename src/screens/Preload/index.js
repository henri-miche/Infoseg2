import React, { useEffect, useRef } from 'react';
import { Container, LoadingIcon } from './styles';
import { Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged } from '../../services/authService';

const AUTH_TIMEOUT_MS = 5000;

export default () => {
    const navigation = useNavigation();
    const resolved = useRef(false);

    useEffect(() => {
        const goToLogin = () => {
            if (resolved.current) return;
            resolved.current = true;
            navigation.reset({ routes: [{ name: 'TelaLogin' }] });
        };
        const goToHome = () => {
            if (resolved.current) return;
            resolved.current = true;
            navigation.reset({ routes: [{ name: 'HomeRo' }] });
        };

        const unsubscribe = onAuthStateChanged((user) => {
            if (user) {
                goToHome();
            } else {
                goToLogin();
            }
        });

        const timeout = setTimeout(() => {
            if (resolved.current) return;
            resolved.current = true;
            navigation.reset({ routes: [{ name: 'TelaLogin' }] });
        }, AUTH_TIMEOUT_MS);

        return () => {
            clearTimeout(timeout);
            unsubscribe();
        };
    }, [navigation]);

    return (
    <Container>
            <Image source={require('../../../assets/brasaoTransarente.png')}
                style={{ width: 250, height: 250 }}/>
                <Text style={{fontSize:40,marginTop: 10}}>INFOSEG</Text>
            <LoadingIcon size="large" color="#D3D3D3" />
    </Container>
    );
}