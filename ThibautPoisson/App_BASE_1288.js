import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/home';
import Recettes from './screens/recettes';
import Details from './screens/details';
import Restaurant from './screens/restaurant';
import Description_restaurant from './screens/description_restaurant';
import Bateau from './screens/bateau';
import Contacte from './screens/contacte';

import { Button } from 'react-native';
const Stack = createStackNavigator();

/*
<Stack.Screen name="Promotion" component={Promotion} options={{titile: 'Promotion'}} />
*/

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page d'accueil" component={Home} options={{title: 'Welcome'}} />        
          <Stack.Screen name="Bateau" component={Bateau} options={{title: 'Bateau'}} />
          <Stack.Screen name="Restaurant" component={Restaurant} options={{title: 'Restaurant'}} />
          <Stack.Screen name="Recettes" component={Recettes} options={{title: 'Recettes'}} />
          <Stack.Screen name="Details" component={Details} options={{title: 'Details'}} />
          <Stack.Screen name="Description_restaurant" component={Description_restaurant} options={{title: 'Description restaurant'}} />
          <Stack.Screen name="Contacte" component={Contacte} options={{title: 'Contacte'}} />
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