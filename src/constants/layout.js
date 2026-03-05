import { Dimensions, PixelRatio } from "react-native";

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const scaleWithWidth = (size, width) => {
  const ratio = width / BASE_WIDTH;
  return Math.round(PixelRatio.roundToNearestPixel(size * ratio));
};

const verticalScaleWithHeight = (size, height) => {
  const ratio = height / BASE_HEIGHT;
  return Math.round(PixelRatio.roundToNearestPixel(size * ratio));
};

const moderateScaleWithWidth = (size, width, factor = 0.5) => {
  const ratio = width / BASE_WIDTH;
  return Math.round(
    PixelRatio.roundToNearestPixel(size + (ratio - 1) * size * factor)
  );
};

export const scale = (size) => scaleWithWidth(size, SCREEN_WIDTH);
export const verticalScale = (size) =>
  verticalScaleWithHeight(size, SCREEN_HEIGHT);
export const moderateScale = (size, factor = 0.5) =>
  moderateScaleWithWidth(size, SCREEN_WIDTH, factor);

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(12),
  lg: scale(16),
  xl: scale(24),
  xxl: scale(30),
  section: scale(30),
  horizontal: scale(24),
};

export const iconSizes = {
  small: scale(20),
  medium: scale(30),
  large: scale(50),
};

export const fontSizes = {
  sm: moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(18),
  xl: moderateScale(20),
};

export const getLayout = (width = SCREEN_WIDTH, height = SCREEN_HEIGHT) => {
  const sh = scaleWithWidth(24, width);
  return {
    width,
    height,
    spacing: {
      xs: scaleWithWidth(4, width),
      sm: scaleWithWidth(8, width),
      md: scaleWithWidth(12, width),
      lg: scaleWithWidth(16, width),
      xl: scaleWithWidth(24, width),
      xxl: scaleWithWidth(30, width),
      section: scaleWithWidth(30, width),
      horizontal: sh,
      screenHorizontal: Math.max(sh, Math.round(width * 0.06)),
    },
    icon: {
      small: scaleWithWidth(20, width),
      medium: scaleWithWidth(30, width),
      large: scaleWithWidth(50, width),
    },
    font: {
      sm: moderateScaleWithWidth(14, width),
      md: moderateScaleWithWidth(16, width),
      lg: moderateScaleWithWidth(18, width),
      xl: moderateScaleWithWidth(20, width),
    },
    cardHeight: verticalScaleWithHeight(60, height),
    isSmallScreen: width < 360,
  };
};

export default {
  scale,
  verticalScale,
  moderateScale,
  spacing,
  iconSizes,
  fontSizes,
  getLayout,
};

