import React from 'react'
import Screen from '../../components/Screen'
import styles from './styles';
import AppButton from '../../components/AppButton';
import AppTextInput from '../../components/AppTextInput';
import { Formik } from 'formik'

import {
  Image
} from 'react-native'

export default function LoginScreen () {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {
          ({ handleChange, handleSubmit }) => (
            <>
              <Image
                source={require('../../assets/logo-red.png')}
                style={styles.logo}
              />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                onChangeText={handleChange('email')}
                placeholder='Email'
                textContentType='emailAddress'
              />
              <AppTextInput
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                onChangeText={handleChange('password')}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
              />
              <AppButton
                title='Login'
                onPress={handleSubmit}
              />
            </>
          )
        }
      </Formik>
    </Screen>
  );
}
