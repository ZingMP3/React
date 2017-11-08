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

  constructor(props){
    super(props);
    this.state={
      mang:[
      	{'key': 1 , 'name': "Đề thi đang diễn ra"},
      	{'key': 2 , 'name': "Tin giáo dục"},
      	{'key': 3 , 'name': "Gương mặt tiêu biểu"},

      ],
    }
  }
	render() {
		const {navigate} = this.props.navigation;

		return (
			<View >
				<FlatList
					data={this.state.mang}
			        renderItem = {({item}) => 
				        <View>
				        	<Text>{item.name}</Text>
				        </View>
					}
				/>
			</View>
		);
	}
}
