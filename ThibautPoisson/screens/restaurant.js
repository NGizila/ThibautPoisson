import React from 'react';
import { TouchableOpacity} from 'react-native-gesture-handler';
import {View, ImageBackground, Button,Text} from 'react-native';
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
                        <TouchableOpacity key={cardInfo} activeOpacity={0.8} onPress={() => 
                            {
                                if (cardInfo != "Devenez partenaire!")
                                {
                                    this.props.navigation.navigate("Description_restaurant", cardInfo);
                                }
                                else
                                {
                                    this.props.navigation.navigate("Contact");
                                } 
                            }
                        }> {cardInfo}
                        </TouchableOpacity>
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
                <Button title="Home" style={styles.button_home} onPress={ () => this.props.navigation.navigate("Page d'accueil")}></Button> 
                <View style={styles.container}>
                <Title> Restaurants partenaires </Title>  
                    <Text> Tout les restaurant partenaires avec le bateau de Thibeau </Text>
                    <Text>06.63.99.99.78</Text>
                    <Text>lebateaudethibault@gmail.com</Text>
                    <Text>www.facebook.com/lebateau de Thibeau</Text>
                </View>
                <View style={styles.container,{flex:1}}>
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
