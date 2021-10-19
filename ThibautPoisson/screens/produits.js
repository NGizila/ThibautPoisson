import React, {Component} from "react"
import { StyleSheet, Text, View } from "react-native"


const background = require('../assets/background.png')
export default class Produits extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={background} resizeMode="cover" style={styles.background}>

                </ImageBackground>
            </View>
        )

    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
});