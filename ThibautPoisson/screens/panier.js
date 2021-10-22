import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Background, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListModal from '../components/listmodal';
import styles from '../constants/global_product';

export default class Panier extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataCart: [],
        };
    }
    componentDidMount(){
        AsyncStorage.getItem('cart').then((cart) => {
            if(cart !== null) {
                const cartProduct = JSON.parse(cart)
                this.setState({dataCart:cartProduct})
                console.log(cart)
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
    calculateTotal = () => {
        let total = 0
        this.state.dataCart.map((item)=> {
            total = total + item.quantity * item.price
        })
        return total
    }
    clearAsyncStorage = async() => {
        AsyncStorage.clear();
    }
    render(){
        return (
        <View style={{flex:1}}>
            <ImageBackground source={require("../assets/background.png")} style={styles.image}>
            <View style={{flex:1}}>
                    <Text style={styles.text}>Choissisez vos produits</Text>
                    <View style={{flex:1}}>
                        {this.state.dataCart.map((item)=> {
                        return( <ListModal item = {item} />
                        )})}
                    </View>
            </View>
            <View style={styles.infoResto}>
                <Text style={styles.textTotal}>Total: {this.calculateTotal()}€</Text>
                <Text style={styles.textResto}>
                    Lieu de livraison(choisir): Bistrot des Gascons
                    {"\n"}
                    26 Avenue de Tourville, 75007 Paris
                    {"\n"}
                    Date de Livraison:
                    {"\n"}
                    Samedi 16 Mars, à partir de 9h
                </Text>
                
                <Button style={styles.button} onPress={this.clearAsyncStorage} title='Valider'/>
            </View>
            </ImageBackground>
        </View>
        )
    }
}
