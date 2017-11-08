import React, { Component } from 'react';
import {
	View,
	Text
} from "react-native";
import styles from "../css/styles";

export default class DetailExam extends Component {
	render() {
		const { params } = this.props.navigation.state;
		const {goBack} = this.props.navigation;
		return(
			<View style = {styles.container}>
				<Text >{params.title}</Text>
				<Text >{params.class}</Text>
				<Text >{params.subject}</Text>
			</View>
		);
	}
}
