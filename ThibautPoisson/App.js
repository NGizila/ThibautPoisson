import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/home';
import Recettes from './screens/recettes';
import Details from './screens/details';
import { Button } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Page d'accueil" component={Home} options={{titile: 'Welcome'}} />        
          {/* <Stack.Screen name="Promotion" component={Promotion} options={{titile: 'Promotion'}} />
          <Stack.Screen name="Bateau" component={Bateau} options={{titile: 'Bateau'}} />
          <Stack.Screen name="restaurant" component={restaurant} options={{titile: 'Restaurant'}} /> */}
          <Stack.Screen name="Recettes" component={Recettes} options={{titile: 'Recettes'}} />
          <Stack.Screen name="Details" component={Details} options={{titile: 'Details'}} />
          <Stack.Screen name="description_restaurant" component={description_restaurant} options={{title: 'Description restaurant'}} />
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
