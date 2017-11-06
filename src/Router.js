import React, { Component } from 'react';
import {
	View,
	Text
} from "react-native";
import Home from "./screens/Home";
import Exam from "./screens/Exam";
import Rank from "./screens/Rank";
import Topic from "./screens/Topic";
import Collection from "./screens/Collection";
import SemesterExam from "./screens/SemesterExam";
import ListExam from "./screens/ListExam";
import DetailExam from "./screens/DetailExam";
import { StackNavigator, DrawerNavigator} from 'react-navigation';

export const MyStackNavigator = StackNavigator({
  Home: {
    screen: Home,
  },
  DetailExam: {
    screen: DetailExam,
  },
  ListExam: {
    screen: ListExam,
  },
});

export const MyDrawerNavigator = DrawerNavigator({
	Home: {
		screen: MyStackNavigator
	},
	Exam: {
	  	screen: Exam,
	},
	SemesterExam: {
	  	screen: SemesterExam,
	},
	Collection: {
    	screen: Collection,
	},
	Topic: {
	  	screen: Topic,
	},
	Rank: {
	  	screen: Rank,
	},
});