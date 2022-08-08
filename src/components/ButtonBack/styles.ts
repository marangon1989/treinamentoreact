import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  /* border-radius: 12px; */
  /* border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_100} */
  border: 1px solid #FFFFFF
`;
