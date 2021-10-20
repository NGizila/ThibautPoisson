import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, navigation } from 'react-native';
import Home from './screens/home';
import Recettes from './screens/recettes';
import Produits from './screens/produits';
import ProduitsList from './screens/produits_list';
import Panier from './screens/panier';

import navBackground from './assets/navbarbg.png'
import logoHome from './assets/products/homeLogo.png'
import logoCart from './assets/products/cartLogo.png'
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  const headerProducts = {
      headerTitle: (props) => <Image source={navBackground} style={{width : 240, height : 50}}></Image>,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerStyle: {
          textAlign: 'center',
          flex: 1,
          backgroundColor: 'rgb(0,0,0)',
      },  
      headerRight: (props) => (
          <View>
          <Button onPress={() => props.navigation.navigate('Panier')} >
            <Image style={styles.homeLogo} source={logoCart} />
          </Button>
          </View>
          
      ),
      headerLeft: (props) => (
          <Text {...props}><Image  style={styles.homeLogo} source={logoHome}/></Text>
      ),
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Page d'accueil" component={Home} options={{title: 'Welcome'}} />
        <Stack.Screen name="Produits" component={Produits} options={headerProducts} />
        <Stack.Screen name="ProduitsList" component={ProduitsList} options={headerProducts} />
        <Stack.Screen name="Panier" component={Panier} options={headerProducts} />
        {/* <Stack.Screen name="Promotion" component={Promotion} options={{titile: 'Promotion'}} />
        <Stack.Screen name="Bateau" component={Bateau} options={{titile: 'Bateau'}} />
        <Stack.Screen name="Resto" component={Restaurant} options={{titile: 'Resto'}} /> */}
        <Stack.Screen name="Recettes" component={Recettes} options={{titile: 'Recettes'}} />
        {/* <Stack.Screen name="Contacte" component={AddFriends} options={{titile: 'Contacte'}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeLogo: {
    width: 24,
    height: 24,
    marginEnd: 16,
    marginStart: 16,
  }
});
