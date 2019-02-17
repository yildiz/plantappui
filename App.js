import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, MaskedViewIOS} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import gStyles from './src/Style';


export default class App extends Component {
  render() {
	const GradientText = props => (
		<MaskedViewIOS maskElement={<Text {...props} />}>
		  <LinearGradient colors={['#0AC4BA', '#2BDA8E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
			<Text {...props} style={[props.style, { opacity: 0 }]} />
		  </LinearGradient>
		</MaskedViewIOS>
	  );


    return (
      <LinearGradient colors={['#fff', '#fcfcfc']} style={gStyles.container}>
	  	<View style={styles.texts}>
	  		<View style={{ flexDirection: "row"}}>
				<Text style={[gStyles.headerTitle, gStyles.h1_1]}>Your home. </Text>
				<GradientText style={[gStyles.headerTitle, gStyles.h1_1]}>Greener.</GradientText>
			</View>
			<Text style={styles.altTitle}>Enjoy the experience.</Text>
		</View>
		<Image style={{ marginTop: 40, marginBottom: 20, alignSelf: "stretch", marginLeft: -20 }} source={require('./plant.png')} />

		<TouchableOpacity style={{ alignSelf: 'stretch', marginBottom: 25 }}>
			<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={gStyles.button} colors={['#0AC4BA', '#2BDA8E']}>
				<Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
			</LinearGradient>
		</TouchableOpacity>

		<TouchableOpacity style={{ alignSelf: 'stretch', marginBottom: 25 }}>
			<View style={[gStyles.button, { backgroundColor: "#fff" }]}>
				<Text style={{ color: "#000", fontWeight: "bold" }}>Signup</Text>
			</View>
		</TouchableOpacity>

		<Text style={styles.tos}>Terms of service</Text>

	  </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  texts: {
	alignItems: "center"
  },
  altTitle: {
	  fontSize: 18,
	  color: "#CAD1DA"
  },
  tos: {
	color: "#BDCCD7",
	textAlign: "center"
  }
});
