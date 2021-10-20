import React from 'react';
import { StyleSheet,Text, View,StatusBar,ImageBackground } from 'react-native';

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

const styles = StyleSheet.create({
    container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    flex: 1
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    item: {
        backgroundColor: 'white',//'#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
    },
    header: {
        marginBottom: 20,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    
})
