import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from "react-native";

const home = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#003D79',
		padding: 5
	},
	images: {
		flex: 1
	},
	
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	
	colLeft: {
		flex: 1,
		flexDirection: 'column',
		borderWidth: 0.5,
    	borderColor: '#d6d7da',
    	marginBottom: 5
	},

	colRight: {
		flex: 1,
		flexDirection: 'column',
		borderWidth: 0.5,
    	borderColor: '#d6d7da',
    	marginLeft: 5,
    	marginBottom: 5
	},

	text: {
		color: '#fff',
		fontSize: 20,
		alignContent: 'center'
	},
	rowBottom: {
		flex: 1,
		borderWidth: 0.5,
    	borderColor: '#d6d7da',

	}
});

export default home;