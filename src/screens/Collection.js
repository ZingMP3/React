import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from "react-native";

export default class Collection extends Component {
	 static navigationOptions = {
    drawerLabel: 'Bộ đề tham khảo',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/icon/Pen.png')}
        style={[ {tintColor: tintColor}]}
      />
    ),
  };
	render() {
		return (
			<View>
				<Text>Collection</Text>
			</View>
		);
	}
}
