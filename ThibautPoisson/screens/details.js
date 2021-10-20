import React from 'react';
import { Text, View,Image, ImageBackground } from 'react-native';
import styles from "../constants/globalcss";

export default class Details extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const item = this.props.route.params

        return(
            <>
            <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}} >{item.name}</Text>
                    </View>
                    <View>
                        <Image style={styles.imageDetails} source={require("../assets/recettes/"+item.recette.image)} />
                    </View>
                    <View style={styles.item}>
                        <Text style={{fontSize: 13, fontStyle: 'italic'}}> {item.recette.text}</Text>
                        <Text style={{fontSize: 13, fontStyle: 'italic'}}> {item.recette.descriptionImage}</Text>
                        <Text style={{fontSize: 13, fontStyle: 'italic'}}> {item.recette.bottombar}</Text>
                    </View>
                </View>
            </ImageBackground>
            </>
        )
    }
    
}
