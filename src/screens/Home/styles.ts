import styled, { css } from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Button } from '@components/Button';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: ${getStatusBarHeight() + 33}px 24px 58px;
  background-color:#1074b9;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreetingEmoji = styled.Image`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  font-size: ${RFValue(20)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
  `}
`;

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 24px 0;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const MenuItemsNumber = styled.Text`
  font-size: ${RFValue(14)}px;
  
  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: #000000;
  `};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20)}px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TITLE};
    color: #000000;
  `};
`;

export const NewSpeakerButton = styled(Button)`
  margin: 0 24px;
  margin-bottom: ${getBottomSpace() + 12}px;
`;