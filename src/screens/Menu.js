import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView
} from "react-native";
import styles from "../css/menu";
import {DrawerView} from "react-navigation";
import { DrawerItems, SafeAreaView } from 'react-navigation';


export default class Menu extends Component {

	render() {

		return (
			<View style = { styles.container }>
				<View style = { styles.profile }>
					<Image
						source = {require('../img/1.jpg')}
						style = { styles.avatar }
					/>
					<Text style = {styles.text}>Le Dinh</Text>
				</View>
				<View style = { styles.menu }>
					  <DrawerItems {...this.props} />
				</View>
			</View>
		);
	}
}
