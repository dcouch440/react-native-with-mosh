import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';

function WelcomeScreen (props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/user.png')}
        />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;