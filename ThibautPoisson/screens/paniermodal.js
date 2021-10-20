import React, { Component } from "react";
import { render } from "react-dom";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity  } from "react-native";

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
                    </View>
                </Modal>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});