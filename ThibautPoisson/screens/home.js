import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

export default class Home extends React.Component {
 
  cardFunction(cardInfo){
    return(
      <View key={cardInfo} style={styles.table}>
        <Card style={styles.item}>
          <Card.Content style={{textAlign: "center"}}>
            <Button  onPress={()=>this.props.navigation.navigate(cardInfo)}>
              <Title>{cardInfo}</Title>
            </Button>
          </Card.Content>
        </Card>
      </View>
    )
  }
  render() {
  const row1 = ['Produits']
  const row2 = ['Bateaux','Restaurants']
  const row3 = ['Recettes','Contacte']
  // const table = ['Products','Bateau','Restaurant','Promotion','Contact']
  // const table = [row1,row2]
  

  let cardData1 = row1.map(cardInfo => (
    this.cardFunction(cardInfo)
  ))
  let cardData2 = row2.map(cardInfo => (
    this.cardFunction(cardInfo)
  ))
  let cardData3 = row3.map(cardInfo => (
    this.cardFunction(cardInfo)
  ))


  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <View  style={styles.row} >
            {cardData1}  
            {/* <Button title={cardData1} onPress={()=>goToScreen(cardData1)}> */}
            
              {cardData1}
            
              {/* </Button> */}  
          </View>
          <View  style={styles.row}>
            {cardData2}
          </View>
          <View  style={styles.row}>
            {cardData3}
          </View>
        </View>
      </View>
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

  table: {
    flex: 1,
    width: 300,
    flexDirecton: 'row',

  },
  item: {
    // width: 300,
    // padding: 20,
    margin: 4,
    flex: 1,
    flexDirection: "column"

  },
  column: {
    flex: 1,
    // alignItems: "center", 
    // justifyContent: "center",
    flexDirection: "column"
  },
  row: {
    // flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff',
  },

})