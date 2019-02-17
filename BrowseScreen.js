import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, MaskedViewIOS} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Input from './components/Input';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: "test",
			password: "test"
		}
	}
  render() {
	const GradientText = props => (
		<MaskedViewIOS maskElement={<Text {...props} />}>
		  <LinearGradient colors={['#0AC4BA', '#2BDA8E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
			<Text {...props} style={[props.style, { opacity: 0 }]} />
		  </LinearGradient>
		</MaskedViewIOS>
	  );
	  
    return (
      <LinearGradient colors={['#fff', '#fcfcfc']} style={styles.container}>
	  	<View style={{ marginBottom: 40, flexDirection: "row" }}>
			<View style={[styles.tab, styles.tabActive]}><GradientText style={styles.tabTitle}>Products</GradientText></View>
			<View style={styles.tab}><Text style={styles.tabTitle}>Inspirations</Text></View>
			<View style={styles.tab}><Text style={styles.tabTitle}>Shop</Text></View>
		</View>

	  </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20, paddingRight: 20,
		marginTop: "20%",
		backgroundColor: '#fff',
	},
	tabActive: {
		borderBottomColor: "#2BDA8E"
	},
	tabTitle: {
		fontSize: 16,
		color: "#000",
		marginRight: 50
	},
	tab: {
		borderBottomColor: "#EDEEF1",
		borderBottomWidth: 1
	}
});