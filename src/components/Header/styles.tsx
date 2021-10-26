import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { BackButton as IconBack } from '../BackButton';

export const Container = styled.View`
  width: 100%;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.purple};
  justify-content: flex-end;
  padding: 15px;
`;

export const HeaderContent = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const BackButton = styled(IconBack)`
  position: absolute;
  z-index: 1;
  left: 3px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.roboto_400};
  color: ${({ theme }) => theme.colors.white};
`;
