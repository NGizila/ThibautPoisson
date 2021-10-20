import React from 'react';
import {View, ImageBackground, StyleSheet, Button,Text} from 'react-native';
import {Card,Title} from 'react-native-paper';

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
    },
    
    container: {
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1
    },
    
    table: {
        flex: 1,
        width: 250,
        flexDirecton: 'row',
    },
    item: {
        margin: 1,
        flex: 1,
        flexDirection: "column"
    },
      
    column: {
        flex: 1,
        flexDirection: "column"
    },
      
    row: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    button_home: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        justifyContent: screenLeft
    },

    text: {
        alignItems: "center",
        justifyContent: "center",
    }
})

const row1 = ["De la Brise","Saphir"]
const row2 = ['Ghast Micher','Aquillon']
const row3 = ['Contact','Contact']
    
export default class Restaurant extends React.Component {

    cardFunction(cardInfo)
    {   
        return (
            <View key={cardInfo} style={styles.table}>
                <Card style={styles.item}>
                    <Card.Content style={{textAlign: "center"}}>
                        <Button title={cardInfo} onPress={() => 
                            {
                                if (cardInfo != "Contact")
                                {
                                    this.props.navigation.navigate("Description_bateau", cardInfo);
                                }
                                else
                                {
                                    this.props.navigation.navigate("Contacte");
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
                <Title> Nos bateaux partenaires </Title>  
                <View>
                    <Text> Tout les eaux mènent à Thibeau </Text>
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
