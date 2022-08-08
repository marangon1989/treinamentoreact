import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export type RadioButtonProps = {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<RadioButtonProps>`
  width: ${RFValue(104)}px;
  height: ${RFValue(82)}px;
  border-radius: 8px;
  padding: 14px 16px;

  ${({ theme, selected }) => css`
    border: 1px solid ${selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE}
    background-color: ${selected ? theme.COLORS.SUCCESS_50 : theme.COLORS.TITLE}
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
`;

export const Radio = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_900};
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`;

export const Selected = styled.View`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
`;