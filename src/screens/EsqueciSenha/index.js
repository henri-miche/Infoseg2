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
import InputLogin from "../../components/InputLogin";
import { sendPasswordResetEmail } from "../../services/authService";
import { getAuthErrorMessage } from "../../utils/authErrors";
import { isValidEmail } from "../../utils/validation";

export default () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleEnviar = () => {
    const trimmed = email.trim();
    if (!trimmed) {
      alert("Informe o e-mail.");
      return;
    }
    if (!isValidEmail(trimmed)) {
      alert("E-mail inválido.");
      return;
    }
    setLoading(true);
    sendPasswordResetEmail(trimmed)
      .then(() => {
        alert("E-mail de redefinição enviado. Verifique sua caixa de entrada.");
        navigation.goBack();
      })
      .catch((error) => {
        alert(getAuthErrorMessage(error.code) || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container>
      <ImagemStyle source={require("../../../assets/brasaoTransarente.png")} />
      <TextoTitulo>InfoSeg Mobile</TextoTitulo>
      <SubtituloCbtu>CBTU BH</SubtituloCbtu>
      <FaçaSeuLogin>Esqueci minha senha</FaçaSeuLogin>
      <InputLogin
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        placeholderTextColor="#666360"
        color="#fff"
      />
      <BtnEntrar onPress={handleEnviar} disabled={loading}>
        <EntrarText>{loading ? "Enviando..." : "Enviar link"}</EntrarText>
      </BtnEntrar>
    </Container>
  );
};
