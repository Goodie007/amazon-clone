import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native';
import ShoppingCartScreen from '../../src/screens/ShoppingCartScreen/ShoppingCartScreen';
import AddressScreen from '../../src/screens/AddressScreen/AddressScreen';




const Stack = createStackNavigator();


export default function HomeStack(){
	return(
		
		  <Stack.Navigator>
		    <Stack.Screen 
		      component={ShoppingCartScreen} 
		      name="Cart"
		      options={{title: 'Shopping Cart'}} 
		    />

		    <Stack.Screen 
		      component={AddressScreen} 
		      name="Address"
		      options={{title: 'Address'}} 
		    />

		  </Stack.Navigator>
		
		
		)
}