import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import poulpe from '../assets/products/poulpe.png'
import AsyncStorage from '@react-native-community/async-storage';


export default class ListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked : false
        };
    }

    onClickAddCart(data){
        this.setState({clicked : true})
        const itemcart = {
            products : data,
            quantity : 1,
            price : data.price
        }

        AsyncStorage.getItem('cart').then((datacart) => {
            if(datacart !== null){
                const cart = JSON.parse(datacart)
                cart.push(itemcart)
                AsyncStorage.setItem('cart', JSON.stringify(cart));
            }else{
                const cart = []
                cart.push(itemcart)
                AsyncStorage.setItem('cart', JSON.stringify(cart))
            }
            alert("Add Cart")
        })
    }

    render(){
        return(
            <TouchableOpacity style={styles.button} onPress={() => this.onClickAddCart(this.props.value)} >
                <View style={styles.buttonList}>
                        <Image source={poulpe} style={styles.tinyIcon}></Image>
                        <Text style={styles.textButton1}>{this.props.value.name}</Text>
                        <Text style={styles.textButton}>{this.state.clicked ? "OK" : ""}</Text>
                        <Text style={styles.textButton}>{this.props.value.price}€</Text>
                </View>
            </TouchableOpacity>
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
