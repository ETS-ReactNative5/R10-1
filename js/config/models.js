import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';

export const addFave = faveId => {
  try {
    return AsyncStorage.setItem(
      `${faveId}`,
      JSON.stringify({id: faveId, faved_on: new Date()}),
    );
  } catch (error) {
    return false;
  }
};

export const removeFave = faveId => {
  try {
    return AsyncStorage.removeItem(`${faveId}`);
  } catch (error) {
    return true;
  }
};

export const showFaves = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const allFaves = await AsyncStorage.multiGet(keys);
    return allFaves.filter(session => session[1].includes('faved_on'));
  } catch (error) {
    throw error;
  }
};

addFave.propTypes = {
  faveIds: PropTypes.string,
};

removeFave.propTypes = {
  faveIds: PropTypes.string,
};
