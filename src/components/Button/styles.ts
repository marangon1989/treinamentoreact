import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export type TypeProps = 'primary' | 'secondary';

type ContainerProps = {
  type: TypeProps;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  max-height: ${RFValue(56)}px;
  min-height: ${RFValue(56)}px;
  /* border-radius: 12px; */
  justify-content: center;
  align-items: center;

  /* background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.SUCCESS_900 : theme.COLORS.PRIMARY_800}; */
  /* background-color: ${({ theme }) => theme.COLORS.SUCCESS_900}; */
  background-color: #0f0f0f
`;

export const Title = styled.Text`
font-size: ${RFValue(14)}px;

${({ theme }) => css`
  color: ${theme.COLORS.TITLE};
  font-family: ${theme.FONTS.TEXT};
`};

`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE
}))``;