import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function MenuModal({ visible, onClose }: MenuModalProps) {
  if (!visible) return null;

  return (
    <View style={styles.menuOverlay}>
      <View style={styles.menuContainer}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>MENU</Text>
          <TouchableOpacity onPress={onClose}>
            <FontAwesome name="close" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuOption}>
          <Text style={styles.menuOptionText}>VENDAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Text style={styles.menuOptionText}>CLIENTES</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuOption}>
          <Text style={styles.menuOptionText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuContainer: {
    width: '100%',
    marginTop: 40,
    backgroundColor: '#ddd',
    borderRadius: 0,
    alignItems: 'center',
    paddingBottom: 30,
  },
  menuHeader: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    flex: 1,
  },
  menuOption: {
    backgroundColor: '#d3d3d3',
    borderRadius: 50,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 20,
  },
  menuOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  }
});