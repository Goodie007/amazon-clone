import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import Button from '../../components/Button/Button';
import product from '../../data/product';




export default function ProductScreen(){
	const [selectedOption, setSelectedOption] = useState(
		product.options ? product.options[0] : null);

	const [quantity, setQuantity] = useState(1);

	const route = useRoute();
	console.log(route.params);
	


	return(
		<ScrollView style={styles.root}>
		  <Text sytle={styles.title}>{product.title}</Text>

		  {/* Image carousel */}
		  <ImageCarousel images={product.images} />


	      {/* Option Selector */}
	      <Picker>
	        selectedValue={selectedOption}
	        onValueChange={(itemValue) => setSelectedOption(itemValue)}
	        {product.options.map(option => (
	        	 <Picker.Item label={option} value={option} />
	        ))}
	      </Picker>

	      {/* Price */}
	       <Text style={styles.price}>
		       from ${product.price}
		       {product.oldPrice &&  (
		       	<Text style={styles.oldPrice}>{product.oldPrice}</Text>
		      )}
		   </Text>

		   {/* Description */}
		   <Text style={styles.description}>
		      {product.description}
		   </Text>

	      {/* Quantity Selector */}
	      <QuantitySelector quantity={quantity}  setQuantity={setQuantity} />

	      {/* Button */}
	      <Button text={'Add To Cart'} onPress={() => {console.warn('Add To Cart')}} />
	      <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now')}} />
		</ScrollView>
		)
}