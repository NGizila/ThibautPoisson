import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation} from 'react-native';
import logoHome from '../assets/products/homeLogo.png'
import logoCart from '../assets/products/cartLogo.png'

export default function Header(){
  return(
    <View style={styles.header}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
      <Image source={logoHome} style={{width:35, height: 35}} />
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

})