import React, { Component } from 'react';
import {
	View,
	Text
} from "react-native";

import Home from "../screens/Home";
import Menu from "../screens/Menu";

import { StackNavigator, DrawerNavigator} from 'react-navigation';

export const MyStackNavigator = StackNavigator({
  Home: {
    screen: Home,
  },


});

export const MyDrawerNavigator = DrawerNavigator({
	Home: {
		screen: MyStackNavigator
	},
	
},
{
    contentComponent: props => <Menu {...props} />
  }
);