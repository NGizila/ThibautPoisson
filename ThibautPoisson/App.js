import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Page d'accueil" component={Home} options={{titile: 'Welcome'}} />
    //     <Stack.Screen name="Promotion" component={Promotion} options={{titile: 'Promotion'}} />
    //     <Stack.Screen name="Bateau" component={Bateau} options={{titile: 'Bateau'}} />
    //     <Stack.Screen name="Resto" component={Restaurant} options={{titile: 'Resto'}} />
    //     <Stack.Screen name="Recettes" component={Recettes} options={{titile: 'Recettes'}} />
    //     <Stack.Screen name="Contacte" component={AddFriends} options={{titile: 'Contacte'}} />
    //   </Stack.Navigator>
    // </NavigationContainer>
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
