import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, } from 'react-native';

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
	<ScrollView style={gStyles.container}>
	  	<Text style={[gStyles.headerTitle, gStyles.h1]}>Your home. </Text>
	  	<Image style={{ marginLeft: -20, marginTop: 20, marginBottom: 20, alignSelf: "stretch" }} source={require('./apartments-brewery-perla-projekt-praga-001.png')} />

		<View>
			<Text style={[gStyles.headerTitle, gStyles.h1]}>16 Best Plants That Thrive In Your Bedroom</Text>
			<View style={styles.labels}>
				<Text style={styles.labelText}>Interior</Text>
				<Text style={styles.labelText}>27 m²</Text>
				<Text style={styles.labelText}>Ideas</Text>
			</View>
			<Text style={styles.descriptionText}>Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.</Text>
			<View style={gStyles.divider} />
		</View>

		<View>
			<Text style={[gStyles.headerTitle, gStyles.h1]}>Gallery</Text>
			<View style={styles.galleryPhotos}>
				<Image style={styles.galleryPhoto} source={require('./src/images/gallery_1.png')} />
				<Image style={styles.galleryPhoto} source={require('./src/images/gallery_2.png')} />
				<View style={gStyles.box}>
					<Text style={gStyles.boxText}>+13</Text>
				</View>
			</View>
		</View>

	  </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	labels: {
		flexDirection: "row",
		marginBottom: 20
	},
	labelText: {
		color: "#9DA3B4",
		borderColor: "#E1E3E8",
		borderWidth: 1,
		borderRadius: 15,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 5,
		paddingBottom: 5,
		marginRight: 15
	},
	descriptionText: {
		color: "#9DA3B4",
		fontSize: 14,
		fontWeight: "100"
	},
	galleryPhotos: {
		flexDirection: "row"
	},
	galleryPhoto: {
		marginRight: 15,
		borderRadius: 4
	}
});