import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import { FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useLayout } from "../../hooks/useLayout";
import { signOut, getCurrentUser } from "../../services/authService";
import { getByUid } from "../../services/usuarioService";
import {
  listOcorrencias,
  searchOcorrenciasByNome,
} from "../../services/ocorrenciaService";

import {
  Container,
  SubTitulo,
  OcorrenciasText,
  ViewSubtitle,
  ViewActionCards,
  ViewActionCardSecond,
  ViewSectionTitle,
  ViewSearchWrapper,
  ListWrapper,
} from "./styles";
import { HomeHeader } from "./components/HomeHeader";
import { ActionCard } from "./components/ActionCard";
import DownFotos2 from "../../components/DownFotos2";
import Search from "../../components/Search";

export default function HomeRo() {
  const navigation = useNavigation();
  const layout = useLayout();
  const theme = { layout };

  const [ocorrencias, setOcorrencias] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTexto, setSearchTexto] = useState("");
  const [nome, setNome] = useState("");

  const loadUser = useCallback(() => {
    const user = getCurrentUser();
    if (user) {
      getByUid(user.uid).then((data) => {
        if (data?.nome) setNome(data.nome);
      });
    }
  }, []);

  const loadOcorrencias = useCallback(() => {
    return listOcorrencias()
      .then(setOcorrencias)
      .catch((err) => alert(err));
  }, []);

  const loadSearch = useCallback(() => {
    if (!searchTexto.trim()) return loadOcorrencias();
    return searchOcorrenciasByNome(searchTexto.trim())
      .then(setOcorrencias)
      .catch((err) => alert(err));
  }, [searchTexto, loadOcorrencias]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  useEffect(() => {
    if (searchTexto === "") loadOcorrencias();
  }, [searchTexto, loadOcorrencias]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    loadOcorrencias().finally(() => setRefreshing(false));
  }, [loadOcorrencias]);

  const handleSearch = useCallback(() => {
    if (searchTexto.trim()) loadSearch();
  }, [searchTexto, loadSearch]);

  const handleClearSearch = useCallback(() => setSearchTexto(""), []);

  const handleCadastroRo = useCallback(() => {
    navigation.navigate("HomeRoCadastro");
  }, [navigation]);

  const handleAreaAgente = useCallback(() => {
    navigation.navigate("AreaAgente");
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => <DownFotos2 data={item} />,
    []
  );

  const keyExtractor = useCallback((item) => item.key, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HomeHeader nome={nome} onLogout={signOut} />

        <ViewSubtitle>
          <SubTitulo>Como o InfoSeg vai te ajudar hoje?</SubTitulo>
        </ViewSubtitle>

        <ViewActionCards>
          <ActionCard
            title="Gerar Ocorrência"
            onPress={handleCadastroRo}
          />
        </ViewActionCards>

        <ViewActionCardSecond>
          <ActionCard
            title="Área do Agente"
            onPress={handleAreaAgente}
          />
        </ViewActionCardSecond>

        <ViewSectionTitle>
          <OcorrenciasText>Ocorrências Recentes</OcorrenciasText>
        </ViewSectionTitle>

        <ViewSearchWrapper>
          <Search
            color="#fff"
            value={searchTexto}
            onEndEditing={handleSearch}
            onPress={handleSearch}
            onPress2={handleClearSearch}
            onChangeText={setSearchTexto}
            containerStyle={{ flex: 1 }}
          />
        </ViewSearchWrapper>

        <ListWrapper>
          <FlatList
            data={ocorrencias}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
          />
        </ListWrapper>
      </Container>
    </ThemeProvider>
  );
}
