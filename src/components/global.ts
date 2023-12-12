import {StyleSheet} from 'react-native';
import {colors} from '../constants';

export const globalStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    borderColor: 'gray',
    borderBottomWidth: 3,
    padding: 4,
    fontSize: 16,
  },
  focusInput: {
    borderColor: colors.primary,
    borderBottomWidth: 3,
    padding: 4,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 14,

    borderRadius: 8,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontWeight: '700',
    fontSize: 20,
  },
  NotchAware: {
    flex: 1,
    paddingTop: 0,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpBox: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    width: 60,
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
