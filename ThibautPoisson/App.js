import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Home from './screens/home';
import Recettes from './screens/recettes';
import Produits from './screens/produits';
import ProduitsList from './screens/produits_list';
import HeaderLeft from './components/header'


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Page d'accueil" component={Home} options={{title: 'Welcome'}} />
        <Stack.Screen name="Produits" component={Produits} options={{
          headerLeft: () => <HeaderLeft headerDisplay="Produits Category"/>
      
        }} />
        <Stack.Screen name="ProduitsList" component={ProduitsList} options={{title: 'Produits List'}} />
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
});
