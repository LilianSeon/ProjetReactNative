import React, { Component } from 'react';
import {View, Text, StyleSheet, Image  } from 'react-native';

class NoteBox extends Component{

    render(){

        let {note} = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.note}>{note}
                        <Text style={{fontSize: 10,fontWeight: "normal"}}>/10</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: 80,
        position: "absolute",
        left: 10,
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.08,
        elevation: 5,
    },
    note:{
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default NoteBox;