import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_background};
`;

export const ContentContainer = styled.View`
  padding: 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme}) => theme.fonts.roboto_500};
  color: ${({ theme }) => theme.colors.black_title};
  margin-left: 3px;
  margin-bottom: 3px;
`;

export const TextCheckbox = styled.Text`
  color: ${({ theme }) => theme.colors.black_title};
  font-family: ${({ theme }) => theme.fonts.roboto_400};
  font-size: ${RFValue(14)}px;
`;
