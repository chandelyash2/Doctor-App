import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {loginStyles} from '../Login/styles';
import Input from '../../components/Input';
import {keyboardTypes} from '../types';
import Button from '../../components/Button';
import {NavigationProp} from '@react-navigation/native';

const Signup = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <ImageBackground source={require('../../../assets/home3.webp')}>
      <Container>
        <View style={loginStyles.loginContainer}>
          <Text style={loginStyles.loginWelcome}>Why Not Sign up?</Text>
          <Text style={loginStyles.loginWelcomeSmall}>Let's get you in</Text>
          <View style={loginStyles.loginForm}>
            <Input label="Full Name" />
            <Input label="Email" keyboard={keyboardTypes.EMAIL} />
            <Input label="Mobile Number" keyboard={keyboardTypes.NUMERIC} />
            <View>
              <Button
                label="Register"
                onPress={() => navigation.navigate('Verify')}
              />
              <Text style={loginStyles.loginAccount}>
                Already have an account?
                <Text
                  style={loginStyles.loginAccountSignup}
                  onPress={() => navigation.navigate('Login')}>
                  {' '}
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

export default Signup;
