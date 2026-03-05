import React from "react";
import { Image } from "react-native";
import { TextoBoasVindas, TouchExit, ViewHeader } from "../styles";

const LOGOUT_ICON = require("../../../../assets/Sair.png");

export function HomeHeader({ nome, onLogout }) {
  return (
    <ViewHeader>
      <TextoBoasVindas>Olá, {nome}!</TextoBoasVindas>
      <TouchExit onPress={onLogout} activeOpacity={0.8}>
        <Image source={LOGOUT_ICON} resizeMode="contain" />
      </TouchExit>
    </ViewHeader>
  );
}
