import React from 'react';
import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native';
import {Title} from 'react-native-paper';

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

export default class Contacte extends React.Component 
{
    render() {
        return (
            <>
            <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
                <Title> Le bateau de Thibault </Title>
                <Image style={styles.img} source= {require("../assets/TIG.png")}></Image>
                <Text>06.63.99.99.78</Text>
                <Text>lebateaudethibault@gmail.com</Text>
                <Text>www.facebook.com/lebateau de Thibeau</Text>
                <Text> (ajouter description)</Text>
            </ImageBackground>
            </>
        );
    };
}