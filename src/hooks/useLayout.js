import { useWindowDimensions } from "react-native";
import { useMemo } from "react";
import { getLayout } from "../constants/layout";

export function useLayout() {
  const { width, height } = useWindowDimensions();
  return useMemo(() => getLayout(width, height), [width, height]);
}
