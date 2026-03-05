import styled from "styled-components/native";
import { scale, verticalScale, moderateScale } from "../../constants/layout";

const spacingHorizontalTheme = (p) =>
  p.theme?.layout?.spacing?.screenHorizontal ?? scale(30);
const cardHeightTheme = (p) => p.theme?.layout?.cardHeight ?? verticalScale(60);
const fontXl = (p) => p.theme?.layout?.font?.xl ?? moderateScale(20);
const fontLg = (p) => p.theme?.layout?.font?.lg ?? moderateScale(18);
const fontMd = (p) => p.theme?.layout?.font?.md ?? moderateScale(16);
const iconMedium = (p) => p.theme?.layout?.icon?.medium ?? scale(30);
const iconLarge = (p) => p.theme?.layout?.icon?.large ?? scale(50);

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

export const TextoBoasVindas = styled.Text`
  flex: 1;
  font-style: normal;
  font-weight: 500;
  font-size: ${(p) => fontXl(p)}px;
  line-height: ${(p) => fontXl(p) * 1.3}px;
  font-family: RobotoSlab;
  color: #ff9000;
`;

export const TouchExit = styled.TouchableOpacity`
  width: ${scale(24)}px;
  height: ${scale(24)}px;
  justify-content: center;
  align-items: center;
`;

export const SubTitulo = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${(p) => fontMd(p)}px;
  line-height: ${(p) => fontMd(p) * 1.3}px;
  font-family: RobotoSlab;
  color: #f4ede8;
`;

export const ActionCard = styled.TouchableOpacity`
  width: 100%;
  min-height: ${(p) => cardHeightTheme(p)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #2e2e2e;
  border-radius: ${scale(10)}px;
`;

export const TextoGerarRo = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${(p) => fontLg(p)}px;
  line-height: ${(p) => fontLg(p) * 1.33}px;
  font-family: RobotoSlab;
  text-align: center;
  color: #ff9000;
`;

export const OcorrenciasText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: ${(p) => fontXl(p)}px;
  line-height: ${(p) => fontXl(p) * 1.3}px;
  font-family: RobotoSlab;
  color: #f4ede8;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${verticalScale(30)}px;
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  padding-right: ${(p) => spacingHorizontalTheme(p)}px;
`;

export const ViewSubtitle = styled.View`
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  margin-top: ${scale(5)}px;
`;

export const ViewActionCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${verticalScale(25)}px;
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  padding-right: ${(p) => spacingHorizontalTheme(p)}px;
`;

export const ViewActionCardSecond = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${scale(10)}px;
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  padding-right: ${(p) => spacingHorizontalTheme(p)}px;
`;

export const ViewSectionTitle = styled.View`
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  margin-top: ${scale(10)}px;
  margin-bottom: ${scale(15)}px;
`;

export const ViewSearchWrapper = styled.View`
  flex-direction: row;
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  padding-right: ${(p) => spacingHorizontalTheme(p)}px;
  margin-bottom: ${scale(8)}px;
`;

export const ListWrapper = styled.View`
  flex: 1;
  background-color: #000;
  margin-left: ${(p) => spacingHorizontalTheme(p)}px;
  padding-right: ${(p) => spacingHorizontalTheme(p)}px;
  margin-top: ${scale(15)}px;
`;

export const FiltrosText = styled.Text`
  width: 44px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  font-family: RobotoSlab;
  color: #767676;
`;

export const FiltroRo = styled.TouchableOpacity`
  width: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff9000;
  border-radius: 20px;
`;

export const RoText = styled.Text`
  width: 20px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: RobotoSlab;
  color: #ff9000;
`;

export const FiltroRau = styled.TouchableOpacity`
  width: 51px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #f4ede8;
  border-radius: 20px;
`;

export const RauText = styled.Text`
  width: 31px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: RobotoSlab;
  color: #f4ede8;
`;

export const FiltroRrm = styled.TouchableOpacity`
  width: 54px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff9000;
  border-radius: 20px;
`;

export const RrmText = styled.Text`
  width: 34px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: RobotoSlab;
  color: #ff9000;
`;

export const FiltroBo = styled.TouchableOpacity`
  width: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border: 1px solid #f4ede8;
  border-radius: 20px;
`;

export const BoText = styled.Text`
  font-family: RobotoSlab;
  width: 19px;
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f4ede8;
`;

export const ViewResumo = styled.View`
  margin-top: 21px;
  margin-left: ${scale(30)}px;
  width: ${scale(315)}px;
  height: ${verticalScale(237)}px;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  border-radius: ${scale(10)}px;
`;

export const ViewProx = styled.View`
  width: ${scale(315)}px;
  height: 21px;
  margin-left: ${scale(30)}px;
  margin-top: 15px;
  flex-direction: row;
`;

export const AnteriorBtn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ProxBtn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const BtnTodasOcorrencias = styled.TouchableOpacity`
  width: ${scale(315)}px;
  height: ${verticalScale(50)}px;
  margin-left: ${scale(30)}px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  background: #ff9000;
  border-radius: ${scale(10)}px;
`;

