import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';

import BottomTabNav from '../../src/Router/BottomTabNav';
import HomeScreen from '../../src/screens/HomeScreen';
import ProductScreen from '../../src/screens/Products/ProductScreen';





const Stack = createStackNavigator();



export default function HomeStack(){
	return(
		<NavigationContainer>
		  <Stack.Navigator>
		    <Stack.Screen 
		      component={BottomTabNav} 
		      name="HomeScreen"
		      options={{title: 'Home'}} 
		    />

		  </Stack.Navigator>
		</NavigationContainer>
		
		)
}