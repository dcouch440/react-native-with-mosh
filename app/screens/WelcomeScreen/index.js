import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';

function WelcomeScreen (props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}
    >
      <Image
        style={styles.logo}
        source={require('../../assets/icon.png')}
      />
      <Text>Sell What You Don't Need</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;