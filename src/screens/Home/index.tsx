import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigation, CommonActions} from '@react-navigation/native';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';
import { Header } from '../../components/Header';

import {
 Container,
 DevelopersList,
} from './styles';
import { Developers } from '../../components/Developers';
import { Alert } from 'react-native';

export function Home() {
  const navigation = useNavigation();

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

  async function getDevelopers() {
    try {
      const res = await api.get('/developers');
      setDevelopers(res.data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleDeleteDeveloper(id: number) {
    try {
      api.delete(`/developers/${id}`)
      Alert.alert('', 'Desenvolvedor deletado!')

      getDevelopers();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header
        title="Desenvolvedores"
      />

      <DevelopersList
        data={developers}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
            <Developers
            data={item}
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate('EditDeveloper', {dev: item})
              )
            }
            onButtonPressed={() => handleDeleteDeveloper(item.id)}
          />
        )}
      />
    </Container>
  )
}
