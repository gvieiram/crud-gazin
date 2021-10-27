import React, { useCallback, useState } from 'react';
import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/core';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Checkbox } from 'react-native-paper';
import { Alert, Platform, View } from 'react-native';
import { actualDate } from '../../utils/Date';

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

export function AddDevelopers() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [masChecked, setMasChecked] = useState(false);
  const [femChecked, setFemChecked] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobby, setHobby] = useState('');
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

  function handlePostDeveloper() {
    api.post('/developers', {
      nome: name,
      sexo: sexo,
      idade: age,
      hobby: hobby,
      datanascimento: formattedDate,
    })
    .then(() => {
      Alert.alert('', 'Dev inserido com sucesso!');
    })
    .catch(err => {
      Alert.alert('Oops', 'Não foi possível inserir o dev!');
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
        title="Adicionar Dev"
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
              title="Adicionar"
              onPress={handlePostDeveloper}
            />
      </ContentContainer>
    </Container>
    )
}
