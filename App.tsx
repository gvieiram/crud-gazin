import React from 'react';
import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import theme from './src/styles/theme';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
          <Home />
      </PaperProvider>
    </ThemeProvider>
  );
}
