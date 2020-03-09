import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  favesButton: {
    marginTop: 30,
    padding: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFill,
    height: 50,
    borderRadius: 40,
  },
});

export default styles;
