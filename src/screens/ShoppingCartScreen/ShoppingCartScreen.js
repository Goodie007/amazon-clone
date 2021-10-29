import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import products from '../../data/cart';
import CartProductItems from '../../components/CartProductItems/CartProductItems'; 
import Button from '../../components/Button/Button';


export default function ShoppingCartScreen(){
	const totalPrice = products.reduce(
		(summedPrice, product) =>
		   summedPrice + product.item.price * product.quantity,
		   0,
		);

	const navigation = useNavigation();

	const onCheckout = () => {
		navigation.navigate('Address');
	}

	return (
		<View>
		   
	       {/* Render product Component */}
	       <FlatList 
	          data={products} 
	          renderItem={({item}) => <CartProductItems cartItem={item} />}
	          showsVerticalScrollIndicator={false}
	          ListHeaderComponent={() => (
	          	<View>
		          <Text style={{fontSize: 18}}>
		            Subtotal ({products.length} items): {' '}
		            <Text style={{color: '#e47911', fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
		          </Text>
		          <Button
		            text="Proceed to Checkout"
		            onPress={onCheckout}
		            containerStyles={{backgroundColor: '#f7e300', borderColor: '#c7b702'}} 
		          />
		        </View>
		     )}
	       />
		</View>
		)
}

