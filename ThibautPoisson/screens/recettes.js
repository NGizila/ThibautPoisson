import React from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView,Image, FlatList,StatusBar, ImageBackgroundBase } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import Details from './details';
import styles from "../constants/globalcss";

export default class Recettes extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
    const recettes = require('../constants/recettes_boutons.json')
    const recettes_intro = require('../constants/recettes_intro.json')
      
    const Item = ({ item }) => (
        <View>
            <TouchableOpacity 
                    key={item.id} 
                    activeOpacity={0.8} 
                    onPress={()=>this.props.navigation.navigate('Details',item)}
            >
            <View style={styles.itemRecettes}>
                <Image style={styles.image} source={require("../assets/recettes/"+item.image_icon)} />
                <Text style={styles.textBouton}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        </View>
      );

    const renderItem = ({ item }) => (
        <Item item={item} />
      );

    let recettesIntroData = recettes_intro.map(data => (
      <View key={data.id}>
        <Text style={{fontSize: 13, fontStyle: 'italic'}}>
          {data.telephone}
        </Text>
        <Text style={{fontSize: 10, fontStyle: 'italic'}}>
          {data.mail}
        </Text>
        <Text style={{fontSize: 10, fontStyle: 'italic'}}>
          {data.pageWeb}
        </Text>
      </View>
    ))

     return(
      <>
      <ImageBackground style={styles.imgBackground} source={require("../assets/background.png")}>
        <View style={styles.container}>
          <View style={styles.header}>
                <View>
                  <Text style={{fontSize: 25, fontWeight: 'bold'}}>Nos recettes</Text>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    ThibaultPoisson
                  </Text>
                </View>
            </View>
            <View style={styles.categoryContainer}>
              <Text style={{fontSize: 15, fontStyle: 'italic', fontWeight: 'bold'}}>
                Toutes les recettes du bateau de Thibault
              </Text>
              {recettesIntroData}
            </View>
            
          <SafeAreaView style={styles.container}>
              <FlatList
                  data={recettes}
                  renderItem={renderItem}
                  keyExtractor={item => item}
                  numColumns={2}
              />
          </SafeAreaView>
        </View>
      </ImageBackground>
      </>
       
     )
    }
   }

    