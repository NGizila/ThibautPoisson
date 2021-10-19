import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

export default class Recettes extends React.Component {
    constructor(props){
        super(props)    
      }
    render() {
   
     return(
       <View style={styles.container}>
         <Text> LOL </Text>
       </View>
     )
    }
   }
   
   const styles = StyleSheet.create({
     container: {
       justifyContent: "center",
       alignItems: "center",
       flex: 1
       // flexWrap: 'wrap',
     },
   })