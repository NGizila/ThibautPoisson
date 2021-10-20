import React from 'react';
import { StyleSheet, Text, View,ImageBackground, SafeAreaView,Image, FlatList,StatusBar, ImageBackgroundBase } from 'react-native';
import { TouchableOpacity} from 'react-native-gesture-handler'
import Details from './details';
// import { boutons as recettes } from '../constants/recettes_boutons';

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
            <View style={styles.item}>
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

const styles = StyleSheet.create({
  imgBackground: {
    
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    
    },
    image: {
      width: 40,
      height: 40,
    },
    header: {
      marginBottom: 20,
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    categoryContainer: {
      marginBottom: 50,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      // {alignItems: 'flex-end'}
      alignItems: "center",
      marginTop: StatusBar.currentHeight,
    },

    item: {
      backgroundColor: 'rgba(0,0,0, 0.4)',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    textBouton:{
      color: 'white',
      fontsize: 30,
      flex: 1,
      marginHorizontal: 10,
      width: 300,
      flexDirecton: 'row',
    },
    title: {
        flex: 1,
        width: 300,
        flexDirecton: 'row',
    },
    });
    