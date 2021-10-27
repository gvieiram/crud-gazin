import React from 'react';

import { BlurView } from 'expo-blur';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import IconAdd from '../assets/img/add.svg';
// import IconHome from '../assets/img/home.svg'
import IconMore from '../assets/img/more.svg';
import IconPerson from '../assets/img/person.svg';
import { Home } from '../screens/Home';
import { AddDevelopers } from '../screens/AddDevelopers';
import { EditDeveloper } from '../screens/EditDeveloper';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.purple,
        tabBarActiveBackgroundColor: theme.colors.pink,
        tabBarInactiveTintColor: theme.colors.pink_opaque,
        tabBarBackground: () => <BlurView tint="light" intensity={100} />,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          height: 58,
          alignItems: 'center',
          bottom: 15,
          zIndex: 10,
          marginHorizontal: 30,
          backgroundColor: theme.colors.purple,

          borderRadius: 35,
          shadowRadius: 8,
          shadowOpacity: 0.3,
          elevation: 5,
          shadowOffset: { width: 0, height: 8 },
        },
        tabBarItemStyle: {
          height: 40,
          maxWidth: 70,
          borderRadius: 22,

          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',

          marginHorizontal: 5,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <IconPerson width={32} height={32} fill={color} />
          ),
        }}
      />
      <Screen
        name="AddDevelopers"
        component={AddDevelopers}
        options={{
          tabBarIcon: ({ color }) => (
            <IconAdd width={32} height={32} fill={color} />
          ),
        }}
      />
      <Screen
        name="EditDeveloper"
        component={EditDeveloper}
        options={{
          tabBarIcon: ({ color }) => (
            <IconMore width={32} height={32} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
