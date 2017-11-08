import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from "react-native";

export default class Topic extends Component {
	static navigationOptions = {
		drawerLabel: "Luyện chủ đề",
		drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('../img/icon/Pen.png')}
	        style={[ {tintColor: tintColor}]}
	      />
	    ),
	}
	render() {
		return (
			<View></View>
		);
	}
}
