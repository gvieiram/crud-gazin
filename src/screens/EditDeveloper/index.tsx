import React, { useCallback, useState } from 'react';
import { api } from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Checkbox } from 'react-native-paper';
import { actualDate } from '../../utils/Date';
import { Alert, Platform, View } from 'react-native';

import {
  Container,
  ContentContainer,
  Title,
  TextCheckbox,
  Button,
  CalendarContainer,
  Calendar,
  SelectedDate,
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
  const [undefinedSexChecked, setUndefinedSexChecked] = useState(dev.sexo === 'U' ? true : false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [name, setName] = useState(dev.nome);
  const [age, setAge] = useState(dev.idade);
  const [hobby, setHobby] = useState(dev.hobby);
  const [sexo, setSexo] = useState('');
  const [dateSelected, setDateSelected] = useState(new Date());

  const formattedDate = actualDate(dateSelected);

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
      datanascimento: formattedDate,
    })
    .then(() => {
      Alert.alert('', 'Dev alterado com sucesso!');
    })
    .catch(err => {
      Alert.alert('Oops', 'Não foi possível alterar o dev!');
      console.log(err);
    });
  }

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker(state => !state);
  }, []);

  const handleDateChanged = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);

      if (date) {
        setDateSelected(date);
      }
    }
  }, []);

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
                disabled={femChecked || undefinedSexChecked ? true : false}
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
                disabled={masChecked || undefinedSexChecked ? true : false}
              />
              <TextCheckbox>Feminino</TextCheckbox>
            </View>

            <View style={{
              flexDirection: 'row',
              alignItems: 'center',

              }}>
              <Checkbox
                status={undefinedSexChecked ? 'checked' : 'unchecked'}
                color={theme.colors.purple}
                onPress={() => {
                  setUndefinedSexChecked(!undefinedSexChecked);
                  setSexo('U');
                }}
                disabled={masChecked || femChecked ? true : false}
              />
              <TextCheckbox>Prefiro não Informar</TextCheckbox>
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

            <CalendarContainer>
              <Title>Data de Nascimento</Title>

              <Calendar
                activeOpacity={0.7}
                onPress={handleToggleDatePicker}
              >
                <SelectedDate>{formattedDate}</SelectedDate>
                <MaterialIcons
                  name="event"
                  size={28}
                  color={theme.colors.purple_blue}
                  />
              </Calendar>

              { showDatePicker &&
                <DateTimePicker
                  value={dateSelected}
                  mode="date"
                  onChange={handleDateChanged}
                  maximumDate={new Date()}
                />}
            </CalendarContainer>

            <Button
              title="Alterar"
              onPress={handleEditDeveloper}
            />
      </ContentContainer>
    </Container>
    )
}
