import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  index: number
}

export type StatusTypesProps = 'Preparando' | 'Pronto' | 'Entregue';

type StatusProps = {
  status: StatusTypesProps
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 50%;
  align-items: center;
  padding: 24px;

  ${({ theme, index }) => css`
    border-right-width: ${index % 2 > 0 ? 0 : 1}px;
    border-right-color: ${theme.COLORS.SHAPE};
  `}
`;

export const Image = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;
  border-radius: 52px;
`;

export const Name = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: 21px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`;

export const Description = styled.Text`
  font-size: ${RFValue(14)}px;
  margin-top: 11px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_400};
  `}
`;

export const StatusContainer = styled.View<StatusProps>`
  padding: 4px 16px;
  border-radius: 12px;
  margin-top: 16px;
  justify-content: center;
  align-items: center;

  ${({ status, theme }) => status === 'Preparando' && css`
    background-color: ${theme.COLORS.ALERT_50};
    border: 1px solid ${theme.COLORS.ALERT_900};
  `}

  ${({ status, theme }) => status === 'Pronto' && css`
    background-color: ${theme.COLORS.SUCCESS_900};
  `}

  ${({ status, theme }) => status === 'Entregue' && css`
    background-color: ${theme.COLORS.SECONDARY_900};
  `}
`;

export const StatusLabel = styled.Text<StatusProps>`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;

  ${({ status, theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${status === 'Preparando' ? theme.COLORS.ALERT_900 : theme.COLORS.TITLE};
  `}
`;