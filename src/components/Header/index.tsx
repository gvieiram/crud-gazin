import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 HeaderContent,
 HeaderTitle,
 BackButton,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
}

export function Header({ title, ...rest } : Props) {
 return (
    <Container >
      <HeaderContent>
        <BackButton {...rest}/>

        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </Container>
 );
}
