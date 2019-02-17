import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

let width = Dimensions.get('window').width

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = { isFocused: false }
	}
	render() {
	return (
		<View style={styles.wrapper}>
			<Text style={{ color: (!this.state.isFocused ? "#BCC5D1" : "#F3534A"), fontSize: 14 }}>{this.props.label}</Text>
			<TextInput
				style={[styles.input, { borderColor: (!this.state.isFocused ? "#BCC5D1" : "#F3534A") }]}
				//onChangeText={(text) => this.setState({text})}
				onChangeText={(text) => {
					this.props.onChangeText(text)
				}}
				placeholder={this.props.placeholder}
				placeholderTextColor={"#E1E3E8"}
				secureTextEntry={this.props.secureTextEntry}
				value={this.props.value}
				onFocus={() => this.setState({isFocused: true})}
				onBlur={() => this.setState({isFocused: false})}
			/>
		</View>
    );
  }
}

const styles = StyleSheet.create({
	wrapper: {
		width: width-40,
		marginBottom: 10
	},
	input: {
		height: 40,
		borderBottomWidth: 1,
		fontSize: 14
		//borderColor: (!this.state.isFocused ? "#BCC5D1" : "#F3534A"),
	}
});