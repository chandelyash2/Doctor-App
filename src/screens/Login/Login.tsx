import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {loginStyles} from './styles';
import {keyboardTypes} from '../types';
import {NavigationProp} from '@react-navigation/native';

const Login = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <ImageBackground source={require('../../../assets/home3.webp')}>
      <Container>
        <View style={loginStyles.loginContainer}>
          <View>
            <Text style={loginStyles.loginWelcome}>Good to see you!</Text>
            <Text style={loginStyles.loginWelcomeSmall}>
              Let's Continue the journey
            </Text>
          </View>
          <View style={loginStyles.loginForm}>
            <Input label="Phone Number" keyboard={keyboardTypes.NUMERIC} />
            <View>
              <Button
                label="Next"
                onPress={() => navigation.navigate('Verify')}
              />
              <Text style={loginStyles.loginAccount}>
                Don't have an account?
                <Text
                  style={loginStyles.loginAccountSignup}
                  onPress={() => navigation.navigate('Signup')}>
                  {' '}
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

export default Login;
