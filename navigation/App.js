import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const DetalleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle</Text>
    </View>
  )
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen:  DetalleScreen
  }
}, { initialRouteName: 'Detalle' } );

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
