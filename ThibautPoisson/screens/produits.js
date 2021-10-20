import React, {Component} from "react"
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Button } from "react-native-paper"
import HeaderProduits from "../components/header"
import '../App.js'
import poulpe from '../assets/products/poulpe.png'

const background = require('../assets/background.png')
const homeIcon = require('../assets/products/homeLogo.png')

const data = require('../constants/Products.json')

export default class Produits extends React.Component{
    constructor(){
        super();
        this.state = {products: []}
    }

    async componentDidMount(){
        await this.setState({products: data})
    }

    render(){
        const filterPoissons = this.state.products.filter(value=>value.category==0)
        const filterCoquillages = this.state.products.filter(value=>value.category==1)
        const filterCrustaces = this.state.products.filter(value=>value.category==2)
        const filterPromotion = this.state.products.filter(value=>value.discount!=0)
        return(
            <View style={styles.container}>
                <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                    <Text style={styles.text}>Choissisez vos produits</Text>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} 
                        onPress={() => this.props.navigation.navigate('ProduitsList', filterPoissons)}>
                            <View style={styles.buttonList}>
                                <Image source={poulpe} style={styles.bigIcon}></Image>
                                <Text style={styles.textButton}>Poissons</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} 
                        onPress={() => this.props.navigation.navigate('ProduitsList', filterCoquillages)}>
                            <View style={styles.buttonList}>
                                <Image source={poulpe} style={styles.bigIcon}></Image>
                                <Text style={styles.textButton}>Coquillages</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('ProduitsList', filterCrustaces)}>
                            <View style={styles.buttonList}>
                                <Image source={poulpe} style={styles.bigIcon}></Image>
                                <Text style={styles.textButton}>Crustaces</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}  
                        onPress={() => this.props.navigation.navigate('ProduitsList', filterPromotion)}>
                            <View style={styles.buttonList}>
                                <Image source={poulpe} style={styles.bigIcon}></Image>
                                <Text style={styles.textButton}>Promotions</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
    text: {
        fontSize: 25,
        fontStyle: "italic",
        textAlign: "center",
        color: "black",
    },
    button: {
        backgroundColor: 'rgba(0,0,0, 0.4)',
        padding: 30,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    buttonList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 30, 
        color: "white",
        textTransform: "none",
        marginLeft: 15,
    },
    bigIcon: {
        width: 100,
        height: 100,
    }
});