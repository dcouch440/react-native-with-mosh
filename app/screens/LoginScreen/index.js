import React, { useState } from 'react'
import Screen from '../../components/Screen'
import styles from './styles';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import {
  Image
} from 'react-native'

export default function LoginScreen ({  }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        source={require('../../assets/logo-red.png')}
        style={styles.logo}
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        placeholder='Email'
        textContentType='emailAddress'
      />
      <AppTextInput
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        onChangeText={text => setPassword(text)}
        placeholder='Password'
        secureTextEntry
        textContentType='password'
      />
      <AppButton
        title='Login'
        onPress={() => { console.table({email, password}) }}
      />
    </Screen>
  );
}
