import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text} from 'react-native';
import { Title } from 'react-native-paper';

const image = require("../assets/background.png")

const styles = StyleSheet.create({
  imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
  },
  img: {
    width: '40%',
    height: '40%',
    alignItems: "center",
    justifyContent: "center",
  }
})  

export default class Description_bateau extends React.Component 
{
  chargementImageselonButton()
  {
    switch (this.props.route.params)
    {
      case "De la Brise" :  return require("../assets/bateaux/deLaBrise.png");
                                    break;
      case "Saphir" : return require("../assets/bateaux/saphir.png");
                                  break;
      case "Ghast Micher" :  return require("../assets/bateaux/gastMicher.png");
                                break;
      case "Aquillon" :  return require("../assets/bateaux/aquilon.png");
                              break;
    }
  }

  render() 
  {

    let img = this.chargementImageselonButton()

    return(
      <>
      <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
        <View style={styles.header,{alignItems: 'center'}}>
          <Title> {this.props.route.params} </Title>
        </View>
        <View style={styles.container}>            
          <Image style={styles.imageDetails} source={img}></Image>
          <View>
            <Text> XXXYYYZZZ </Text>
            <View>
              <Text> Qu'il est chaud le soleil </Text>
              <Text> Quand nous sommes en vacances  </Text>
              <Text> Il y a de la joie, des hirondelles </Text>
              <Text> C'est le sud de la France </Text>
              <Text> Papa bricole au garage </Text>
              <Text> Maman lit dans la meme chaise longue </Text>
              <Text> Dans ce joli paysage </Text>
              <Text> Moi je me balade en tongue </Text>
            </View>
            <View>
              <Text> Que du bonheur! </Text>
              <Text> Que du bonheur! </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      </>
    );
  };
};