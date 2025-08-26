import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuModal from '../../components/MenuModal';


export default function Home({navigation}:any){
  const [menuVisible, setMenuVisible] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AutoManage</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <MenuModal visible={menuVisible} onClose={() => setMenuVisible(false)} />

      <View style={styles.card}>
        <Text style={styles.model}>ONIX LT2 TURBO</Text>
        <Image 
          source={{ uri:'https://orca.com.br/uploads/products/versions/branco-summit-novo-onix.png' }}
          style={styles.carImage}
        />

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>ANO</Text>
          <Text style={styles.infoText}>COR</Text>
          <Text style={styles.infoText}>KM</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoValue}>2023</Text>
          <Text style={styles.infoValue}>PRATA</Text>
          <Text style={styles.infoValue}>22000</Text>
        </View>

        <Text style={styles.price}>69.999,00</Text>

        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => navigation.navigate('CarDetails')}
        >
          <Text style={styles.eyeButtonText}>👁</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    padding: 10,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    width: '90%',
    backgroundColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  eyeButton: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    padding: 10,
  },
  eyeButtonText: {
    fontSize: 24,
  },
  menuButton: {
    backgroundColor: '#ccc',
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
  
});