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
  renderBackButton?: boolean;
}

export function Header({ title, renderBackButton, ...rest } : Props) {
 return (
    <Container >
      <HeaderContent>
        {renderBackButton ? <BackButton {...rest}/> : null}

        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContent>
    </Container>
 );
}
