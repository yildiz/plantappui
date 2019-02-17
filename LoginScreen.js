import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, MaskedViewIOS} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import Input from './components/Input';
import gStyles from './src/Style';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: "test",
			password: "test"
		}
	}
  render() {
    return (
      <LinearGradient colors={['#fff', '#fcfcfc']} style={gStyles.container}>
	  	<Icon name="arrowleft" size={30} color="#C5CCD6" style={{ marginBottom: 10, marginLeft: -5  }} />
	  	<View style={{ marginBottom: 40 }}>
			<Text style={[gStyles.headerTitle, gStyles.h1]}>Login</Text>
		</View>

		<View>
			<Input label="Email" placeholder="abc@def.com" value={this.state.email} onChangeText={(email) => this.setState({email})} />
			<Input label="Password" placeholder="******" value={this.state.password} onChangeText={(password) => this.setState({password})} secureTextEntry={true} />
		</View>

		<TouchableOpacity style={{ alignSelf: 'stretch', marginTop: 50, marginBottom: 25 }}>
			<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={gStyles.button} colors={['#0AC4BA', '#2BDA8E']}>
				<Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
			</LinearGradient>
		</TouchableOpacity>

		<Text style={styles.forgotPass}>Forgot your password?</Text>

	  </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
	forgotPass: {
		color: "#BDCCD7",
		textAlign: "center",
		textDecorationLine: "underline"
	}
});