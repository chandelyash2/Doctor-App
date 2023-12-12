import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyle} from './global';
import {ButtonProp} from './Button';

const SecondaryButton = ({label, onPress}: ButtonProp) => {
  return (
    <TouchableOpacity style={globalStyle.secondaryButton}>
      <Text style={globalStyle.buttonText} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
