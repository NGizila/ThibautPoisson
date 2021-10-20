import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import poulpe from '../assets/products/poulpe.png'

export default class ProduitsList extends React.Component{
    render(){
        const productsList = this.props.route.params
        console.log(productsList)
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/background.png")} style={styles.image}>
                    <Text style={styles.text}>Choissisez vos produits</Text>
                    <View style={{flex:1}}>
                        {productsList.map((value, index)=> {
                        return(
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonList}>
                                <Image source={poulpe} style={styles.tinyIcon}></Image>
                                <Text style={styles.textButton1}>{value.name}</Text>
                                <Text style={styles.textButton}>{value.price}€</Text>
                            </View>
                        </TouchableOpacity>)
                        })}
                    </View>
                </ImageBackground>
            </View>        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        fontStyle: "italic",
        textAlign: "center",
        color: "black",
    },
    button: {
        backgroundColor: 'rgba(0,0,0, 0.4)',
        padding: 30,
    },
    buttonList: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textButton1: {
        fontSize: 30,
        flex: 1,
        color: "white",
        marginLeft: 15,
    },
    textButton: {
        fontSize: 30, 
        color: "white",
        textTransform: "none",
    },
    tinyIcon: {
        width: 54,
        height: 50,
    }
});
