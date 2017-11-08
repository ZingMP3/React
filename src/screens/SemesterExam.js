import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from "react-native";

export default class SemesterExam extends Component {
	static navigationOptions = {
		drawerLabel: "Thi học kỳ",
		drawerIcon: ({ tintColor }) => (
	      <Image
	        source={require('../img/icon/Bookmark.png')}
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
