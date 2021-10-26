import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_background}
`;

export const DevelopersList = styled(FlatList as new () => FlatList<DevelopersDTO>).attrs({
  contentContainerStyle: {
    padding: 15,
    paddingBottom: 90,
  },
  showsVerticalScrollIndicator: false,
})``;
