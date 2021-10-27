import React, { useState } from 'react';
import { api } from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/core';
import DatePicker from 'react-native-datepicker'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Checkbox } from 'react-native-paper';
import { View } from 'react-native';

import {
  Container,
  ContentContainer,
  Title,
  TextCheckbox,
  Button,
 } from './styles';
import { useTheme } from 'styled-components';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

interface Params {
  dev: DevelopersDTO;
}

export function EditDeveloper() {
  const navigation = useNavigation();
  const theme = useTheme();
  const route = useRoute();
  const { dev } = route.params as Params;

  const [masChecked, setMasChecked] = useState(dev.sexo === 'M' ? true : false);
  const [femChecked, setFemChecked] = useState(dev.sexo === 'F' ? true : false);

  const [name, setName] = useState(dev.nome);
  const [age, setAge] = useState(dev.idade);
  const [hobby, setHobby] = useState(dev.hobby);
  const [sexo, setSexo] = useState('');
  const [dateSelected, setDateSelected] = useState(dev.datanascimento);

  function handleBack() {
    navigation.goBack();
  }

  function onChangedText(text: string) {
    const textRegex = text.replace(/[^0-9]/g, '');

    setAge(textRegex);
  }

  function handleEditDeveloper() {
    api.put(`/developers/${dev.id}`, {
      nome: name,
      sexo: sexo,
      idade: age,
      hobby: hobby,
      datanascimento: dateSelected,
    });
  }

  return (
    <Container>
      <Header
        title="Editar Dev"
        onPress={handleBack}
        renderBackButton={true}
        />

        <ContentContainer
          showsVerticalScrollIndicator={false}
        >

            <Title>Nome</Title>
            <Input
              iconName="person"
              placeholder="Nome"
              autoCapitalize="words"
              onChangeText={setName}
              value={name}
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
                  setSexo('M');
                }}
                disabled={femChecked ? true : false}
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
                  setSexo('F');
                }}
                disabled={masChecked ? true : false}
              />
              <TextCheckbox>Feminino</TextCheckbox>
            </View>


            <Title>Idade</Title>
            <Input
              iconName="plus-one"
              placeholder="Idade"
              keyboardType="numeric"
              maxLength={3}
              onChangeText={(text) => onChangedText(text)}
              value={age}
            />

            <Title>Hobby</Title>
            <Input
              iconName="sports-soccer"
              placeholder="Ex.: Futebol"
              autoCapitalize="words"
              onChangeText={setHobby}
              value={hobby}
            />

            <Title>Data de Nascimento</Title>
            <DatePicker
              format="DD/MM/YYYY"
              date={dateSelected}
              onDateChange={(date) => setDateSelected(date)}
              maxDate={new Date()}
              customStyles={{
                dateInput: {
                  borderColor: 'transparent',
                  alignItems: 'flex-start',
                },
                dateText: {
                  color: theme.colors.purple_blue,
                  fontFamily: theme.fonts.roboto_500,
                  fontSize: 15,
                }
              }}
            />

            <Button
              title="Alterar"
              onPress={handleEditDeveloper}
            />
      </ContentContainer>
    </Container>
    )
}
