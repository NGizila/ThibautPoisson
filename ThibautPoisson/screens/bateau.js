import React from 'react';
import {View, ImageBackground, StyleSheet, Button,Text} from 'react-native';
import {Card,Title} from 'react-native-paper';
import styles from "../constants/globalcss";

const row1 = ["Bistrot des Gascons","Les fous de l'îles"]
const row2 = ['Bistrot Landais','Villa 9-trois']
const row3 = ['Bistrot du Sommelier','Devenez partenaire!']
    
export default class Restaurant extends React.Component {

    cardFunction(cardInfo)
    {   
        return (
            <View key={cardInfo} style={styles.table}>
                <Card style={styles.item}>
                    <Card.Content style={{textAlign: "center"}}>
                        <Button title={cardInfo} onPress={() => 
                            {
                                if (cardInfo != "Devenez partenaire!")
                                {
                                    this.props.navigation.navigate("Description_restaurant", cardInfo);
                                }
                                else
                                {
                                    this.props.navigation.navigate("contacte");
                                } 
                            }
                        }>
                        </Button>
                    </Card.Content>
                </Card>
            </View>
        )   
    }

    render() {
        
        let cardData1 = row1.map(cardInfo => (
            this.cardFunction(cardInfo)
        ))
        
        let cardData2 = row2.map(cardInfo => (
            this.cardFunction(cardInfo)
        ))
        
        let cardData3 = row3.map(cardInfo => (
            this.cardFunction(cardInfo)
        ))

        return (
            <>
            <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
                <Button title="Home" style={styles.button_home} onPress={ () => this.props.navigation.navigate("home")}></Button> 
                <Title> Restaurants partenaires </Title>  
                <View>
                    <Text> Tout les restaurant partenaires avec le bateau de Thibeau </Text>
                    <Text>06.63.99.99.78</Text>
                    <Text>lebateaudethibault@gmail.com</Text>
                    <Text>www.facebook.com/lebateau de Thibeau</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <View style={styles.row}>
                                {cardData1}
                            </View>
                            <View style={styles.row}>
                                {cardData2}
                            </View>
                            <View style={styles.row}>
                                {cardData3}
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            </>
        );
    };
}
