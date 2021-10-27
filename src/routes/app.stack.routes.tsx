import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditDeveloper } from '../screens/EditDeveloper';
import { AppTabRoutes } from './app.tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="_Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="_Home" component={AppTabRoutes} />
      <Screen name="EditDeveloper" component={EditDeveloper} />
    </Navigator>
  );
}
