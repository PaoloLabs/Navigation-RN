import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';

const Logo = () => <Text>Lalala</Text>

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        title='Ir a detalle'
        onPress={() => navigation.navigate('Detalle', { userId: 2})}
      />
    </View>
  )
}

HomeScreen.navigationOptions = {
  // title: 'Home',
  headerTitle: () => <Logo />,
  headerStyle: { 
    backgroundColor: '#222'
   },
  //  headerTintColor: '#fff', //cambia color de texto
  //  headerTitleStyle: {
  //    fontWeight: '500'
  //  }
}

const DetalleScreen = ({ navigation }) => {

  const lala = navigation.getParam('lala', 'valor por defecto'); // cao de que no exista

  return (
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {lala}</Text>
      <Button
        title='volver'
        onPress={() => navigation.setParams({ title: 'Usuario 1' })}
      />
    </View>
  )
};

DetalleScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam('title', 'Cargando....'),
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    }
    // headerTintColor: '#5e5', //cambia color de texto
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen:  DetalleScreen
  }
}, 
{ 
  initialRouteName: 'Home',
  defaultNavigationOptions: { 
    // Todos los parametros
    headerStyle: {
      backgroundColor: '#fec',
    },
    headerTintColor: '#555',
    headerTitleStyle: {
      fontWeight: '900',
    }
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
