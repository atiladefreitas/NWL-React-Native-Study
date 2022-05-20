import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 24px;
  /* padding-horizontal */
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 10};
  margin-bottom: 42px;
`;
