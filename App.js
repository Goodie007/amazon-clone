import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/Products/ProductScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen/ShoppingCartScreen';
import AddressScreen from './src/screens/AddressScreen/AddressScreen';
import Router from './src/Router/Router';
import HomeStack from './src/Router/HomeStack';

export default function App() {
  return (
    <View style={styles.backgroundStyle}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  }
})

