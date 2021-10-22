import React from 'react';
import { ImageBackground, Image, View } from 'react-native';
import { Title } from 'react-native-paper';
import styles from "../constants/globalcss";

const image = require("../assets/background.png")


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
          <View style={styles.header,{alignItems: 'center'}}>
            <Title> {this.props.route.params} </Title>
          </View>
          <View style={styles.container}>            
            <Image style={styles.imageDetails} source={img}></Image>
            <Title>"ajouter texte (identique pour tout les restaurants)"</Title>
          </View>
        </ImageBackground>
        </>
    );
  };
};