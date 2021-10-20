import React, {Component} from "react"
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import { Button } from "react-native-paper"
import HeaderProduits from "../components/header"
import '../App.js'

const background = require('../assets/background.png')
const homeIcon = require('../assets/products/homeLogo.png')
const poulpe = require('../assets/products/poulpe.png')

const data = require('../constants/Products.json')

export default class Produits extends React.Component{
    constructor(){
        super();
        this.state = {products: []}
    }

    componentDidMount(){
        fetch(data)
            .then(res => res.json())
            .then(products => this.setState({products}))
    }

    render(){
        const {products} = this.state;
        return(
            <View style={styles.container}>
                <ImageBackground source={background} resizeMode="cover" style={styles.image}>
                    <Text style={styles.text}>Choissisez vos produits</Text>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.button} 
                        data={this.state.products.filter(value=>value.category==0)}
                        onPress={() => this.props.navigation.navigate('ProduitsList')}>
                            <Image source={{poulpe}} size={24}></Image>
                            <Text style={styles.textButton}>Poissons</Text>
                        </TouchableOpacity>
                        <Button style={styles.button} 
                        data={this.state.products.filter(value=>value.category==1)}
                        onPress={() => this.props.navigation.navigate('ProduitsList')}>
                            <Text style={styles.textButton}>Coquillages</Text>
                        </Button>
                        <Button style={styles.button}
                        data={this.state.products.filter(value=>value.category==2)}
                        onPress={() => this.props.navigation.navigate('ProduitsList')}>
                            <Text style={styles.textButton}>Crustaces</Text>
                        </Button>
                        <Button style={styles.button}  
                        data={this.state.products.filter(value=>value.discount!=0)}
                        onPress={() => this.props.navigation.navigate('ProduitsList')}>
                            <Text style={styles.textButton}>Promotions</Text>
                        </Button>
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
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 50,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    textButton: {
        fontSize: 30, 
        color: "white",

    }
});