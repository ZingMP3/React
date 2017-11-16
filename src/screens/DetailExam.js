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
			<View style = {styles.detail}>
				<Text style = {styles.text}>{params.title}</Text>
			</View>
		);
	}
}
