import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, SafeAreaView } from 'react-native';
import HomeScreen from '../../src/screens/HomeScreen';
import ProductScreen from '../../src/screens/Products/ProductScreen';




const Stack = createStackNavigator();





export default function HomeStack(){
	const [searchValue, setSearchValue] = useState('');

	return(
		
		  <Stack.Navigator 
		    screenOptions={{
		    	header: () => (
		    		<HeaderComponent 
		    		searchValue={searchValue} 
		    		setSearchValue={setSearchValue} 
		    		/>
		    		)
		    }}>
		    <Stack.Screen component={HomeScreen} name="HomeScreen" options={{title: 'Home'}} >
		      {() => <HomeScreen searchValue={searchValue} /> }
		    </Stack.Screen>

		    <Stack.Screen 
		      component={ProductScreen} 
		      name="ProductDetails"
		      options={{title: 'ProductDetails'}} 
		    />

		  </Stack.Navigator>
		
		
		
		)
}