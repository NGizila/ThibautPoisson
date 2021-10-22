import React from 'react';
import { ImageBackground, Image, View, Text} from 'react-native';
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
        <P> Test </P>
    );
  };
};