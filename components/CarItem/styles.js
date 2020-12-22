import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create ({
  carContainer: {
    width: '100%',
    height: Dimensions.get ('window').height,
  },
  titles: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 50,
  },
  subtitleCta: {
    textDecorationLine: 'underline',
  },
});

export default styles;
