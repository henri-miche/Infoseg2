import React from "react";
import { View } from "react-native";
import { ActionCard as StyledCard, TextoGerarRo } from "../styles";

const contentWrap = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

export function ActionCard({ title, onPress }) {
  return (
    <StyledCard onPress={onPress} activeOpacity={0.8}>
      <View style={contentWrap}>
        <TextoGerarRo>{title}</TextoGerarRo>
      </View>
    </StyledCard>
  );
}
