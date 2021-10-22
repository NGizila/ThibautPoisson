import React, { Component } from "react";
import { Alert, Modal, Text, View, TouchableOpacity  } from "react-native";
import styles from '../constants/global_product';
export default class PanierModal extends React.Component{
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible});
    }

    render(){
        const { modalVisible } = this.state;
        return (
            <View style={{flex:1}}>
                <Modal animationType = "slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed")
                }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Choissisez la quantité:
                            </Text>
                            <TouchableOpacity onPress={() => this.setState({quantity: 0})}>
                                <Text style={styles.modalText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 1})}>
                                <Text style={styles.modalText}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 2})}>
                                <Text style={styles.modalText}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 3})}>
                                <Text style={styles.modalText}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 4})}>
                                <Text style={styles.modalText}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 5})}>
                                <Text style={styles.modalText}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.setState({quantity: 5})}>
                                <Text style={styles.modalText,{"background-color": "#4CAF50"}}>Ajouter</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({quantity: 5})}>
                                <Text style={styles.modalText,{"background-color": "#f44336"}}>Supprimer</Text>
                            </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

}
