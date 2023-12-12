import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyle} from './global';

export interface ButtonProp {
  label: string;
  onPress?: () => void;
}
const Button = ({label, onPress}: ButtonProp) => {
  return (
    <TouchableOpacity style={globalStyle.button}>
      <Text style={globalStyle.buttonText} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
