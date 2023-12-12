import {TextInput} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from './global';
import {keyboardTypes} from '../screens/types';

interface InputProp {
  label: string;
  keyboard?: keyboardTypes;
}
const Input = ({label, keyboard}: InputProp) => {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      placeholder={label}
      style={focus ? globalStyle.focusInput : globalStyle.input}
      keyboardType={keyboard || keyboardTypes.DEFAULT}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};

export default Input;
