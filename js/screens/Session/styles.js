import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  infoContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  location: {
    fontSize: 16,
  },
  faveLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  startTime: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 10,
  },
  presentedBy: {
    fontWeight: '500',
    paddingBottom: 10,
  },
  speakerImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  speakerName: {
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 16,
  },
  presenterContainer: {
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favesButton: {
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
