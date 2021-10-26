import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { DevelopersDTO } from '../../dtos/DevelopersDTO';

import {
 Container,
 DevelopersList,
} from './styles';
import { Developers } from '../../components/Developers';
import { Header } from '../../components/Header';

export function Home() {
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

  return (
      <Container>
        <Header
          title="Developers"
        />

        <DevelopersList
            data={developers}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Developers
                data={item}
                // onPress={() => dispatchFunction(item)}
              />
            )}
          />
      </Container>
    )
}
