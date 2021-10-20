import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
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

export default class Contact extends React.Component 
{
    render() {
        return (
            <>
            <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}></ImageBackground>
            <View>
                <Title> mes contactes </Title>
            </View>
            </>
        );
    };
}