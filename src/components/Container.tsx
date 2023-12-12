import {View} from 'react-native';
import React from 'react';
import {globalStyle} from './global';

const Container = ({children}: {children: React.ReactNode}) => {
  return <View style={globalStyle.container}>{children}</View>;
};

export default Container;
