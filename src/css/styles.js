
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    detail: {
       flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    hone:{
        flex: 1,
    },
    item: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
    },
    text: {
        color: "green",
        fontSize: 20,

    },
    row:{
        borderBottomWidth: 0.5, 
         padding: 10,
        flexDirection: "row"
    },
    left:{
        flex: 3,
    },
    right:{
        flex: 1,
    },
    textDetail:{
        fontSize: 18,
        color: "black",
    },
});

export default styles;
