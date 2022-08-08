import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
}

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  // placeholderTextColor: type === 'primary' ? theme.COLORS.SECONDARY_900 :theme.COLORS.PRIMARY_50
  placeholderTextColor: '#000000'
}))<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: transparent;
  font-size: ${RFValue(14)}px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;

  ${({ theme, type })  => css`
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE}
    color: #000000
  `}
`;
