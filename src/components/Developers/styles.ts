import { TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 94%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 15px;
`;

export const Details = styled.View`
  height: 100%;
  padding: 8px 0 8px 20px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_500};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black_title};
  flex-wrap: wrap;

  margin-bottom: 6px;
`;

export const Hobby = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_400};
  font-size: ${RFValue(16)}px;

  margin-bottom: 6px;
`;

export const BirthContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 6px;
`;


export const BirthDate = styled.Text`
  width: 50%;
  font-family: ${({ theme }) => theme.fonts.roboto_300};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.black_title};
`;

export const Age = styled.Text`
  width: 50%;
  font-family: ${({ theme }) => theme.fonts.roboto_500};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.black_title};
  text-align: right;
  right: 30px;
`;

export const Sex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.roboto_300};
  font-size: ${RFValue(11)}px;
  color: ${({ theme }) => theme.colors.black_title};
`;

export const Button = styled(TouchableOpacity)`
  margin-left: 5px;
  padding-bottom: 10px;
`;
