import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Button as CustomButton } from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_background};
`;

export const ContentContainer = styled(ScrollView)`
  padding: 0 15px 15px 15px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme}) => theme.fonts.roboto_500};
  color: ${({ theme }) => theme.colors.black_title};
  margin-left: 3px;
  margin-bottom: 3px;
  margin-top: 15px;
`;

export const TextCheckbox = styled.Text`
  color: ${({ theme }) => theme.colors.black_title};
  font-family: ${({ theme }) => theme.fonts.roboto_400};
  font-size: ${RFValue(14)}px;
`;

export const Button = styled(CustomButton)`
  margin: 25px 0 130px 0;
`;

export const CalendarContainer = styled.View``;

export const Calendar = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  width: 150px;
`;

export const SelectedDate = styled.Text`
  color: ${({ theme }) => theme.colors.purple_blue};
  font-family: ${({ theme }) => theme.fonts.roboto_500};
  font-size: ${RFValue(15)}px;

  margin-right: 15px;
`;
