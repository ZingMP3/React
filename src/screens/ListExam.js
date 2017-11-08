import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	Image,
	FlatList

} from "react-native";
import styles from "../css/styles";

export default class ListExam extends Component {
	constructor(props){
    super(props);
    this.state={
      array:[],
    }
  }
	render() {
		const {navigate} = this.props.navigation;
		return (
			<View style = {styles.container}>
				<FlatList
					 data={this.state.mang}
			        //tro den tung dong cua flatlist
			        renderItem = {({item}) => 
			        <View style = {styles.row}>          
			          <View style = {styles.left}>
			          	<Text style = {styles.text}>{item.title}</Text>
			            
			          </View>
			          <View style = {styles.right}>
			            <Button 
			            	onPress = {() => { navigate( 'DetailExam', {title: item.title, class: item.class, subject: item.subject})}}
							  title="Vào thi"
							  color="#0000EE" />
			          </View>
			        </View>
			       }
				/>
			</View>
		);
	}
		componentDidMount(){
	    fetch("http://192.168.1.177/DemoReact/demo3.php")
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({
	          mang:responseJson
	        });
	      })
	      .catch((error) => {
	        console.error(error);
	      });
	  }
}
