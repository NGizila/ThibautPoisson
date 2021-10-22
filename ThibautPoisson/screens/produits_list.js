import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ListComponent from '../components/listcomponent';
import styles from '../constants/global_product';

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
                        return( <ListComponent value = {value}/>
                        )})}
                    </View>
                </ImageBackground>
            </View>        
        )
    }
}


