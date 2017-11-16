import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	StyleSheet,
	ImageBackground
} from "react-native";
import styles from "../css/styles";
import home from "../css/home";
 
const MenuButton = (props)=>(
  <TouchableOpacity  onPress={() => props.navigation.navigate('DrawerOpen')} >
    <Image style={ styles.buttonMenu } source = {require('../img/icon/menu.png')}/>
  </TouchableOpacity>
);
const SettingButton = (props)=>(
  <TouchableOpacity  onPress={() => props.navigation.navigate('Setting')} >
    <Image style={ styles.buttonSetting } source = {require('../img/icon/setting.png')}/>
  </TouchableOpacity>
);
export default class Home extends Component {
	static navigationOptions = ({ navigation }) => ({
    title: 'Home',
  	headerStyle: styles.header,
    headerTitleStyle : styles.headerText,
    headerBackTitle: null,
    headerLeft: <MenuButton navigation = {navigation} />,
    headerRight: <SettingButton navigation = {navigation} />,
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
			<View style = {home.container}>

				<View style = { home.row }>
					<View style = { home.colLeft }>
						<ImageBackground source={require('../img/a.jpg')} style={ home.images }>
					    	<Text style = { home.text }>Tin học đường</Text>
					  	</ImageBackground>
						
					</View>
					<View style = { home.colRight }>
						<Text style = { home.text }>Đề luyện tập</Text>
					</View>
				</View>

				<View style = { home.row }>
					<View style = { home.colLeft }>
						<Text style = { home.text }>Tin học đường</Text>
					</View>
					<View style = { home.colRight }>
						<Text style = { home.text }>Đề luyện tập</Text>
					</View>
				</View>

				<View style = { home.row }>
					<View style = { home.colLeft }>
						<Text style = { home.text }>Tin học đường</Text>
					</View>
					<View style = { home.colRight }>
						<Text style = { home.text }>Đề luyện tập</Text>
					</View>
				</View>

				<View style = { home.rowBottom }>
					<Text style = { home.text }>Đề luyện tập</Text>
				</View>

			</View>
		);
	}
}
