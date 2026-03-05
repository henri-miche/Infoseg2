import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextoTitulo = styled.Text`
  width: 189px;
  height: 34px;
  margin-top: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 34px;
  text-align: center;
  font-family: RobotoSlab;
  color: #ff9000;
`;

export const ImagemStyle = styled.Image`
  width: 175px;
  height: 175px;
`;

export const SubtituloCbtu = styled.Text`
  width: 71px;
  height: 21px;
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  font-family: RobotoSlab;
  color: #f4ede8;
`;

export const FaçaSeuLogin = styled.Text`
  height: 26px;
  margin-top: 45px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  font-family: RobotoSlab;
  color: #f4ede8;
`;

export const BtnEntrar = styled.TouchableOpacity`
  width: 315px;
  height: 50px;
  margin-top: 25px;
  justify-content: center;
  background: #ff9000;
  border-radius: 10px;
`;

export const EntrarText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  font-family: RobotoSlab;
  color: #f4ede8;
`;
