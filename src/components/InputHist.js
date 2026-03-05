import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
  width: 315px;
  height: 230px;
  background: #2e2e2e;
  flex-direction: row;
  border-radius: 10px;
  /*padding-left: 15px;*/

  margin-bottom: 15px;
  margin-left: 30px;
  margin-top: 15px;
`;

const Input = styled.TextInput`
  width: 315px;
  height: 230px;
  background: #2e2e2e;
  border-radius: 10px;
  padding-left: 10px;
  color: #fff;
`;

export const ImagemEmail = styled.Image`
  width: 20px;
  height: 18px;
  margin-left: 16px;
`;

export default ({
  placeholder,
  source,
  styled,
  value,
  multiline,
  onChangeText,
  password,
  placeholderTextColor,
  color,
}) => {
  return (
    <Input
      color={color}
      placeholderTextColor={placeholderTextColor}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={password}
      multiline={multiline}
    />
  );
};
