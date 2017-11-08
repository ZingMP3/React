import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from "react-native";

export default class Rank extends Component {
	static navigationOptions = {
		drawerLabel: "Bảng xếp hạng",
		drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('../img/icon/FormStar.png')}
	        style={[{tintColor: tintColor}]}
	      />
	    ),
	}
	render() {
		return (
			<View></View>
		);
	}
}
