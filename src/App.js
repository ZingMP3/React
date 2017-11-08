import React, {Component} from "react";
import {MyDrawerNavigator} from "./Router";
import Home from "./screens/Home";
import ListExam from "./screens/ListExam";

export default class App extends Component {
	 
	render(){
		return(
			<MyDrawerNavigator/>
		
		);
	}
}