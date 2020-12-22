import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop:'30%',
    alignItems: 'center',
  },
  title: {
    fontSize:40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize:18,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: '100%',
    position:'absolute',
    resizeMode:'cover',
  }
});

export default  styles;