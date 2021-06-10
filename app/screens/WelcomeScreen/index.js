import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import AppButton from '../../components/AppButton';
import styles from './styles';

function WelcomeScreen (props) {
  return (
    <ImageBackground
      blurRadius= {1}
      style={styles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <AntDesign name="dingding" size={200} style={styles.logo}/>
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Hello' onPress={() => console.log('pressed')}/>
        <AppButton title='register' color='secondary' onPress={() => console.log('register')} />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;