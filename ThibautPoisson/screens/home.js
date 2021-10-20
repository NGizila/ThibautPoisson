import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity} from 'react-native-gesture-handler'

export default class Home extends React.Component {
 
  cardFunction(cardInfo){
    return(
      <View key={cardInfo} style={styles.table}>
        <Card style={styles.item}>
          <Card.Content style={{textAlign: "center"}}>
            <TouchableOpacity  key={cardInfo} activeOpacity={0.8} onPress={()=>this.props.navigation.navigate(cardInfo)}>
              <Title>{cardInfo}</Title>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
    )
  }
  render() {
  const row1 = ['Produits']
  const row2 = ['Bateau','Restaurant']
  const row3 = ['Recettes','Contact']
  

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