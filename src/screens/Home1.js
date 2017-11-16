import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	StyleSheet
} from "react-native";
import styles from "../css/styles";
 
const MenuButton = (props)=>(
  <TouchableOpacity  onPress={() => props.navigation.navigate('DrawerOpen')} >
    <Image style={{marginLeft: 15}} source = {require('../img/icon/menu.png')}/>
  </TouchableOpacity>
);
export default class Home extends Component {
	static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerBackTitle: null,
    headerLeft: <MenuButton navigation = {navigation} />,
    drawerLabel: 'Trang chủ',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/icon/home.png')}
        style={[ {tintColor: tintColor}]}
      />
    ),
  });


	render() {
		const {navigate} = this.props.navigation;

		return (
			<View style = {styles.home}>
				<TouchableOpacity  onPress = { () => { navigate('ListExam')}}>
					<View style = {styles.item}>
						<Text style = {styles.text}>Đề thi đang diễn ra</Text>
					</View>
				</TouchableOpacity>
				<View style = {styles.item}>
					<Text style = {styles.text}>Tin giáo dục</Text>
				</View>

				<View style = {styles.item}>
					<Text style = {styles.text}>Gương mặt tiêu biểu</Text>
				</View>
			</View>
		);
	}
}
