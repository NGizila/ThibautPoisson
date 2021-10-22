import React from 'react';
import {View, ImageBackground, StyleSheet, Image, Text} from 'react-native';
import {Title} from 'react-native-paper';
import styles from "../constants/globalcss";


export default class Contact extends React.Component 
{
    render() {
        return (
            <>
            <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
                <View style={styles.container}>
                    <Title> Le bateau de Thibault </Title>
                    <Image style={styles.img} source= {require("../assets/TIG.png")}></Image>
                    <Text>06.63.99.99.78</Text>
                    <Text>lebateaudethibault@gmail.com</Text>
                    <Text>www.facebook.com/lebateau de Thibeau</Text>
                    <Text> </Text>
                    <Text> Qu'il est chaud le soleil </Text>
                    <Text> Quand nous sommes en vacances  </Text>
                    <Text> Il y a de la joie, des hirondelles </Text>
                    <Text> C'est le sud de la France </Text>
                    <Text> Papa bricole au garage </Text>
                    <Text> Maman lit dans la meme chaise longue </Text>
                    <Text> Dans ce joli paysage </Text>
                    <Text> Moi je me balade en tongue </Text>
                    <Text> </Text>
                    <Text> Que du bonheur! </Text>
                    <Text> Que du bonheur! </Text>
                </View>
            </ImageBackground>
            </>
        );
    };
}