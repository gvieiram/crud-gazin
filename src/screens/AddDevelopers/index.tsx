import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { Checkbox } from 'react-native-paper';

import {
  Container,
  ContentContainer,
  Title,
  TextCheckbox
 } from './styles';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

export function AddDevelopers() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [masChecked, setMasChecked] = useState(false);
  const [femChecked, setFemChecked] = useState(false);
  const [developers, setDevelopers] = useState<DevelopersDTO[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDevelopers() {
      try {
        const res = await api.get('/developers');
        setDevelopers(res.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDevelopers();
  }, [])

  function handleBack() {
    navigation.goBack();
  }

  return (
      <Container>
        <Header
          title="Add Developers"
          onPress={handleBack}
          renderBackButton={true}
          />

        <ContentContainer>
          <Title>Nome</Title>
          <Input
            iconName="person"
          />

          <Title>Sexo</Title>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            }}>
            <Checkbox
              status={masChecked ? 'checked' : 'unchecked'}
              color={theme.colors.purple}
              onPress={() => {
                setMasChecked(!masChecked);
              }}
            />
            <TextCheckbox>Masculino</TextCheckbox>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',

            }}>
            <Checkbox
              status={femChecked ? 'checked' : 'unchecked'}
              color={theme.colors.purple}
              onPress={() => {
                setFemChecked(!femChecked);
              }}
            />
            <TextCheckbox>Feminino</TextCheckbox>
          </View>


          <Title>Idade</Title>
          <Input
            iconName="plus-one"
          />

          <Title>Hobby</Title>
          <Input
            iconName="sports-soccer"
          />

          <Button
            title="Adicionar"
          />

        </ContentContainer>
      </Container>
    )
}
