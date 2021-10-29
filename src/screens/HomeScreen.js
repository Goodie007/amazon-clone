import React, {useState} from 'react';
import { View, 
	Text, 
	StyleSheet, 
	Image, 
	FlatList, 
	SafeAreaView, 
	TextInput } from 'react-native';
	import Feather from 'react-native-vector-icons/Feather';

import ProductItems from '../components/products/ProductItems';

import products from '../data/products';



interface HeaderComponentProps{
	searchValue: string,
	setSearchValue: () => void;
}

function HeaderComponent({searchValue, setSearchValue}: HeaderComponentProps){
	return(
		<SafeAreaView style={{backgroundColor: '#22e3dd'}}>
		  <View 
		    style={{ 
		    	margin: 10, 
		    	backgroundColor: "white", 
		    	padding: 5,
		    	flexDirection: 'row',
		    	alignItems: 'center',
		    }}
		  >
		    <Feather name="search" size={20} />
		    <TextInput 
		      style={{height: 30,}} 
		      placeholder="Search..."
		      value={searchValue}
		      onChangeText={setSearchValue} />
		  </View>
		</SafeAreaView>
	)
};



export default function HomeScreen({searchValue}: {searchValue: string}){
	return(
		<View style={styles.page}>
		  <HeaderComponent />
		  <FlatList 
		     data={products}
		     renderItem={({item}) => <ProductItems item={item} />}
		     showsVerticalScrollIndicator={false}
		     keyExtractor={ (item) => item.toString() }
		  />
		 
		</View>

	);
}



const styles = StyleSheet.create({
	page: {
		padding: 10
	},

})

