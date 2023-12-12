import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {loginStyles} from './styles';
import Button from '../../components/Button';
import OTPInput from '../../components/OTP/OTPInput';

const ConfirmScreen = () => {
  return (
    <ImageBackground source={require('../../../assets/home3.webp')}>
      <Container>
        <View style={loginStyles.confirmContainer}>
          <Text style={loginStyles.confrimHeading}>Verifying your number!</Text>
          <Text style={loginStyles.loginWelcomeSmall}>
            Please enter the verification code
          </Text>
          <View style={loginStyles.confirmForm}>
            <OTPInput />
            <View>
              <Button label="Verify" />
              <Text style={loginStyles.loginAccount}>
                Didn't receieve the code?
                <Text style={loginStyles.loginAccountSignup}> Resend</Text>
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </ImageBackground>
  );
};

export default ConfirmScreen;
