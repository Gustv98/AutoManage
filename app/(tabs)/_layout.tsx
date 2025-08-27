import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light',
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>Home</Text>,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>Login</Text>,
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>Cadastro</Text>,
        }}
      />
      <Tabs.Screen
        name="addCarro"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>addCarro</Text>,
        }}
      />
      <Tabs.Screen
        name="editCarro"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>EditCarro</Text>,
        }}
      />
      <Tabs.Screen
        name="VendasScreen"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>Vendas</Text>,
        }}
      />
    </Tabs>
  );
}
