import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: #ececec;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  width: 100%;
  padding: 0 32px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  margin-bottom: 24px;
  align-self: flex-start;
  margin-top: 32px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: #000000;
  `};
`

export const Brand = styled.Image.attrs({
  resizeMode: 'contain'
})`
  height: ${RFValue(340)}px;
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: #000000;
  `};
`;