import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';




interface ButtonProps {
	text: string;
	onPress: () => void;
}


export default function Button({text, onPress }: ButtonProps) {
	return (
		<Pressable onPress={onPress} style={styles.root}>
		  <Text style={styles.root}>{text}</Text>
		</Pressable>
		);
}


const styles = StyleSheet.create({
	root: {
		backgroundColor: '#e47911',
		marginVertical: 18,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#a15e1b',
	},

	text: {
		fontSize: 16,
		
	}
})