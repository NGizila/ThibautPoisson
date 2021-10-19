import React from 'react';
import { Text, TouchableHighlight, Image } from 'react-native';
import { Header, Left, Title, Subtitle, Right, Button, Body } from 'native-base';

const backgroundHeader = require('../assets/navbarbg.png')
export default class Header extends React.Component{
    render(){
        return(
            <Header style={styles.headerBar}>
                <Left style={{ flex: 2 }}>
                    <TouchableHighlight style={styles.profileImgContainer}>
                        <Image source={require("../assets/products/homeLogo.png")}/>
                    </TouchableHighlight>
                </Left>
            </Header>
        );
    }
}

export default Header

const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#75a3a3',
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4
      },
      profileImgContainer: {
        marginLeft: 5,
        height: 40,
        width: 40,
        borderRadius: 20
      },
      body: {
        flex: 4,
        alignItems: 'center'
      },
      subTitleText: {
        color: '#ddd'
      },
      profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20
      }
});

