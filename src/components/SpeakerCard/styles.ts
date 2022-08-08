import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Content  = styled.TouchableOpacity`
  flex-direction: row;
  align-self: center;
`;

export const Image  = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-right: 16px;
`;

export const Details  = styled.View`
  flex: 1;
  align-self: center;

`;

export const Name  = styled.Text`
  flex: 1;
  font-size: ${RFValue(14)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: #000000;
    text-transform: uppercase;
  `}
`;

export const Identification  = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const JobTitle  = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
  margin-right: 21px;
  margin-top: 6px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: #5B5B5B;
  `}
`;

export const Description  = styled.Text`
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(18)}px;
  margin-right: 21px;
  margin-top: 8px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: #000000;
  `}
`;

export const Line  = styled.View`
  height: ${RFValue(1)}px;
  width: 100%;
  margin: 12px 0;
  margin-left: ${RFValue(98)}px;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;