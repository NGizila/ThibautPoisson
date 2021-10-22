import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { TouchableOpacity} from 'react-native-gesture-handler';
import styles from "../constants/globalcss";

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
    <>
      <ImageBackground  style={styles.imgBackground} source={require("../assets/background.png")}>
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
    </ImageBackground>
    </>
  )
 }
}
