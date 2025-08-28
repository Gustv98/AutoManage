import { FontAwesome } from '@expo/vector-icons';
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
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
         
        }}
      />
      <Tabs.Screen
        name="cadastro"
        options={{
          title: 'Cadastro',
          
        }}
      />
      <Tabs.Screen
        name="addCarro"
        options={{
          title: '',
          href: null,
          
        }}
      />
      <Tabs.Screen
        name="editCarro"
        options={{
          title: '',
          href: null,
        }}
      />
      <Tabs.Screen
        name="VendasScreen"
        options={{
          title: 'Venda',
          tabBarIcon: ({ color }) => <FontAwesome name="dollar" size={24} color={color} />
        }}
        />
      <Tabs.Screen
        name="carroDetalhes"
        options={{
          title: 'Detalhes',
          tabBarIcon: ({ color }) => <FontAwesome name="car" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="cadVendas"
        options={{
          href:null,
          tabBarIcon: ({ }) => null
        }}
      />
      <Tabs.Screen
        name="listVendas"
        options={{
          title: 'Lista de Vendas',
          tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={color} />

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