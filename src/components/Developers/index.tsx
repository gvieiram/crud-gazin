import React from 'react';
import { GestureResponderEvent, TouchableOpacityProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

import {
  Container,
  Details,
  Name,
  Age,
  Hobby,
  BirthDate,
  BirthContainer,
  Sex,
  Button
} from './styles';

interface Props extends TouchableOpacityProps {
  data: DevelopersDTO;
  onButtonPressed: ((event: GestureResponderEvent) => void) | undefined;
}

export function Developers({ data, onButtonPressed, ...rest }: Props) {
  const theme = useTheme();

  function setSex(sex: string) {
    if (sex === 'M') {
      return 'Masculino';
    } else if (sex === 'F') {
      return 'Feminino';
    } else {
      return 'Não informado';
    }
  }

  function setBornBySex(sex: string) {
    if (sex === 'M') {
      return 'Nascido'
    } else if (sex === 'F') {
      return 'Nascida'
    } else {
      return 'Nascido(a)'
    }
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
      <Container activeOpacity={0.7} {...rest}>
        <Details>
          <Name>{data.nome}</Name>

          <Hobby>{`Hobby: ${data.hobby}`}</Hobby>

          <BirthContainer>
            <BirthDate>
            {`${setBornBySex(data.sexo)} em ${data.datanascimento}`}
            </BirthDate>

            <Age>{`${data.idade} Anos`}</Age>
          </BirthContainer>

          <Sex>{`Sexo: ${setSex(data.sexo)}`}</Sex>

        </Details>
      </Container>

      <Button activeOpacity={0.7} onPress={onButtonPressed}>
        <MaterialIcons
          name="delete-outline" color={theme.colors.error_light} size={24}
        />
      </Button>
    </View>

  );
};
