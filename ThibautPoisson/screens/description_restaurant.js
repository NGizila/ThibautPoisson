import React from 'react';
import { StyleSheet, ImageBackground, Image, View} from 'react-native';
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

export default class Description_restaurant extends React.Component 
{
  chargementImageselonButton()
  {
    switch (this.props.route.params)
    {
      case "Bistrot des Gascons" :  return require("../assets/restaurants/desGascons.png");
                                    break;
      case "Les fous de l'îles" : return require("../assets/restaurants/fousDeLIle.png");
                                  break;
      case "Bistrot Landais" :  return require("../assets/restaurants/bistrotLandais.png");
                                break;
      case "Villa 9-trois" :  return require("../assets/restaurants/villa9Trois.png");
                              break;
      case "Bistrot du Sommelier":  return require("../assets/restaurants/duSommelier.png");
                                    break;
    }
  }

  render() 
  {

    let img = this.chargementImageselonButton()

    return(
        <>
        <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
          <Title> {this.props.route.params} </Title>
          <Image style={styles.img} source={img}></Image>
          <Title>"ajouter texte (identique pour tout les restaurants)"</Title>
        </ImageBackground>
        </>
    );
  };
};