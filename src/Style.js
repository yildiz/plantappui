import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20, paddingRight: 20,
		marginTop: "20%",
		backgroundColor: '#fff',
	},
	headerTitle: {
		fontWeight: "bold",
		color: "#323643",
		marginBottom: 10
	},
	h1_1: {
		fontSize: 26
	},
	h1: {
		fontSize: 22
	},
	h2: {
		fontSize: 20
	},
	divider: {
		marginTop: 10, marginBottom: 10,
		borderBottomColor: "#9DA3B4",
		borderBottomWidth: 1
	},
	box: {
		backgroundColor: "#F3F5F7",
		height: 55,
		width: 55,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4
	},
	boxText: {
		color: "#9DA3B4"
	},
	button: {
		height: 50,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,

		elevation: 2
	}
  });
  