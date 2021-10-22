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
          <Title> {this.props.route.params} </Title>
          <Image style={styles.img} source={img}></Image>
          <Title>"ajouter texte (identique pour tout les bateaux)"</Title>
        </ImageBackground>
        </>
    );
  };
};