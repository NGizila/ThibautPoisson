import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import styles from "../constants/globalcss";


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