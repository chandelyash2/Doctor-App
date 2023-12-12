import React from 'react';
import Splash from './src/screens/Splash/Splash';
import Login from './src/screens/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConfirmScreen from './src/screens/Login/ConfirmScreen';
import Signup from './src/screens/Signup/Signup';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen name="Flash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={ConfirmScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
