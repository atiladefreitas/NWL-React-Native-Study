import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;

export const TextInput = styled.TextInput`
  height: 40px;
  width: 300px;
  border-bottom-width: 2px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Wrapper = styled.View`
  margin-top: -40px;
  padding: 50px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;

export const SubTitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;
