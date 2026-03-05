import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TextoTitulo,
  ImagemStyle,
  SubtituloCbtu,
  FaçaSeuLogin,
  BtnEntrar,
  EntrarText,
} from "./styles";

import InputLoginSenha from "../../components/InputLoginSenha";
import { getCurrentUser } from "../../services/authService";
import { getAuthErrorMessage } from "../../utils/authErrors";
import { isValidPassword } from "../../utils/validation";

export default () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmaçao, setConfirmaçao] = useState("");
  const navigation = useNavigation();

  const handleClickRedefinir = () => {
    if (!newPassword || !confirmaçao) {
      alert("Preencha os dois campos.");
      return;
    }
    if (newPassword !== confirmaçao) {
      alert("As senhas não coincidem.");
      return;
    }
    if (!isValidPassword(newPassword)) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    const user = getCurrentUser();
    if (user) {
      user
        .updatePassword(newPassword)
        .then(() => alert("Senha redefinida!"))
        .catch((error) =>
          alert(getAuthErrorMessage(error.code) || error.message),
        );
    } else {
      alert("Faça login para redefinir a senha.");
    }
  };

  return (
    <Container>
      <ImagemStyle source={require("../../../assets/brasaoTransarente.png")} />

      <TextoTitulo>InfoSeg Mobile</TextoTitulo>

      <SubtituloCbtu>CBTU BH</SubtituloCbtu>

      <FaçaSeuLogin>REDEFINIR SENHA</FaçaSeuLogin>

      <InputLoginSenha
        value={newPassword}
        onChangeText={(t) => setNewPassword(t)}
        placeholder="Nova senha"
        placeholderTextColor="#666360"
        password={true}
        color="#fff"
      />
      <InputLoginSenha
        value={confirmaçao}
        onChangeText={(t) => setConfirmaçao(t)}
        password={true}
        placeholder="Confirmar nova senha"
        placeholderTextColor="#666360"
        color="#fff"
      />

      <BtnEntrar onPress={handleClickRedefinir}>
        <EntrarText>Enviar</EntrarText>
      </BtnEntrar>
    </Container>
  );
};
