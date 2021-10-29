import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../../src/screens/HomeScreen';
import ShoppingCartScreen from '../../src/screens/ShoppingCartScreen/ShoppingCartScreen';
import ProductScreen from '../../src/screens/Products/ProductScreen';
import ShoppingCartNav from '../../src/Router/ShoppingCartNav'
;




const Tab = createBottomTabNavigator();



export default function Router(){
	return(
		
		  <Tab.Navigator 
		     screenOptions={{
		     	headerShown: false,
		     	tabBarShowLabel: false,
		     	tabBarActiveTintColor: "#e47911",
		     	tabBarInactiveTintColor: "#ffbd7d",
		     }}
		     >
		    <Tab.Screen 
		      component={HomeScreen} 
		      name="Home"
		      options={{
		      	tabBarIcon: ({color}) => (
		      		<Entypo name="home" color={color} size={25} />
		      	),
		      }} 
		    />
		    <Tab.Screen 
		      component={HomeScreen} 
		      name="profile"
		      options={{
		      	tabBarIcon: ({color}) => (
		      		<Entypo name="user" color={color} size={25} />
		      	),
		      }} 
		    />
		    <Tab.Screen 
		      component={ShoppingCartNav} 
		      name="shopping cart"
		      options={{
		      	tabBarIcon: ({color}) => (
		      		<Entypo name="shopping-cart" color={color} size={25} />
		      	),
		      }} 
		    />
		    <Tab.Screen 
		      component={HomeScreen} 
		      name="more"
		      options={{
		      	tabBarIcon: ({color}) => (
		      		<Entypo name="menu" color={color} size={25} />
		      	),
		      }} 
		    />
		  </Tab.Navigator>
		
		)
}