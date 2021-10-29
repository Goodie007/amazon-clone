import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({

	root: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: '#d1d1d1',
		borderRadius: 10,
		marginVertical: 5,
	},

	row: {
		flexDirection: 'row',
	},

	image: {
		flex: 1,
		height: 150, 
		resizeMode: 'contain',
	},

	rightContainer: {
		padding: 10,
		flex: 2,
		width: '100%'
	},

	title: {
		fontSize: 18
	},

	price: {
		fontSize: 18,
		fontWeight: 'bold'
	},

	oldPrice: {
		fontSize: 12,
		fontWeight: 'normal',
		textDecorationLine: 'line-through',
	},

	ratingsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 5
	},

	star: {
		margin: 2
	},

	quantityContainer: {
		margin:5,
		marginVertical: 10,
	},

})


export default styles;