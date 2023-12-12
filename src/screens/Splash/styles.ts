import {StyleSheet} from 'react-native';
import {verticalScale} from '../../helper/metrics';

export const flashStyles = StyleSheet.create({
  flashImage: {
    width: 'auto',
    height: verticalScale(400),
  },
  textContainer: {
    marginTop: verticalScale(0),
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  flashHeading: {
    fontSize: 40,
    fontWeight: '700',
  },
  highlightedText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'gray',
    opacity: 0.9,
  },
  flashButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 20,
  },
});
