import React from 'react';
import {Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image} from 'react-native';
import poulpe from '../assets/products/poulpe.png'
import PanierModal from '../screens/paniermodal';

export default class ListModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    panierModalHandle = () =>{
        this.setState(({ visible }) => ({ visible: !visible}))
    }
    render(){
        return(
            <TouchableOpacity style={styles.button} onPress={this.panierModalHandle} >
                                {this.state.visible && < PanierModal />}
                                <View style={styles.buttonList}>
                                    <Image source={poulpe} style={styles.tinyIcon}></Image>
                                    <Text style={styles.textButton1}>{this.props.item.products.name}</Text>
                                    <Text style={styles.textButton}>{this.props.item.quantity}X</Text>
                                    <Text style={styles.textButton}>{this.props.item.price}€</Text>
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