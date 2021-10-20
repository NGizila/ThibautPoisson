import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet} from 'react-native';

import restaurant from './screens/restaurant';
import home from './screens/home';
import description_restaurant from './screens/description_restaurant'
import contacte from './screens/contacte';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="restaurant" component={restaurant} options={{title: 'Restaurant'}} />
        <Stack.Screen name="home" component={home} options={{title: 'Accueil'}} />
        <Stack.Screen name="description_restaurant" component={description_restaurant} options={{title: 'Description restaurant'}} />
        <Stack.Screen name="contacte" component={contacte} options={{title: 'Contacte'}} />
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