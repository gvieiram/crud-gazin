import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { useTheme } from 'styled-components';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

import {
  Container,
  Details,
  Name,
  Age,
  Hobby,
  BirthDate,
  BirthContainer
} from './styles';

interface Props extends RectButtonProps {
  data: DevelopersDTO;
  onPress?: ((pointerInside: boolean) => void) | undefined;
}

export function Developers({ data, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container rippleColor={theme.colors.gray_opaque} {...rest}>
      <Details>
        <Name>{data.nome}</Name>

        <Hobby>{`Hobby: ${data.hobby}`}</Hobby>

        <BirthContainer>
          <BirthDate>
          {`Nascido(a) em ${data.datanascimento}`}
          </BirthDate>

          <Age>{`${data.idade} Anos`}</Age>
        </BirthContainer>

      </Details>
    </Container>
  );
};
