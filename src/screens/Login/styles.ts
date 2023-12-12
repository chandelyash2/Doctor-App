import {verticalScale} from '../../helper/metrics';
import {colors} from './../../constants/index';
import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  loginWelcome: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
  },
  loginWelcomeSmall: {
    textAlign: 'center',
    marginTop: 6,
    color: 'gray',
    fontWeight: '700',
  },
  loginForm: {
    display: 'flex',
    gap: verticalScale(70),
    marginTop: verticalScale(70),
  },
  loginAccount: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '600',
    padding: 6,
    textAlign: 'center',
  },
  loginAccountSignup: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: '800',
  },
  confirmContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  confrimHeading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  confirmForm: {
    marginTop: verticalScale(80),
    display: 'flex',
    gap: 20,
  },
});
