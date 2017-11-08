
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: 'blue'
    },
    content: {
      flex: 6,
      backgroundColor: 'yellow'
    },
    button: {
        flex: 1,
        backgroundColor: 'green'
    },
    footer: {
        flex: 1,
        backgroundColor: 'grey'
    },
    row:{
        borderBottomWidth: 0.5, 
        // borderRightWidth: 1,
         padding: 10,
        flexDirection: "row"
    },
    left:{
        flex: 1,
        // margin: 10
        // justifyContent: "center",
        // alignItems : "center",

    },
    right:{
        flex: 3,
        // justifyContent: "center",
        // alignItems : "center",
    },
    text:{
        fontSize: 18,
        color: "black",
    },
    image: {
        width: 70,
         height: 70,
         borderRadius: 50
    }, 
    imageDetail: {
         width: 100,
         height: 100,
         borderRadius: 50,
         margin: 10
    }, 
    detail: {
        flex : 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',

    },
    textFlat: {
        color: '#000066',
        fontSize: 18,
        textAlign: "center",
        // paddingBottom: 10
    },
    textFlat1: {
        textAlign: "justify",
        padding: 10
    }

});

export default styles;
