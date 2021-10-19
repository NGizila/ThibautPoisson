import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Produits from './screens/produits-categorie';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page d'accueil" component={Home} options={{titile: 'Welcome'}} />
        <Stack.Screen name="Page de produits" component={Produits} options={{title: 'Choissisez vos produits'}} />
        {/* <Stack.Screen name="Promotion" component={Promotion} options={{titile: 'Promotion'}} />
        <Stack.Screen name="Bateau" component={Bateau} options={{titile: 'Bateau'}} />
        <Stack.Screen name="Resto" component={Restaurant} options={{titile: 'Resto'}} />
        <Stack.Screen name="Recettes" component={Recettes} options={{titile: 'Recettes'}} />
        <Stack.Screen name="Contacte" component={AddFriends} options={{titile: 'Contacte'}} /> */}
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
