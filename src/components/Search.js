import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
  min-height: 50px;
  background: #2e2e2e;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
`;

const InputAreaDefault = styled(InputArea)`
  width: 315px;
  margin-left: 30px;
`;

const Input = styled.TextInput`
  flex: 1;
  min-height: 50px;
  background: transparent;
  border-radius: 10px;
  text-align: center;
`;

export const ImagemEmail = styled.Image`
  width: 20px;
  height: 18px;
`;

export const Lupa = styled.TouchableOpacity`
  width: 20px;
  height: 18px;
  margin-left: 15px;
`;

export const Limpar = styled.TouchableOpacity`
  width: 20px;
  height: 18px;
  margin-left: 15px;
`;

export default ({
  placeholder,
  onEndEditing,
  onPress,
  onPress2,
  value,
  autoCapitalize,
  onChangeText,
  password,
  placeholderTextColor,
  color,
  containerStyle,
}) => {
  const Wrapper = containerStyle ? InputArea : InputAreaDefault;
  return (
    <Wrapper style={containerStyle}>
      <Lupa onPress={onPress}>
        <ImagemEmail source={require("../../assets/search.png")} />
      </Lupa>
      <Input
        color={color}
        placeholderTextColor={placeholderTextColor}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        autoCapitalize={autoCapitalize}
        onEndEditing={onEndEditing}
      />
      <Limpar onPress={onPress2}>
        <ImagemEmail source={require("../../assets/SetaSair.png")} />
      </Limpar>
    </Wrapper>
  );
};
