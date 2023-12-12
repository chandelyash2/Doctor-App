import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../global';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs: any = [];

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };
  return (
    <View style={globalStyle.otpContainer}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={globalStyle.otpBox}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={value => handleOtpChange(value, index)}
          value={digit}
          ref={input => {
            inputs[index] = input;
          }}
        />
      ))}
    </View>
  );
};

export default OTPInput;
