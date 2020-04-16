import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from  'react-navigation-stack';
import { createBottomTabNavigator } from  'react-navigation-tabs';

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
  headerRight: () => <Button 
    onPress={()=> alert('lalalalalalalala')}
    title='Soy Lala'
    color='#222'
  />,
  headerStyle: { 
    backgroundColor: '#5e5'
   },
  //  headerTintColor: '#fff', //cambia color de texto
  //  headerTitleStyle: {
  //    fontWeight: '500'
  //  }
}

const DetalleScreen = ({ navigation }) => {
  const [cont, setCont] = useState(0)
  const incrementar = () => setCont(cont + 1)

  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [cont])
  const lala = navigation.getParam('lala', 'valor por defecto'); // cao de que no exista
  return (
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {cont}</Text>
      <Button
        title='volver'
        onPress={() => navigation.navigate('MiModal')}
      />
    </View>
  )
};

DetalleScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam('title', 'Cargando....'),
    headerRight: () => (
      <Button 
        onPress={navigation.getParam('incrementar')} 
        title='Mas 1'
        color='#6e6'
      />
    ),
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    }
    // headerTintColor: '#5e5', //cambia color de texto
  }
}

const AppNavigator = createBottomTabNavigator({
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

const RootStack = createStackNavigator({
  Main: AppNavigator,
  MiModal: () => <Text>Lalalalalal</Text>
},
{
  mode: 'modal',
  headerMode: 'none'
});

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
