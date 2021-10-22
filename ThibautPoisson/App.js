import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, navigation } from 'react-native';


import Home from './screens/home';
import Recettes from './screens/recettes';
import Produits from './screens/produits';
import ProduitsList from './screens/produits_list';
import Panier from './screens/panier';
import Details from './screens/details';
import Restaurant from './screens/restaurant';
import Description_restaurant from './screens/description_restaurant';
import Description_bateau from './screens/description_bateau';
import Bateau from './screens/bateau';
import Contact from './screens/contact';

import navBackground from './assets/navbarbg.png'
import logoHome from './assets/products/homeLogo.png'
import logoCart from './assets/products/cartLogo.png'
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  const headerProducts = ({navigation}) => ({
      headerTitle: () => <Image source={navBackground} style={{width : 240, height : 50}}></Image>,
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerStyle: {
          textAlign: 'center',
          flex: 1,
          backgroundColor: 'rgb(0,0,0)',
      },  
      headerRight: () => (
          <View>
          <Button onPress={() => navigation.navigate('Panier')} >
            <Image style={styles.homeLogo} source={logoCart} />
          </Button>
          </View>
          
      ),
      headerLeft: () => (
        <View>
          <Button onPress={() => navigation.navigate("Page d'accueil")}><Image  style={styles.homeLogo} source={logoHome}/></Button>
        </View>
      ),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Page d'accueil" component={Home} options={{title: "Page d'accueil"}} />
        <Stack.Screen name="Produits" component={Produits} options={headerProducts} />
        <Stack.Screen name="ProduitsList" component={ProduitsList} options={headerProducts} />
        <Stack.Screen name="Panier" component={Panier} options={headerProducts} />
        <Stack.Screen name="Bateau" component={Bateau} options={{title: 'Bateau'}} />
        <Stack.Screen name="Restaurant" component={Restaurant} options={{title: 'Restaurant'}} />
        <Stack.Screen name="Recettes" component={Recettes} options={{title: 'Recettes'}} />
        <Stack.Screen name="Details" component={Details} options={{title: 'Details'}} />
        <Stack.Screen name="Description_bateau" component={Description_bateau} options={{title: 'Description bateau'}} />
        <Stack.Screen name="Description_restaurant" component={Description_restaurant} options={{title: 'Description restaurant'}} />
        <Stack.Screen name="Contact" component={Contact} options={{title: 'Contact'}} />
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


