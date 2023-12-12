import {View, Text, Image} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import {flashStyles} from './styles';
import Button from '../../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationProp} from '@react-navigation/native';
import SecondaryButton from '../../components/SecondaryButton';
const Splash = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <SafeAreaView>
      <Container>
        <View>
          <Image
            source={{
              uri: 'https://img.freepik.com/premium-vector/consultation-clinic-office_7737-1772.jpg?w=1480',
            }}
            style={flashStyles.flashImage}
          />
          <View style={flashStyles.textContainer}>
            <Text style={flashStyles.flashHeading}>
              One App to Replace them all.
            </Text>
            <Text style={flashStyles.highlightedText}>
              All your health related needs in one place.
            </Text>
          </View>
          <View style={flashStyles.flashButtons}>
            <Button
              label="Login"
              onPress={() => navigation.navigate('Login')}
            />
            <SecondaryButton
              label="Sign up"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default Splash;
