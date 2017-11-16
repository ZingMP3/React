import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3D8AE1',
	},
	profile: {
		flex: 1,
		backgroundColor: "#3D8AE1",
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	menu: {
		flex: 3,
		backgroundColor: '#F5FCFF',
		
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		
	},
	text: {
		color: '#fff',
		fontSize: 20
	}
});

export default styles;