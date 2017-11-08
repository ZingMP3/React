import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from "react-native";
// import styles from "../style/styles";

const MenuButton = (props)=>(
  <TouchableOpacity  onPress={() => props.navigation.navigate('DrawerOpen')} >
    <Image style={{marginLeft: 15}} source = {require('../img/icon/menu.png')}/>
  </TouchableOpacity>
);
export default class Exam extends Component {
	 static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Đề luyện tập',
    headerBackTitle: null,
    headerLeft: <MenuButton navigation = {navigation} />,
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/icon/Bookmark.png')}
        style={[ {tintColor: tintColor}]}
      />
    ),
});
	render() {
		return (
			<View >
				<Text>Exam</Text>
			</View>
		);
	}
}
