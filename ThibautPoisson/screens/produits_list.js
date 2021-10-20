import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class ProduitsList extends React.Component{
    render(){
        let productsList = this.props.route.params.products ? this.props.route.params.products : [];
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/background.png")} style={styles.image}>
                    <View style={{flex:1}}>
                        {productsList.map((value, index)=> {
                            return <Product key={index} item={value}/>
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
    }
});
