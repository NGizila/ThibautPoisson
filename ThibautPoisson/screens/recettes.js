import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList,StatusBar } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

export default class Recettes extends React.Component {
    render() {
    const recettes = require('../constants/recettes.json')
    
    const Item = ({ name }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
        </View>
      );

    const renderItem = ({ item }) => (
        <Item name={item.name} />
      );

     return(
       <View style={styles.container}>
         {/* {jsonData} */}
         
        <SafeAreaView style={styles.container}>
            <FlatList
                data={recettes}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                numColumns={2}
            />
        </SafeAreaView>
         
       </View>
     )
    }
   }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: StatusBar.currentHeight,
    },

    item: {
      backgroundColor: 'white',//'#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
        flex: 1,
        width: 300,
        flexDirecton: 'row',
    
    },
    });
    