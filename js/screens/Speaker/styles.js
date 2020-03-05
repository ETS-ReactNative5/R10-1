import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  close: {},
  titleContainer: {
    height: '20%',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  textContainer: {
    backgroundColor: 'white',
    height: '80%',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: '600',
  },
  bio: {
    fontSize: 16,
  },
  wikiButton: {
    backgroundColor: 'purple',
    marginTop: 30,
    borderRadius: 40,
    padding: 15,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default styles;
