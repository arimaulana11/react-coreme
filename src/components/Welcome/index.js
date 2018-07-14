import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Link } from 'react-router-native';
import Container from '../Container';
import Header from '../Header';
import { Button } from '../Button';

const Welcome = (props: Object): Component => {
	return (
		<Container backgroundColor={'#fc0'}>
			<Header
				lrSize={80}
				rightContent={
					<Link to="/login">
						<Text style={{ textAlign: 'center', fontSize: 18 }}>Masuk</Text>
					</Link>
				} />
				<View style={{
					padding: 20
				}}>
					<View style={{
						marginTop: 50,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 50
					}}>
						<Image
							resizeMode="contain"
							style={{
								width: 100,
								height: 100,
							}}
							source={ require('../images/logo-dark-bg.png') }/>
						<Text style={{ marginTop: 20 }}>FotoBOX merupakan alat kreatif yang memiliki 2 kemampuan sekaligus, mengambil gambar dan mencetaknya disaat yang bersamaan</Text>
					</View>

					<Button caption="Lewati" style={{ marginBottom: 10, backgroundColor: '#fff'}} />
					<Button caption="Buat Akun" style={{ marginBottom: 10}} />
				</View>
		</Container>
	);
}

export default Welcome;