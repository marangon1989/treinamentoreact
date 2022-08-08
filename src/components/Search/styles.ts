import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.TITLE};
    border: 1px solid ${theme.COLORS.SHAPE};
  `}
`;

export const Input = styled.TextInput`
  flex: 1;
  height: ${RFValue(52)}px;
  padding-left: 12px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled.TouchableOpacity`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;
  margin-left: 7px;
  border: 1px solid #000000;
`;