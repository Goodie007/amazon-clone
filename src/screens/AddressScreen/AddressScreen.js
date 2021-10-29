import React, {useState} from 'react';
import { StyleSheet, Text, 
	TextInput, 
	View, 
	Alert, 
	KeyboardAvoidingView, 
	ScrollView,
	Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import styles from './styles';
import Button from '../../components/Button/Button';


const countries = countryList.getData();


export default function AddressScreen(){
	const [country, setCountry] = useState(countries[0].code);
	const [fullname, setFullname] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [addressError, setAddressError] = useState('')
	const [city, setCity] = useState('');

	console.log(fullname);

	const onCheckout = () => {
		if(!!addressError){
			Alert.alert('Fix all errors before submitting');
			return;
		}

		if(!fullname){
			Alert.alert('Please fill in the full name field');
			return;
		}

		if(!phone){
			Alert.alert('Please fill in the phone number field');
			return;
		}

		if(!address){
			Alert.alert('Please fill in the address field');
		}

		console.warn('Success. Checked Out!')
	};

	const validateAddress = () => {
		if(address.length < 5) {
			setAddressError('Address is too short')
		}

		if(address.length > 15){
			setAddressError('Address is too long')
		}
	}
	


	return(
		<KeyboardAvoidingView
		   behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
		   keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
		  <ScrollView>
		    <View>
		      <Picker selectedValue={country} onValueChange={setCountry}> 
		        {countries.map(country => (
		        	<Picker.Item value={country.code} label={country.name} />
		        ))}
		      </Picker>
		    </View>

		    {/*Full Name */}
		    <View style={styles.row}>
		      <Text style={styles.label}>Full Name (First and Last Name) </Text>
		      <TextInput 
		        style={styles.input} 
		        placeholder="Full Name" 
		        value={fullname} 
		        onChangeText={setFullname} 
		       />
		    </View>


		    {/*Phone Number */}
		    <View style={styles.row}>
		      <Text style={styles.label}>Phone Number</Text>
		      <TextInput 
		        style={styles.input} 
		        placeholder="Phone Number" 
		        value={phone} 
		        onChangeText={setPhone}
		        keyboardType={'phone-pad'} 
		      />
		    </View>


		    {/*Address */}
		    <View style={styles.row}>
		      <Text style={styles.label}>Address</Text>
		      <TextInput 
		        style={styles.input} 
		        placeholder="Address" 
		        value={address} 
		        onEndEditing={validateAddress}
		        onChangeText={text => {
		      	  setAddress(text);
		          setAddressError('');
		       }} 
		      />
		      {!!addressError && (
		    	  <Text style={styles.errorLabel}>{addressError}</Text>
		      )}
		    </View>


		    {/*City */}
		    <View style={styles.row}>
		      <Text style={styles.label}>City</Text>
		      <TextInput 
		        style={styles.input} 
		        placeholder="City" 
		        value={city} 
		        onChangeText={setCity} 
		      />
		    </View>

		    <Button text='Checkout' onPress={onCheckout} />

		  </ScrollView>
		</KeyboardAvoidingView>

	)
}