import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {

  return (
    <SafeAreaView style={ styles.container}>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'light',
        tabBarIcon: ({ color }) => <Text></Text>,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Text>Home</Text>,
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
      <Tabs.Screen
        name="cadVendas"
        options={{
          title: '',
          tabBarIcon: ({ color }) => < Text>AddVendas</Text>,
        }}
      />
    </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});